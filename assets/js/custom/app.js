import { scrollTo as ScrollTo } from "./modules/ScrollCtrl";
import { menuCtrl as MenuCtrl } from "./modules/MenuCtrl";


//react
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Link } from "react-router";
 
import { main as Main } from "./pages/Main"; 
import { general as General } from "./pages/General";
import { modules as Modules } from "./pages/Modules";
import { forms as Forms } from "./pages/Forms";
import { mainContainer as MainContainer } from "./pages/MainContainer";
import { todoListContainer as TodoListContainer } from "./modules/TodoList";

//site routes
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
 
//attach scroll func to top button
new ScrollTo("js-scrollTop", 0);

//apply responsive bootstrap menu
new MenuCtrl("toggleBtn", "toggleNav", "toggleHeader", "toggleMain", true);