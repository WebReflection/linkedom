const assert = require('../assert.js').for('MutationObserver');

const {parseHTML} = global[Symbol.for('linkedom')];

const milliseconds = ms => new Promise($ => setTimeout($, ms));

let {document: newDoc} = parseHTML('<html />');

(async () => {
  const window = newDoc.defaultView;

  const checkRecord = (
    {
      type: aType,
      target: aTarget,
      addedNodes: aAddedNodes,
      removedNodes: aRemovedNodes,
      attributeName: aAttributeName,
      oldValue: aOldValue
    },
    {
      type: bType,
      target: bTarget,
      addedNodes: bAddedNodes,
      removedNodes: bRemovedNodes,
      attributeName: bAttributeName,
      oldValue: bOldValue
    }
  ) => {
    return (
      aType === bType &&
      aTarget === bTarget &&
      (aAddedNodes || []).every((node, i) => node === bAddedNodes[i]) &&
      (aRemovedNodes || []).every((node, i) => node === bRemovedNodes[i]) &&
      (aAttributeName || null) === (bAttributeName || null) &&
      aOldValue === bOldValue
    );
  };

  let {MutationObserver} = window;
  let args = null;
  let observer = new MutationObserver(records => {
    args = records;
  });

  let notObserved = newDoc.documentElement.appendChild(
    newDoc.createElement('not-observed')
  );

  let observed = newDoc.documentElement.appendChild(
    newDoc.createElement('observed')
  );

  observer.observe(observed, {
    attributes: true,
    attributeFilter: ['first']
  });

  observed.setAttribute('first', 123);
  observed.setAttribute('second', 456);
  assert(args, null, 'MutationObserver is asynchronous');
  assert(
    checkRecord(
      {target: observed, type: "attributes", attributeName: "first"},
      observer.records[0]
    ),
    true,
    'MutationObserver attributes'
  );
  await milliseconds(10);

  args = null;
  observer.disconnect();
  observed.setAttribute('first', 456);
  assert(JSON.stringify(observer.takeRecords()), '[]', 'MutationObserver disconnected');
  // observe them all
  observer.observe(observed, {
    attributeOldValue: true
  });
  observed.setAttribute('first', 789);
  observed.setAttribute('second', 1);
  await milliseconds(10);

  assert(
    checkRecord(
      {target: observed, type: "attributes", attributeName: "first", oldValue: "456"},
      args[0]
    ) &&
    checkRecord(
      {target: observed, type: "attributes", attributeName: "second", oldValue: "456"},
      args[1]
    ),
    true,
    'MutationObserver attributes'
  );
  args = null;
  notObserved.setAttribute('first', 'nope');
  await milliseconds(10);

  assert(args, null, 'MutationObserver not observing did not trigger generic node');
  observer.disconnect();
  observed.appendChild(notObserved);
  observer.observe(observed, {
    childList: true,
    attributeFilter: ['first']
  });
  notObserved.setAttribute('first', 'yup');
  await milliseconds(10);

  assert(
    checkRecord(
      {target: notObserved, type: "attributes", attributeName: "first"},
      args[0]
    ),
    true,
    'MutationObserver attributes'
  );
  observer.disconnect();
  observed.appendChild(notObserved);
  observer.observe(observed, {
    childList: true,
    subtree: true,
    attributeFilter: ['first']
  });
  notObserved.setAttribute('first', 'again');
  await milliseconds(10);

  assert(
    checkRecord(
      {target: notObserved, type: "attributes", attributeName: "first"},
      args[0]
    ),
    true,
    'MutationObserver attributes'
  );
  args = null;
  observer.disconnect();
  observed.appendChild(notObserved);
  observer.observe(observed, {
    childList: true
  });
  observed.removeChild(notObserved);
  observed.appendChild(observed.ownerDocument.createTextNode('!'));
  await milliseconds(10);

  assert(
    checkRecord(
      {target: observed, type: "childList", removedNodes: [notObserved]},
      args[0]
    ),
    true,
    'MutationObserver removedNodes'
  );
  args = null;
  observer.disconnect();
  observer.observe(observed, {
    childList: true,
    characterData: true
  });
  observed.appendChild(observed.ownerDocument.createTextNode('!'));
  await milliseconds(10);

  assert(
    checkRecord(
      {target: observed, type: "childList", addedNodes: [observed.lastChild]},
      args[0]
    ),
    true,
    'MutationObserver addedNodes characterData'
  );
  observed.appendChild(notObserved);
  await milliseconds(10);

  assert(
    checkRecord(
      {target: observed, type: "childList", addedNodes: [notObserved]},
      args[0]
    ),
    true,
    'MutationObserver addedNodes'
  );
  observed.removeChild(notObserved);
  observer.disconnect();
  args = null;
  observer.observe(observed.ownerDocument, {
    childList: true,
    subtree: true
  });
  /* TODO: do I even care?
  try {
    observed.appendChild(observed);
    assert(true, false, 'node appended to itself');
  }
  catch (ok) {}
  */
  observed.getRootNode().appendChild(notObserved);
  await milliseconds(10);

  assert(
    checkRecord(
      {target: observed.ownerDocument, type: "childList", addedNodes: [notObserved]},
      args[0]
    ),
    true,
    'MutationObserver addedNodes'
  );
  args = null;
  notObserved.remove();
  await milliseconds(10);

  assert(
    checkRecord(
      {target: observed.ownerDocument, type: "childList", removedNodes: [notObserved]},
      args[0]
    ),
    true,
    'MutationObserver removedNodes again'
  );
  observer.disconnect();
  args = null;
  observer.observe(observed.getRootNode(), {
    childList: true,
    subtree: true
  });
  observed.getRootNode().appendChild(notObserved);
  await milliseconds(10);

  assert(
    checkRecord(
      {target: observed.getRootNode(), type: "childList", addedNodes: [notObserved]},
      args[0]
    ),
    true,
    'MutationObserver addedNodes on html'
  );
})();
