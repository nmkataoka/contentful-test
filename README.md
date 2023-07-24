This project was bootstrapped with [Create Contentful App](https://github.com/contentful/create-contentful-app) to demo a build issue I'm running into.

## How to replicate

```sh
# If not using nvm, I'm using node 18
nvm use
npm run build
```

Getting a cjs error here, but I've tried an esm build and run into a different build error there.

```
- info Collecting page data ...Error [ERR_REQUIRE_ESM]: require() of ES Module /contentful-test/node_modules/lodash-es/lodash.js from /contentful-test/node_modules/@contentful/field-editor-shared/dist/cjs/FieldConnector.js not supported.
Instead change the require of lodash.js in /contentful-test/node_modules/@contentful/field-editor-shared/dist/cjs/FieldConnector.js to a dynamic import() which is available in all CommonJS modules.

...
```