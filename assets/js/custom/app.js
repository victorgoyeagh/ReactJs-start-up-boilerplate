import { scrollTo as ScrollTo } from "./modules/ScrollCtrl";
import { menuCtrl as MenuCtrl } from "./modules/MenuCtrl";

new ScrollTo("js-scrollTop", 0);
new MenuCtrl("toggleBtn", "toggleNav", "toggleHeader", "toggleMain");

import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
  render() {
    return <h1>World</h1>
  }
}

ReactDOM.render(<World/>, document.getElementById('js-app'));