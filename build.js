const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const args = process.argv.slice(2);
if (args.length != 1) {
  console.error('invalid usage: build.js FILE');
  return 0;
}

const fileName = args[0];

var showdown = require('showdown'),
  converter = new showdown.Converter();
converter.setFlavor('github');
var fs = require('fs');

const html_content = converter.makeHtml(fs.readFileSync(fileName, 'utf8'));

JSDOM.fromFile('template.html').then((dom) => {
  dom.window.document.querySelector('main').innerHTML = html_content;
  fs.writeFileSync('index.html', dom.serialize());
});
