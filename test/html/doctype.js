const assert = require('../assert.js').for('DocumentType');

const {parseHTML, parseJSON} = global[Symbol.for('linkedom')];

let window = parseHTML(`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd"><html></html>
`.trim()).window;

assert(window.document.firstChild.publicId, '-//W3C//DTD XHTML Basic 1.1//EN');
assert(window.document.firstChild.systemId, 'http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd');
assert(window.document.toString(), '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd"><html></html>');
assert(JSON.stringify(window.document), `[9,10,"html","-//W3C//DTD XHTML Basic 1.1//EN","http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd",1,"html",-2]`);
assert(parseJSON(JSON.stringify(window.document)).firstChild.toString(), '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">');

window = parseHTML(`
<!DOCTYPE math SYSTEM 
	"http://www.w3.org/Math/DTD/mathml1/mathml.dtd"><html></html>
`.trim()).window;

assert(window.document.firstChild.systemId, 'http://www.w3.org/Math/DTD/mathml1/mathml.dtd');
assert(window.document.toString(), '<!DOCTYPE math SYSTEM "http://www.w3.org/Math/DTD/mathml1/mathml.dtd"><html></html>');
assert(JSON.stringify(window.document), `[9,10,"math","http://www.w3.org/Math/DTD/mathml1/mathml.dtd",1,"html",-2]`);
assert(parseJSON(JSON.stringify(window.document)).firstChild.toString(), '<!DOCTYPE math SYSTEM "http://www.w3.org/Math/DTD/mathml1/mathml.dtd">');
assert(window.document.createDocumentType('svg', '-//W3C//DTD SVG 1.0//EN', 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd').toString(), '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">');
