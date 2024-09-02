'use strict';

var chunkG6QEC2IS_cjs = require('./chunk-G6QEC2IS.cjs');
require('./chunk-JEQ2X3Z6.cjs');
var React = require('react');
var components = require('@storybook/components');
var coreEvents = require('@storybook/core-events');
var managerApi = require('@storybook/manager-api');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

var toString = (value = {}) => {
  const results = {};
  Object.entries(value).forEach(([key, value2]) => {
    try {
      results[key] = JSON.parse(value2);
    } catch {
      results[key] = value2;
    }
  });
  return JSON.stringify(results, null, 2);
};
var PanelContent = ({ initialValues, currentValues }) => /* @__PURE__ */ React__default.default.createElement(components.TabsState, { initial: "initialValues" }, /* @__PURE__ */ React__default.default.createElement("div", { id: "initialValues", title: "Initial Values" }, /* @__PURE__ */ React__default.default.createElement("pre", null, toString(initialValues))), /* @__PURE__ */ React__default.default.createElement("div", { id: "currentValues", title: "Current Values" }, /* @__PURE__ */ React__default.default.createElement("pre", null, toString(currentValues))));
var Panel = ({ active }) => {
  const [currentValues, setCurrentValues] = React.useState();
  const [initialValues, setInitialValues] = React.useState();
  const note = initialValues && initialValues[chunkG6QEC2IS_cjs.NOTE];
  managerApi.useChannel({
    [chunkG6QEC2IS_cjs.EVENTS.SET_INITIAL_VALUES]: (values) => {
      setInitialValues(values);
      setCurrentValues(values);
    },
    [chunkG6QEC2IS_cjs.EVENTS.SET_CURRENT_VALUES]: (values) => {
      setCurrentValues(values);
    }
  });
  if (!active) return null;
  return /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, note && /* @__PURE__ */ React__default.default.createElement("code", { style: { padding: "1em" } }, note), !note && /* @__PURE__ */ React__default.default.createElement(PanelContent, { currentValues, initialValues }));
};

// src/manager.tsx
function Title() {
  const [{ count }, setCount] = managerApi.useAddonState(chunkG6QEC2IS_cjs.ADDON_ID, { count: 0 });
  managerApi.useChannel({
    [chunkG6QEC2IS_cjs.EVENTS.SET_CURRENT_VALUES]: () => setCount((c) => ({ ...c, count: c.count + 1 })),
    [chunkG6QEC2IS_cjs.EVENTS.SET_INITIAL_VALUES]: () => setCount((c) => ({ ...c, count: 0 })),
    [coreEvents.STORY_CHANGED]: () => setCount((c) => ({ ...c, count: 0 }))
  });
  const suffix = count === 0 ? "" : /* @__PURE__ */ React__default.default.createElement(components.Badge, { status: "neutral" }, count);
  return /* @__PURE__ */ React__default.default.createElement("div", null, /* @__PURE__ */ React__default.default.createElement(components.Spaced, { col: 1 }, /* @__PURE__ */ React__default.default.createElement("span", { style: { display: "inline-block", verticalAlign: "middle" } }, "localStorage"), suffix));
}
managerApi.addons.register(chunkG6QEC2IS_cjs.ADDON_ID, () => {
  managerApi.addons.add(chunkG6QEC2IS_cjs.PANEL_ID, {
    type: managerApi.types.PANEL,
    title: Title,
    render: ({ active }) => /* @__PURE__ */ React__default.default.createElement(Panel, { active })
  });
});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.cjs.map