
const nunjucks = require('nunjucks');
const marked = require('marked');
const data = require('./data/data.json');


// Convierte el contenido Markdown en HTML y lo agrega al objeto `data`
Object.keys(data).forEach((key) => {
  if (key.endsWith('_markdown')) {
    const htmlKey = key.replace('_markdown', '_html');
    const markdownContent = data[key];
    const htmlContent = marked(markdownContent);
    data[htmlKey] = htmlContent;
  }
});


module.exports = {
  root: './src',
  data: {
    ...data,
  },
  nunjucksEnv: env,
};