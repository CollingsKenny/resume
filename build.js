const jsdom = require('jsdom');
const { JSDOM } = jsdom;

var showdown = require('showdown'),
  converter = new showdown.Converter();
converter.setFlavor('github');
var fs = require('fs');

const html_content = converter.makeHtml(fs.readFileSync('resume.md', 'utf8'));

JSDOM.fromFile('template.html').then((dom) => {
  dom.window.document.querySelector('body').innerHTML = html_content;
  fs.writeFileSync('index.html', dom.serialize());
});
