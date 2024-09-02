'use strict';

var chunkG6QEC2IS_cjs = require('./chunk-G6QEC2IS.cjs');
var React = require('react');
var previewApi = require('@storybook/preview-api');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

var StorybookAddonLocalStorage = ({ parameters, children }) => {
  const channel = previewApi.addons.getChannel();
  const [ready, setReady] = React.useState(false);
  const userNote = (note) => {
    channel.emit(chunkG6QEC2IS_cjs.EVENTS.SET_INITIAL_VALUES, { [chunkG6QEC2IS_cjs.NOTE]: note });
    return children;
  };
  if (!parameters) return userNote("parameters.localStorage not defined");
  React.useEffect(() => {
    window.localStorage.clear();
    Object.entries(parameters).forEach(([key, value]) => {
      window.localStorage.setItem(key, String(value));
    });
    let previousValuesAsJSON = "";
    const keys = Object.keys(parameters);
    const intervalId = setInterval(() => {
      const actualValues = {};
      for (const key of keys) {
        actualValues[key] = window.localStorage.getItem(key);
      }
      const actualValuesAsJSON = JSON.stringify(actualValues);
      if (previousValuesAsJSON !== actualValuesAsJSON) {
        previousValuesAsJSON = actualValuesAsJSON;
        channel.emit(chunkG6QEC2IS_cjs.EVENTS.SET_CURRENT_VALUES, actualValues);
      }
    }, 100);
    setReady(true);
    return () => {
      clearInterval(intervalId);
      Object.keys(parameters).forEach((key) => {
        window.localStorage.removeItem(key);
      });
    };
  }, [parameters]);
  channel.emit(chunkG6QEC2IS_cjs.EVENTS.SET_INITIAL_VALUES, { ...parameters });
  return ready ? children : null;
};
var withLocalStorage = previewApi.makeDecorator({
  name: "withLocalStorage",
  parameterName: "localStorage",
  wrapper: (getStory, context, { parameters }) => /* @__PURE__ */ React__default.default.createElement(StorybookAddonLocalStorage, { parameters }, getStory(context))
});

exports.withLocalStorage = withLocalStorage;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-C67D3FVF.cjs.map