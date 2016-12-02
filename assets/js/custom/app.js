import { scrollTo as ScrollTo } from "./modules/ScrollCtrl";
import { menuCtrl as MenuCtrl } from "./modules/MenuCtrl";
import { todoListContainer as TodoListContainer } from "./modules/React";

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
 
import { main as Main } from "./pages/Main"; 
import { general as General } from "./pages/General";
import { modules as Modules } from "./pages/Modules";
import { forms as Forms } from "./pages/Forms";
import { mainContainer as MainContainer } from "./pages/MainContainer";


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={MainContainer}>
            <IndexRoute component={Main} />
            <Route path="general" component={General} />
            <Route path="modules" component={Modules} />
            <Route path="forms" component={Forms} />
        </Route>
    </Router>,
    document.getElementById("main")
);


/*
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main} />
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
            <Route path="services" component={Services} />
        </Route>
    </Router>,
    document.getElementById("todo")
);*/

//attach scroll to top button
new ScrollTo("js-scrollTop", 0);

//responsive bootstrap menu
new MenuCtrl("toggleBtn", "toggleNav", "toggleHeader", "toggleMain", true);