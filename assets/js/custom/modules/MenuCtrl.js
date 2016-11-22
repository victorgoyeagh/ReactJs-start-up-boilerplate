import { classHelper as ClassHelper } from "./helperFunctions";
import { windowData as WindowData } from "./helperFunctions";

export class MenuCtrl {
    constructor(btnId, navId, headerId, mainId) { // pass in id or object
        this.toggleBtn = document.getElementById(btnId);
        this.navigation = document.getElementById(navId);
        this.header = document.getElementById(headerId);
        this.main = document.getElementById(mainId) || null;
        let _self = this;

        _self.toggleBtn.addEventListener("click", function(ev) {
            _self.ToggleNavigation(this, _self.navigation, _self.header, _self.main);
        });

        window.onload = (ev) => {
            _self.navigation.style.height = window.innerHeight + "px";
        }

        window.onresize = (ev) => {
            _self.navigation.style.height = window.innerHeight + "px";
        }
    }

    ToggleNavigation(btn, nav, header, main) {
        let navLeft = nav.style.left;
        let ms = main.style;
        let chHeader = new ClassHelper(header);
        let chMain = new ClassHelper(main);
        let wd = new WindowData();

        if ((!navLeft) || (navLeft == "100%")) {
            nav.style.left = "20%";
            header.style.left = "-80%";
            ms.left = "-80%";
            ms.position = "absolute";
            chHeader.add("open");
            chMain.add("open");
        } else {
            nav.style.left = "100%";
            header.style.left = "0%";
            ms.left = "0%";
            ms.position = "relative";
            chHeader.remove("open");
            chMain.remove("open"); 
        }

        return false;
    }
}

module.exports = {
    menuCtrl: MenuCtrl
}