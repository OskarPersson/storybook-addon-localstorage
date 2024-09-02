import { ADDON_ID, PANEL_ID, NOTE, EVENTS } from './chunk-NMA3INLE.js';
import './chunk-DGUM43GV.js';
import React, { useState } from 'react';
import { Spaced, TabsState, Badge } from '@storybook/components';
import { STORY_CHANGED } from '@storybook/core-events';
import { addons, types, useChannel, useAddonState } from '@storybook/manager-api';

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
var PanelContent = ({ initialValues, currentValues }) => /* @__PURE__ */ React.createElement(TabsState, { initial: "initialValues" }, /* @__PURE__ */ React.createElement("div", { id: "initialValues", title: "Initial Values" }, /* @__PURE__ */ React.createElement("pre", null, toString(initialValues))), /* @__PURE__ */ React.createElement("div", { id: "currentValues", title: "Current Values" }, /* @__PURE__ */ React.createElement("pre", null, toString(currentValues))));
var Panel = ({ active }) => {
  const [currentValues, setCurrentValues] = useState();
  const [initialValues, setInitialValues] = useState();
  const note = initialValues && initialValues[NOTE];
  useChannel({
    [EVENTS.SET_INITIAL_VALUES]: (values) => {
      setInitialValues(values);
      setCurrentValues(values);
    },
    [EVENTS.SET_CURRENT_VALUES]: (values) => {
      setCurrentValues(values);
    }
  });
  if (!active) return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, note && /* @__PURE__ */ React.createElement("code", { style: { padding: "1em" } }, note), !note && /* @__PURE__ */ React.createElement(PanelContent, { currentValues, initialValues }));
};

// src/manager.tsx
function Title() {
  const [{ count }, setCount] = useAddonState(ADDON_ID, { count: 0 });
  useChannel({
    [EVENTS.SET_CURRENT_VALUES]: () => setCount((c) => ({ ...c, count: c.count + 1 })),
    [EVENTS.SET_INITIAL_VALUES]: () => setCount((c) => ({ ...c, count: 0 })),
    [STORY_CHANGED]: () => setCount((c) => ({ ...c, count: 0 }))
  });
  const suffix = count === 0 ? "" : /* @__PURE__ */ React.createElement(Badge, { status: "neutral" }, count);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Spaced, { col: 1 }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", verticalAlign: "middle" } }, "localStorage"), suffix));
}
addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: Title,
    render: ({ active }) => /* @__PURE__ */ React.createElement(Panel, { active })
  });
});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.js.map