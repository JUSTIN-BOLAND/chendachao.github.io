const ghpages = require('gh-pages');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

console.log(123, GITHUB_TOKEN);

const repo = GITHUB_TOKEN ? 'https://github.com/chendachao/chendachao.github.io.git' : `https://${GITHUB_TOKEN}@github.com/chendachao/chendachao.github.io.git`;

ghpages.publish('dist', {
  branch: 'master',
  repo: repo,
  user: {
    name: 'chendachao',
    email: 'chendachao@outlook.com'
  }
}, function(err) {
  if (err) {
    console.error(err);
  }
  console.log('publish done');
});
