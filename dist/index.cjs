'use strict';

var chunkC67D3FVF_cjs = require('./chunk-C67D3FVF.cjs');
require('./chunk-G6QEC2IS.cjs');
require('./chunk-JEQ2X3Z6.cjs');

// src/localStorageForStorybook.ts
var localStorageForStorybook = (params) => {
  const results = {};
  Object.entries(params).forEach(([key, value]) => {
    results[key] = JSON.stringify(value);
  });
  return results;
};

Object.defineProperty(exports, "withLocalStorage", {
  enumerable: true,
  get: function () { return chunkC67D3FVF_cjs.withLocalStorage; }
});
exports.localStorageForStorybook = localStorageForStorybook;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map