import { scrollTo as ScrollTo } from "./modules/ScrollCtrl";
import { menuCtrl as MenuCtrl } from "./modules/MenuCtrl";
import { todoListContainer as TodoListContainer } from "./modules/React";

//scroll to top button
new ScrollTo("js-scrollTop", 0);

//responsive bootstrap menu
new MenuCtrl("toggleBtn", "toggleNav", "toggleHeader", "toggleMain", true);


//data
let items = [
    {
        "id": 1,
        "name": "Victor Goyea",
        "occupation": "Web Development",
        "isOutdoor": false
    },    
    {
        "id": 2,
        "name": "Fred Flingstone",
        "occupation": "Cartoon character",
        "isOutdoor": true
    }
]

//React stuff
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Link } from "react-router";

import {layout as Layout} from "./pages/layout"; 
import {main as Main} from "./pages/main";
import {about as About} from "./pages/about";
import {contact as Contact} from "./pages/contact";
import {services as Services} from "./pages/services";

ReactDOM.render (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main} />
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
            <Route path="services" component={Services} />
        </Route>
    </Router>, 
    document.getElementById("todo")
);
    