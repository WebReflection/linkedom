self.linkedom = (function (exports) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  var voidElements = {
    test: function test() {
      return true;
    }
  };
  var Mime = {
    'text/html': {
      docType: '<!DOCTYPE html>',
      ignoreCase: true,
      voidElements: /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i
    },
    'text/xml': {
      docType: '<?xml version="1.0" encoding="utf-8"?>',
      ignoreCase: false,
      voidElements: voidElements
    },
    'application/xml': {
      docType: '<?xml version="1.0" encoding="utf-8"?>',
      ignoreCase: false,
      voidElements: voidElements
    },
    'application/xhtml+xml': {
      docType: '<?xml version="1.0" encoding="utf-8"?>',
      ignoreCase: false,
      voidElements: voidElements
    },
    'image/svg+xml': {
      docType: '',
      voidElements: voidElements
    }
  };
  var Type = {
    Element: 1,
    ElementEnd: -1,
    Attribute: 2,
    Text: 3,
    Comment: 8,
    Document: 9,
    Fragment: 11
  };
  var invalidOperation = function invalidOperation() {
    throw new TypeError('invalid operation');
  };
  var link = function link(before, after) {
    before.next = after;
    after.prev = before;
  };

  var Node =
  /**
   * @param {number} nodeType the Node type
   * @param {string} name the Node name
   */
  function Node(nodeType, name) {
    _classCallCheck(this, Node);

    this.nodeType = nodeType;
    this.name = name;
    this.next = null;
    this.prev = null;
    this.parentNode = null;
    this.ownerDocument = null;
  };

  var ATTRIBUTE_NODE = Type.Attribute;
  var Attribute = /*#__PURE__*/function (_Node) {
    _inherits(Attribute, _Node);

    var _super = _createSuper(Attribute);

    /**
     * @param {string} localName the attribute localName
     * @param {string} value the attribute value
     */
    function Attribute(localName, value) {
      var _this;

      _classCallCheck(this, Attribute);

      _this = _super.call(this, ATTRIBUTE_NODE, localName);
      _this.value = value;
      return _this;
    }

    _createClass(Attribute, [{
      key: "toString",
      value: function toString() {
        var name = this.name,
            value = this.value;
        return value ? "".concat(name, "=\"").concat(value, "\"") : name;
      }
    }]);

    return Attribute;
  }(Node);

  var COMMENT_NODE = Type.Comment;
  var Comment = /*#__PURE__*/function (_Node) {
    _inherits(Comment, _Node);

    var _super = _createSuper(Comment);

    /**
     * @param {string} value 
     */
    function Comment(value) {
      var _this;

      _classCallCheck(this, Comment);

      _this = _super.call(this, COMMENT_NODE, '#comment');
      _this.value = value;
      return _this;
    }

    _createClass(Comment, [{
      key: "toString",
      value: function toString() {
        return "<!--".concat(this.value, "-->");
      }
    }]);

    return Comment;
  }(Node);

  var index = function index(_ref, name) {
    var classes = _ref.classes,
        element = _ref.element;
    return {
      i: classes.indexOf(name),
      classes: classes,
      update: function update() {
        element.setAttribute('class', classes.join(' '));
      }
    };
  };

  var ClassList = /*#__PURE__*/function () {
    function ClassList(element) {
      _classCallCheck(this, ClassList);

      this.element = element;
      this.classes = [];
    }

    _createClass(ClassList, [{
      key: "add",
      value: function add(name) {
        var _index = index(this, name),
            i = _index.i,
            classes = _index.classes,
            update = _index.update;

        if (i < 0) {
          classes.push(name);
          update();
        }
      }
    }, {
      key: "contains",
      value: function contains(name) {
        return -1 < index(this, name).i;
      }
    }, {
      key: "remove",
      value: function remove(name) {
        var _index2 = index(this, name),
            i = _index2.i,
            classes = _index2.classes,
            update = _index2.update;

        if (-1 < i) {
          classes.splice(i, 1);
          update();
        }
      }
    }]);

    return ClassList;
  }();

  var TEXT_NODE = Type.Text;
  var Text = /*#__PURE__*/function (_Node) {
    _inherits(Text, _Node);

    var _super = _createSuper(Text);

    /**
     * @param {string} value 
     */
    function Text(value) {
      var _this;

      _classCallCheck(this, Text);

      _this = _super.call(this, TEXT_NODE, '#text');
      _this.value = value;
      return _this;
    }

    _createClass(Text, [{
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }]);

    return Text;
  }(Node);

  var DOCUMENT_FRAGMENT_NODE = Type.Fragment;
  var ELEMENT_END_NODE = Type.ElementEnd;
  var ELEMENT_NODE = Type.Element;

  var between = function between(before, current, after) {
    var beforeEnd = before.nodeType === ELEMENT_NODE && // allow empty nodes insertion
    before !== after.prev ? before.end : before;

    switch (current.nodeType) {
      case DOCUMENT_FRAGMENT_NODE:
        link(beforeEnd, current.next);
        link(current.end.prev, after);
        link(current, current.end);
        break;

      case ELEMENT_NODE:
        link(beforeEnd, current);
        link(current.end, after);
        break;

      default:
        link(beforeEnd, current);
        link(current, after);
        break;
    }
  };

  var insertable = function insertable(_ref) {
    var nodeType = _ref.nodeType;

    switch (nodeType) {
      case COMMENT_NODE:
      case ELEMENT_NODE:
      case DOCUMENT_FRAGMENT_NODE:
      case TEXT_NODE:
        return true;

      default:
        return false;
    }
  };

  var setParent = function setParent(child, parentNode) {
    switch (child.nodeType) {
      case DOCUMENT_FRAGMENT_NODE:
        var next = child.next,
            end = child.end;

        while (next && next !== end) {
          next.parentNode = parentNode;

          switch (next.nodeType) {
            case ELEMENT_NODE:
              next = next.end.next;
              break;

            default:
              next = next.next;
              break;
          }
        }

        break;

      default:
        var childParent = child.parentNode;

        if (childParent !== parentNode) {
          if (childParent) childParent.removeChild(child);
          child.parentNode = parentNode;
        }

        break;
    }
  };

  var ElementEnd = /*#__PURE__*/function (_Node) {
    _inherits(ElementEnd, _Node);

    var _super = _createSuper(ElementEnd);

    function ElementEnd() {
      _classCallCheck(this, ElementEnd);

      return _super.call(this, ELEMENT_END_NODE, '#/>');
    }

    return ElementEnd;
  }(Node);

  var Element = /*#__PURE__*/function (_Node2) {
    _inherits(Element, _Node2);

    var _super2 = _createSuper(Element);

    /**
     * @param {string} name the Element name
     */
    function Element(name) {
      var _this;

      var isVoid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck(this, Element);

      _this = _super2.call(this, ELEMENT_NODE, name);
      _this["void"] = isVoid;
      _this.end = new ElementEnd();
      _this.classList = new ClassList(_assertThisInitialized(_this));
      link(_assertThisInitialized(_this), _this.end);
      return _this;
    }

    _createClass(Element, [{
      key: "hasChildNodes",
      value: function hasChildNodes() {
        return this.next !== this.end;
      }
    }, {
      key: "getAttribute",
      value: function getAttribute(name) {
        var next = this.next;

        while (next.nodeType === ATTRIBUTE_NODE) {
          if (next.name === name) return next.value;
          next = next.next;
        }

        return null;
      }
    }, {
      key: "getAttributeNode",
      value: function getAttributeNode(name) {
        var next = this.next;

        while (next.nodeType === ATTRIBUTE_NODE) {
          if (next.name === name) return next;
          next = next.next;
        }

        return null;
      }
    }, {
      key: "hasAttribute",
      value: function hasAttribute(name) {
        var next = this.next;

        while (next.nodeType === ATTRIBUTE_NODE) {
          if (next.name === name) return true;
          next = next.next;
        }

        return false;
      }
      /**
       * Update, or create, an attribute with `name` / `value` details.
       * @param {string} name the attribute name.
       * @param {string} value the attribute value.
       */

    }, {
      key: "setAttribute",
      value: function setAttribute(name, value) {
        var next = this.next;

        while (next.nodeType === ATTRIBUTE_NODE) {
          if (next.name === name) {
            next.value = value;
            return;
          }

          next = next.next;
        }

        this.insertBefore(new Attribute(name, value));
      }
    }, {
      key: "setAttributeNode",
      value: function setAttributeNode(attribute) {
        if (attribute.nodeType !== ATTRIBUTE_NODE) invalidOperation();

        if (this.attributes.indexOf(attribute) < 0) {
          this.insertBefore(attribute);
        }
      }
      /**
       * Remove the attribute matching `name`, if any.
       * @param {string} name the attribute name to remove.
       */

    }, {
      key: "removeAttribute",
      value: function removeAttribute(name) {
        var next = this.next;

        while (next.nodeType === ATTRIBUTE_NODE) {
          if (next.name === name) {
            this.removeChild(next);
            break;
          }

          next = next.next;
        }
      }
    }, {
      key: "append",
      value: function append() {
        for (var i = 0, length = arguments.length; i < length; i++) {
          this.insertBefore(arguments[i]);
        }
      }
    }, {
      key: "appendChild",
      value: function appendChild(child) {
        return this.insertBefore(child);
      }
      /**
       * Insert a node in this element, including attributes, which are always
       * inserted as first linked node.
       * @param {Attribute|Comment|Element|Fragment|Text} child to be inserted.
       * @param {Comment?|Element?|Text?} before the node used to insert before.
       */

    }, {
      key: "insertBefore",
      value: function insertBefore(child) {
        var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (before) {
          var parentNode = before.parentNode,
              prev = before.prev;
          if (parentNode !== this || !insertable(child)) invalidOperation();
          setParent(child, this);
          between(prev, child, before);
        } else if (child.nodeType === ATTRIBUTE_NODE) {
          setParent(child, this);
          var next = this.next;
          link(this, child);
          link(child, next);
        } else if (insertable(child)) {
          setParent(child, this);
          between(this.end.prev, child, this.end);
        } else invalidOperation();

        return child;
      }
      /**
       * Remove any valid node from this element.
       * @param {Attribute|Comment|Element|Text} child to be removed.
       */

    }, {
      key: "removeChild",
      value: function removeChild(child) {
        var parentNode = child.parentNode,
            prev = child.prev,
            next = child.next,
            nodeType = child.nodeType;
        if (parentNode !== this) invalidOperation();
        child.parentNode = null;

        switch (nodeType) {
          case ELEMENT_NODE:
            link(prev, child.end.next);
            child.prev = child.end.next = null;
            break;

          default:
            link(prev, next);
            child.prev = child.next = null;
            break;
        }

        return child;
      }
    }, {
      key: "toString",
      value: function toString() {
        var traverse = true;
        var end = this.end,
            name = this.name,
            next = this.next,
            isVoid = this["void"];
        var out = ["<".concat(name)];

        while (traverse) {
          switch (next.nodeType) {
            case ATTRIBUTE_NODE:
              out.push(" ".concat(next.toString()));
              next = next.next;
              break;

            case ELEMENT_END_NODE:
              out.push(isVoid ? " />" : "></".concat(name, ">"));
              traverse = false;
              break;

            default:
              out.push(">");

              do {
                out.push(next.toString());

                switch (next.nodeType) {
                  case ELEMENT_NODE:
                    next = next.end.next;
                    break;

                  case TEXT_NODE:
                  case COMMENT_NODE:
                    next = next.next;
                    break;

                  default:
                    throw new TypeError('invalid structure');
                }
              } while (next !== end);

              out.push("</".concat(name, ">"));
              traverse = false;
              break;
          }
        }

        return out.join('');
      }
    }, {
      key: "id",
      get: function get() {
        return this.getAttribute('id');
      },
      set: function set(id) {
        this.setAttribute('id', id);
      }
      /**
       * @return {Attribute[]} the list if attributes.
       */

    }, {
      key: "attributes",
      get: function get() {
        var out = [];
        var next = this.next;

        while (next.nodeType === ATTRIBUTE_NODE) {
          out.push(next);
          next = next.next;
        }

        return out;
      }
      /**
       * @return {Element[]} all elements in this node.
       */

    }, {
      key: "children",
      get: function get() {
        var out = [];
        var next = this.next,
            end = this.end;

        while (next !== end) {
          switch (next.nodeType) {
            case ELEMENT_NODE:
              out.push(next);
              next = next.end.next;
              break;

            default:
              next = next.next;
              break;
          }
        }

        return out;
      }
      /**
       * @return {Comment?|Element?|Text?} the first non-attribute node, if any.
       */

    }, {
      key: "firstChild",
      get: function get() {
        var next = this.next,
            end = this.end;

        while (next.nodeType === ATTRIBUTE_NODE) {
          next = next.next;
        }

        return next === end ? null : next;
      }
      /**
       * @return {Comment?|Element?|Text?} the last non-attribute node, if any.
       */

    }, {
      key: "lastChild",
      get: function get() {
        var firstChild = this.firstChild;
        var lastChild = firstChild;

        while (firstChild) {
          switch (firstChild.nodeType) {
            case Type.ElementEnd:
              return lastChild;

            case ELEMENT_NODE:
              lastChild = firstChild;
              firstChild = firstChild.end.next;
              break;

            default:
              lastChild = firstChild;
              firstChild = firstChild.next;
              break;
          }
        }

        return lastChild;
      }
    }]);

    return Element;
  }(Node);

  var DOCUMENT_FRAGMENT_NODE$1 = Type.Fragment;
  var Fragment = /*#__PURE__*/function (_Element) {
    _inherits(Fragment, _Element);

    var _super = _createSuper(Fragment);

    function Fragment() {
      var _this;

      _classCallCheck(this, Fragment);

      _this = _super.call(this, '#fragment');
      _this.nodeType = DOCUMENT_FRAGMENT_NODE$1;
      return _this;
    }

    return Fragment;
  }(Element);

  var DOCUMENT_NODE = Type.Document;
  var Document = /*#__PURE__*/function (_Node) {
    _inherits(Document, _Node);

    var _super = _createSuper(Document);

    /**
     * @param {string} kind the kind of document: html, xml, svg
     */
    function Document(mimeType) {
      var _this;

      _classCallCheck(this, Document);

      _this = _super.call(this, DOCUMENT_NODE, '#document');
      mimeType = mimeType.toLowerCase();
      var _Mime$mimeType = Mime[mimeType],
          docType = _Mime$mimeType.docType,
          ignoreCase = _Mime$mimeType.ignoreCase,
          voidElements = _Mime$mimeType.voidElements;
      _this.docType = docType;
      _this.ignoreCase = ignoreCase;
      _this.voidElements = voidElements;

      if (mimeType === 'image/svg+xml') {
        _this.root = _this.createElement('svg');

        _this.root.setAttribute('version', '1.1');

        _this.root.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      }

      return _this;
    }
    /**
     * @returns {Element?} the root element or `null` if none is present.
     */


    _createClass(Document, [{
      key: "createAttribute",
      value: function createAttribute(name) {
        var attribute = new Attribute(name, '');
        attribute.ownerDocument = this;
        return attribute;
      }
    }, {
      key: "createComment",
      value: function createComment(value) {
        var comment = new Comment(value);
        comment.ownerDocument = this;
        return comment;
      }
    }, {
      key: "createDocumentFragment",
      value: function createDocumentFragment() {
        var fragment = new Fragment();
        fragment.ownerDocument = this;
        return fragment;
      }
    }, {
      key: "createElement",
      value: function createElement(name) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var element = new Element(name, this.voidElements.test(name));
        element.ownerDocument = this;
        if (options.is) element.setAttribute('is', options.is);
        return element;
      }
    }, {
      key: "createTextNode",
      value: function createTextNode(value) {
        var text = new Text(value);
        text.ownerDocument = this;
        return text;
      }
    }, {
      key: "getElementById",
      value: function getElementById(id) {
        var next = this.next;

        while (next) {
          if (next.nodeType === ELEMENT_NODE && next.id === id) return next;
          next = next.next;
        }

        return null;
      }
    }, {
      key: "getElementsByClassName",
      value: function getElementsByClassName(name) {
        var ignoreCase = this.ignoreCase;
        if (ignoreCase) name = name.toLowerCase();
        var out = [];
        var next = this.next;

        while (next) {
          if (next.nodeType === ELEMENT_NODE && next.classList.contains(name)) out.push(next);
          next = next.next;
        }

        return out;
      }
    }, {
      key: "getElementsByTagName",
      value: function getElementsByTagName(name) {
        var ignoreCase = this.ignoreCase;
        if (ignoreCase) name = name.toLowerCase();
        var out = [];
        var next = this.next;

        while (next) {
          if (next.nodeType === ELEMENT_NODE) {
            if ((ignoreCase ? next.name.toLowerCase() : next.name) === name) out.push(next);
          }

          next = next.next;
        }

        return out;
      } // TODO: make XML possible if doctype is not html

    }, {
      key: "toString",
      value: function toString() {
        return "".concat(this.docType).concat(this.next || '');
      }
    }, {
      key: "root",
      get: function get() {
        return this.next;
      }
      /**
       * @param {Element?} root the root element to be set or `null` to clean up.
       */
      ,
      set: function set(root) {
        if (root) {
          if (root.nodeType !== ELEMENT_NODE) invalidOperation();
          var parentNode = root.parentNode;
          if (parentNode && parentNode.nodeType === ELEMENT_NODE) parentNode.removeChild(root);
          link(this, root);
          root.parentNode = this;
        } else {
          var next = this.next;

          if (next) {
            next.prev = null;
            next.parentNode = null;
            this.next = null;
          }
        }
      }
    }]);

    return Document;
  }(Node);

  var HTMLDocument = /*#__PURE__*/function (_Document) {
    _inherits(HTMLDocument, _Document);

    var _super = _createSuper(HTMLDocument);

    function HTMLDocument() {
      _classCallCheck(this, HTMLDocument);

      return _super.call(this, 'text/html');
    }

    _createClass(HTMLDocument, [{
      key: "documentElement",
      get: function get() {
        return this.root || (this.root = this.createElement('html'));
      }
    }, {
      key: "head",
      get: function get() {
        var documentElement = this.documentElement;
        return documentElement.children.find(function (child) {
          return /^body$/i.test(child.name);
        }) || documentElement.insertBefore(this.createElement('head'), this.body);
      }
    }, {
      key: "body",
      get: function get() {
        var documentElement = this.documentElement;
        return documentElement.children.find(function (child) {
          return /^body$/i.test(child.name);
        }) || documentElement.appendChild(this.createElement('body'));
      }
    }]);

    return HTMLDocument;
  }(Document);

  var SVGDocument = /*#__PURE__*/function (_Document) {
    _inherits(SVGDocument, _Document);

    var _super = _createSuper(SVGDocument);

    function SVGDocument() {
      _classCallCheck(this, SVGDocument);

      return _super.call(this, 'image/svg+xml');
    }

    return SVGDocument;
  }(Document);

  var XMLDocument = /*#__PURE__*/function (_Document) {
    _inherits(XMLDocument, _Document);

    var _super = _createSuper(XMLDocument);

    function XMLDocument() {
      _classCallCheck(this, XMLDocument);

      return _super.call(this, 'text/xml');
    }

    return XMLDocument;
  }(Document);

  exports.Document = Document;
  exports.HTMLDocument = HTMLDocument;
  exports.SVGDocument = SVGDocument;
  exports.XMLDocument = XMLDocument;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}).default);
