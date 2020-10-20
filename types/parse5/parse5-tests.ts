import { parse, parseFragment, serialize } from 'parse5';
// parse
const document = parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');

console.log(document.childNodes[1].tagName); //> 'html'


// parseFragment
const documentFragment = parseFragment('<table></table>');

console.log(documentFragment.childNodes[0].tagName); //> 'table'

// Parses the html fragment in the context of the parsed <table> element.
const trFragment = parseFragment(documentFragment.childNodes[0], '<tr><td>Shake it, baby</td></tr>');

console.log(trFragment.childNodes[0].childNodes[0].tagName); //> 'td'

const document = parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');

// serialize

const html = serialize(document);
const str = serialize(document.childNodes[1]);

console.log(str); //> '<head></head><body>Hi there!</body>'
