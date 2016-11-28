export class ClassHelper {

    constructor(element) {
        this.element = element;
    }

    item(ix) {
        return this.element.className.trim().split(/\s+/)[ix];
    }
    contains(name) {
        var classes = this.element.className.trim().split(/\s+/);
        return classes.indexOf(name) !== -1;
    }
    add(name) {
        var classes = this.element.className.trim().split(/\s+/);
        if (classes.indexOf(name) === -1) {
            classes.push(name);
            this.element.className = classes.join(' ');
        }
    }
    swap(currClass, newClass){
        let obj = new ClassHelper(this.element);
        if (obj.contains(currClass)){
            obj.remove(currClass);
        }
        obj.add(newClass);
        obj = null;
    }
    remove(name) {
        var classes = this.element.className.trim().split(/\s+/);
        var ix = classes.indexOf(name);
        if (ix !== -1) {
            classes.splice(ix, 1);
            this.element.className = classes.join(' ');
        }
    }
    toggle(name) {
        var classes = this.element.className.trim().split(/\s+/);
        var ix = classes.indexOf(name);
        if (ix !== -1)
            classes.splice(ix, 1);
        else
            classes.push(name);
        this.element.className = classes.join(' ');
    }
}


export class WindowData {
    constructor() {
        this.windowDimensions = {
            Width: window.innerWidth,
            Height: window.innerHeight
        };
    }

    ScrollValue = () => window.scrollY;

    GetScrollDynamicValue() {
        let scrollVal = 0;
        window.onscroll = (ev) => {
            scrollVal = window.scrollY;
        }
        return scrollVal;
    }

    GetWindowsDim() {
        let _self = this;
        window.onresize = (ev) => {
            _self.windowDimensions.Width = window.innerWidth;
            _self.windowDimensions.Height = window.innerHeight;
        }

        return _self.windowDimensions;
    }

    LogCurrentDim() {
        console.log(this.GetWindowsDim());
    }
}


module.exports = {
    windowData: WindowData,
    classHelper: ClassHelper
}