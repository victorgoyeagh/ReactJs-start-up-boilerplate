import { scrollTo as ScrollTo } from "./modules/ScrollCtrl";
import { menuCtrl as MenuCtrl } from "./modules/MenuCtrl";
import TodoList from "./modules/React";
import React from "react";
import ReactDOM from "react-dom";

new ScrollTo("js-scrollTop", 0);
new MenuCtrl("toggleBtn", "toggleNav", "toggleHeader", "toggleMain", true);


let items = [
    {
        id: 1,
        "name": "Victor Goyea",
        "occupation": "Web Development",
        "Hobbies": ["Football", "Web Development", "sleeping"],
        IsOutdoor: false
    },    
    {
        id: 2,
        "name": "Fred Flingstone",
        "occupation": "Cartoon character",
        "Hobbies": ["Driving", "Cuddling Wilma", "Drinking with Barney"],
        IsOutdoor: true
    }
]

ReactDOM.render(<TodoList todoItems={items} />, document.getElementById("todo"));