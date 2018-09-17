# yiddish-cornstarch
SE390 Mini-Project, code quality tutorial tool

## Deployment

Run

  $ npm run deploy

which will do the following:
* build the project
* create a branch called `gh-pages` at the remote `origin` with the built
  project
* configure the repo pointed to by `origin` to point github pages to the
  `gh-pages` branch

For example: if user `iburinoc` has a remote `origin` pointing to his fork
`https://github.com/iburinoc/yiddish-cornstarch`, then his deployment create
the branch `gh-pages` at his fork and configure the page
`https://iburinoc.github.io/yiddish-cornstarch/`.
