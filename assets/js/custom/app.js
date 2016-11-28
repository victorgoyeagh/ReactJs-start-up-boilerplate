import { scrollTo as ScrollTo } from "./modules/ScrollCtrl";
import { menuCtrl as MenuCtrl } from "./modules/MenuCtrl";
import { banner as Banner } from "./modules/React";
import React from "react";
import ReactDOM from "react-dom";

new ScrollTo("js-scrollTop", 0);
new MenuCtrl("toggleBtn", "toggleNav", "toggleHeader", "toggleMain", true);


ReactDOM.render(<Banner />, document.getElementById("js-rat-race"));