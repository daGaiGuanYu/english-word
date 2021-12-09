import React from "../../../_snowpack/pkg/react.js";
import Core from "./core/index.js";
export default function() {
  const list = ["I", "have", "a", "dream"];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Core, {
    target: list,
    onFinish: () => console.log("over")
  }));
}
