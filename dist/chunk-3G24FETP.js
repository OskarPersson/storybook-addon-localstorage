import { EVENTS, NOTE } from './chunk-NMA3INLE.js';
import React, { useState, useEffect } from 'react';
import { makeDecorator, addons } from '@storybook/preview-api';

var StorybookAddonLocalStorage = ({ parameters, children }) => {
  const channel = addons.getChannel();
  const [ready, setReady] = useState(false);
  const userNote = (note) => {
    channel.emit(EVENTS.SET_INITIAL_VALUES, { [NOTE]: note });
    return children;
  };
  if (!parameters) return userNote("parameters.localStorage not defined");
  useEffect(() => {
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
        channel.emit(EVENTS.SET_CURRENT_VALUES, actualValues);
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
  channel.emit(EVENTS.SET_INITIAL_VALUES, { ...parameters });
  return ready ? children : null;
};
var withLocalStorage = makeDecorator({
  name: "withLocalStorage",
  parameterName: "localStorage",
  wrapper: (getStory, context, { parameters }) => /* @__PURE__ */ React.createElement(StorybookAddonLocalStorage, { parameters }, getStory(context))
});

export { withLocalStorage };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-3G24FETP.js.map