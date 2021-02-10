# The idea behind LinkeDOM

More than a developer had some difficulty understanding why, or how,  *linkedom* is fast, or it uses less RAM, and the quick/short answer, is that no *array* manipulation, retention, or even creation, ever happens, and all operations are basically "*a property update*" away.

The purpose of this page though, is to to walk anyone interested into the idea behind *linkedom* via some explaining metaphor, but also a few working examples ... so, let's start with the metaphors!


### what is a `char`?

As obvious as this question might sound, the main concept behind *linkedom* is based on how `char` and `string` differ, at least in the good old `C` world.

A char is a *single quoted* representation of a letter defined by the [ASCII](https://en.wikipedia.org/wiki/ASCII#Character_set) standard, packing a whole *byte* with it, so that it can represent up to *256* values, or `0` to `255` inclusive.

```js
(255).toString(2);
// "11111111" a whole byte
```


### ... and what is a `string`?

Still taking `C` as reference, a *string* is an array of *char* that contains *at least* one *char* in it, which is its ending, also known as `NUL` char, which has code, and `int` value, equal to `0`. A *string* is also always double-quoted.

```C
// pseudo C code and types
int length(string value) {
  int len = 0;
  // note we don't check for null, we check for 0
  for (int i = 0; value[i] != 0; len++) {}
  return len;
}

// strings must be double quoted
string empty = "";
string full = "any";

// 0
length(empty);

//3
length(full);

// true
empty[0] == 0;

// true, true, true, true
full[0] == 'a';
full[1] == 'n';
full[2] == 'y';
full[3] == 0;

// some random memory/byte we should not access
empty[1] == ?;
full[4] == ?;
```

Accordingly, a *string* is represented by a starting point, which is the string reference itself, and an ending point, the `NUL` char with value `0`.

The real length, in terms of memory allocation, of a string, is then always *its number of chars + 1*, but we don't, usually, get to ever see, or consider, its closing char.


### and how is this relevant?

Even if the *DOM* is effectively seen, crawled, and manipulated as a tree, we actually represent it as a *string* all the time:

```js
// is this really a tree, or just a string?
const parsedAsTree = `<tag id="value">content<br /></tag>`;
```

The *DOM* tree is just a representation of the markup language defined via the string, but its parsing is linear too, as "*there is no tree*" in strings.

Now, similarly with the difference we have between *char* and *string*, where the latter is an extension of the first kind, the *DOM* is represented by *Node* and *Element*, where *Node* is a single entity with a single value, and *Element* is an extension that, conveniently, can also contain other *elements* in it.

```js
`  <tag       id="value"> content  <br />         </tag>`
// Element -> Node ->     Node ->  Element->End   End
```

Instead of a `NUL` char, each *Element* can have an *End* node that defines the boundaries of such element itself, and differently from a *string*, an *Element* can have within its boundaries other *Element* nodes (while a *string* cannot have inner strings).

Representing this concept as string, let's assume an element starts as `[`, ends as `]`, an attribute is `@`, and text is `!`, so that previous markup, could be written as `"[@![]]"`:

```js
"  [          @           !        [          ]     ]"
// Element -> Node ->     Node ->  Element->End   End
```

Still confused? Fair enough, so let's see in practice how these concepts can get applied to linked *nodes*.



## The Node Class

The most basic details that a *node* should expose are:

  * the node `type`, so we can distinguish between different kind of nodes
  * the node `prev`, so we can define, or reach, the previous linked node, if any
  * the node `next`, so we can define, or reach, the next linked node, if any

```js
class Node {
  static ELEMENT = 1;
  static ATTRIBUTE = 2;
  static TEXT = 3;

  constructor(type) {
    this.type = type;
    this.prev = null;
    this.next = null;
  }
}
```

With this basic *class*, we could already define the previous *HTML* example as a *left to right* linked list:

```js
const {ELEMENT, ATTRIBUTE, TEXT} = Node;

// <tag id="value">content<br /></tag>
const tag = new Node(ELEMENT);

const id = new Node(ATTRIBUTE);
tag.next = id;

const content = new Node(TEXT);
id.next = content;

const br = new Node(ELEMENT);
content.next = br;

// crawling the <tag>
let next = tag;
while (next !== null) {
  console.log(next.type);
  next = next.next;
}
// 1, 2, 3, 1
```

This is a basic demonstration that, while we consider that *HTML* a tree, with an outer container and two child nodes, the *DOM* can be crawled linearly, as long as there is a *next* node to point at.

- - -
**Side note** this is also how *template literals tag* based libraries, such as [µhtml](https://github.com/WebReflection/uhtml#readme) or [µhtml-ssr](https://github.com/WebReflection/uhtml-ssr#readme), parse the template content, and relate interpolations to the right place: the traversing is always linear!
- - -

Back to the topic, since we'd like to reuse that `tag` reference, and since we want to be able to crawl anything back, we need to setup each node as *double linked list* instead.

```js
const {ELEMENT, ATTRIBUTE, TEXT} = Node;

const tag = new Node(ELEMENT);
const id = new Node(ATTRIBUTE);
tag.next = id;
id.prev = tag;

const content = new Node(TEXT);
id.next = content;
content.prev = id;

const br = new Node(ELEMENT);
content.next = br;
br.prev = content;
```

Because we are developers, and we don't like to repeat ourselves or stress our fingers typing, here a more *DRY* approach:

```js
const {ELEMENT, ATTRIBUTE, TEXT} = Node;

const setAdjacent = (before, after) => {
  before.next = after;
  after.prev = before;
};

const tag = new Node(ELEMENT);
const id = new Node(ATTRIBUTE);
setAdjacent(tag, id);

const content = new Node(TEXT);
setAdjacent(id, content);

const br = new Node(ELEMENT);
setAdjacent(content, br);
```

Great ... but something is still missing: we don't really have any special meaning for *attributes*, *text*, or *elements*, except a numeric `type` ... but that doesn't really tell us much, isn't it?

Let's see how we can improve there.


## The Text Class

The *text* node is like the string's *char*: it doesn't have boundaries and it represents only *one* value.

```js
class Text extends Node {
  constructor(value = "") {
    super(Node.TEXT);
    this.value = value;
  }
}

// example
const content = new Text("some content");
content.type;   // 3 => Node.TEXT
content.value;  // "some content"
```

Just perfect: it's a *node* that carries some *text*!

## The Attribute Class

Differently form *text*, *attributes* are still a single *node* that cannot contain any children, but these have also a name, beside a value.

```js
class Attribute extends Node {
  constructor(name, value = "") {
    super(Node.ATTRIBUTE);
    this.name = name;
    this.value = value;
  }
}

// example
const attr = new Attribute("id");
attr.name;    // "id"
attr.value;   // ""

attr.value = "unique";
```

Wonderful! We have all child nodes we need to represent the content of an *element*, which is indeed the next class we are going to define.


## The Element Class

Like *string* in *C*, *elements* need to define their own boundaries, so that each *element* should have a reference to its ending boundary, like the `NUL` char is for strings.

Vice-versa, even if not strictly necessary, it's convenient to have such end boundary able to reach its starting reference, so that we don't need to crawl back all *previous* nodes each time we are walking *right to left*, instead of *left to right*, and we can skip-jump after the end, or before the start, with ease.

```js
class End extends Node {
  constructor(start) {
    // explained later
    super(Node.ELEMENT * -1);
    this.start = start;
  }
}

class Element extends Node {
  constructor(name) {
    super(Node.ELEMENT);
    this.name = name;
    this.end = new End(this);
    // important!
    setAdjacent(this, this.end);
  }
}

// example
const el = new Element('tag');
el.prev;            // null
el.next === el.end; // true
el.end.prev === el; // true
el.end.next;        // null
```

The amount of extra operations might be overwhelming, compared to what we needed with `Text` and `Attribute`, but this structure is pretty much "*the linkedom key to success*":

  * the `End` `type` is recognizable as the opposite of its opening: `-1`
  * the `End` `type` only needs a pointer to its starting node
  * the `Element` `name` defines the *tag* name
  * the `Element` `end` defines its *right-most* boundary
  * both `Element` and `End` are immediately adjacent per each new *element*

With these classes and basic properties, we can now fully represent, traverse, or serialize back, the initial string:

```js
// reproducing
// <tag id="value">content<br /></tag>

const tag = new Element('tag');
const id = new Attribute('id', 'value');
// place this node before the element end
setAdjacent(id, tag.end);
setAdjacent(tag, id);

const content = new Text('content');
// place this node before the element end
// and after last known node
setAdjacent(content, tag.end);
setAdjacent(id, content);

// place this element before the element end
// and after last known node
const br = new Element('br');
setAdjacent(br.end, tag.end);
setAdjacent(content, br);

// let's write the initial output
const output = [];
let next = tag;
let isOpen = false;
while (next) {
  switch (next.type) {
    case Node.ELEMENT:
      if (isOpen)
        output.push('>');
      isOpen = true;
      output.push('<', next.name);
      break;
    case Node.ATTRIBUTE:
      output.push(' ', next.name, '="', next.value, '"');
      break;
    case Node.TEXT:
      if (isOpen) {
        isOpen = false;
        output.push('>');
      }
      output.push(next.value);
      break;
    case (Node.ELEMENT * -1):
      if (isOpen) {
        isOpen = false;
        output.push(' />');
      }
      else
        output.push('</', next.start.name, '>');
      break;
  }
  next = next.next;
}

console.log(output.join(''));
// <tag id="value">content<br /></tag>
// 🎉
```


## Some simplification or shortcut

Technically, all the primitives that fuel *linkedom* are already in place, but few things can be simplified further.

As example, dance to set a *node* between a previous *node* and another *node*, can be simplified, but we also would like to be able to remove a *node* and set its boundaries as `null`, so that `null`, as either previous or next value, should be expected:

```js
const setAdjacent = (before, after) => {
  if (before !== null)
    before.next = after;
  if (after !== null)
    after.prev = before;
};

const setBoundaries = (before, current, after) => {
  setAdjacent(before, current);
  // skip to the node end if needed
  if (current.type === Node.ELEMENT)
    current = current.end;
  setAdjacent(current, after);
};

// previous example rewritten
const tag = new Element('tag');
const id = new Attribute('id', 'value');
setBoundaries(tag, id, tag.end);

const content = new Text('content');
setBoundaries(id, content, tag.end);

const br = new Element('br');
setBoundaries(content, br, tag.end);
```

The `setBoundaries` helper can be used for pretty much any kind of operation. As example, given an *element*, we could always perform an `appendChild(node)` like this: `setBoundaries(el.end.prev, node, el.end)`, as the `el.end.prev` is always either the `el` itself, or its last node.

Please note though, that the amount of helpers are more than just this one, so that `getNext(el)` or `getPrev(el)` might ensure that if `end.prev` is the ending node, the returned reference would be `end.prev.start` instead, to mimic a `previousSibling` operation.


### Shortcuts

The most useful shortcut that makes it possible to avoid backward loops to find a `parentNode`, is the `parentNode` property itself. This property is `null` by default for all nodes, but it changes every time a node gets appended, or removed.

Accordingly, even if seen as *yet another pointer*, for pragmatism sake, the `parentNode` will always point at the starting *element* that contains the current one, if any. This property is also useful as very *cheap* check to know if a node `isConnected` or not.

For *attributes* though, the `ownerElement` is the easiest way to retrieve their parent node, and while it's not necessary to have *attributes* always linked before any *element* content, *linkedom* uses this convention so that it's easy to skip where the content starts, but also easier to create a string out of the linked list that each *element* represents.

```js
const childNodes = element => {
  const nodeList = [];
  let {next, end} = element;
  while (next !== end) {
    if (next.type !== Node.ATTRIBUTE) {
      nodeList.push(next);
      if (next.type === Node.ELEMENT)
        next = next.end;
    }
    next = next.next;
  }
  return nodeList;
};
```

All these little helpers are super cheap, and always a *while* loop away, most of the time confined within *elements* boundaries.


## The End

While everything else is literally published in this repository, so that it wouldn't make much sense to comment on everything written in here, I hope this page helped understanding how "*linkedom magic*" works, why it's linearly fast, or predictable, in terms of performance, and maybe help you recycle this idea to "*flatten out*" other *trees*, used here and there in the software industry.

Last, but not least, I'll leave some utility and class here, so that'd be easier to play around with this pattern/idea 👋

```js
// Utilities
const setAdjacent = (before, after) => {
  if (before !== null)
    before.next = after;
  if (after !== null)
    after.prev = before;
};

const setBoundaries = (before, current, after) => {
  setAdjacent(before, current);
  if (current.type === Node.ELEMENT)
    current = current.end;
  setAdjacent(current, after);
};

const toString = node => {
  const output = [];
  let isOpen = false;
  while (node) {
    switch (node.type) {
      case Node.ELEMENT:
        if (isOpen)
          output.push('>');
        isOpen = true;
        output.push('<', node.name);
        break;
      case Node.ATTRIBUTE:
        output.push(' ', node.name, '="', node.value, '"');
        break;
      case Node.TEXT:
        if (isOpen) {
          isOpen = false;
          output.push('>');
        }
        output.push(node.value);
        break;
      case Node.END:
        if (isOpen) {
          isOpen = false;
          output.push(' />');
        }
        else
          output.push('</', node.start.name, '>');
        break;
    }
    node = node.next;
  }
  return output.join('');
};

const append = (element, ...nodes) => {
  const {end} = element;
  for (const node of nodes)
    setBoundaries(end.prev, node, end);
};

// Classes
class Node {
  static END = -1;
  static ELEMENT = 1;
  static ATTRIBUTE = 2;
  static TEXT = 3;

  constructor(type) {
    this.type = type;
    this.prev = null;
    this.next = null;
  }
}

class End extends Node {
  constructor(start) {
    super(Node.END);
    this.start = start;
  }
}

class Element extends Node {
  constructor(name) {
    super(Node.ELEMENT);
    this.name = name;
    this.end = new End(this);
    setAdjacent(this, this.end);
  }
}

class Attribute extends Node {
  constructor(name, value = "") {
    super(Node.ATTRIBUTE);
    this.name = name;
    this.value = value;
  }
}

class Text extends Node {
  constructor(value = "") {
    super(Node.TEXT);
    this.value = value;
  }
}
```
