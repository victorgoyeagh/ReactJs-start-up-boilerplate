import { windowData as WindowData } from "./HelperFunctions"; 

export class ScrollTo {

    constructor(elButton, scrollToVal) {
        let scrollToValue = scrollToVal;
        this.scrollButton = document.getElementById(elButton);

        let _self = this;
        this.scrollButton.addEventListener("click", function(ev) {
            _self.ScrollToYPoint(scrollToValue, ev);
        });

        _self.handleButtonVisibility();
        window.addEventListener("scroll", function() {
            _self.handleButtonVisibility();
        });
    }

    handleButtonVisibility() {
        let _self = this;
        if (this.scrollY < 300) {
            _self.scrollButton.style.visibility = "hidden";
        } else {
            _self.scrollButton.style.visibility = "visible";
        }
    }

    ScrollToYPoint(scrollVal, ev) {
        let _self = this,
            scrollPermit = 50,
            scrollSpeed = 10,
            tmpScrollVal = new WindowData().ScrollValue();

        if (!(isNaN(scrollVal)) && (ev != null)) {

            let scrollInt = setInterval(function(ev) {
                tmpScrollVal -= scrollPermit;
                if (tmpScrollVal > scrollVal) {
                    window.scrollTo(null, tmpScrollVal);
                } else {
                    window.scrollTo(null, 0);
                    clearInterval(scrollInt);
                }
            }, scrollSpeed);
        }
    }
}

module.exports = {
    scrollTo: ScrollTo
}