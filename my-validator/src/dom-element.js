
/**
 * @description Manupulate DOM Element
 */
class DOMElement {
    constructor(element) {
        this.element = element;
    }
}

DOMElement.prototype.setInnerText = function (text) {
    if (this.element && typeof text === 'string') {
        this.element.innerText = text;
    }
}

DOMElement.prototype.setStyle = function (styleObj) {
    if (this.element && styleObj.constructor === Object) {
        this.element.style = styleObj;
    }
}

DOMElement.prototype.setClassName = function (className) {
    if (this.element && typeof className === 'string') {
        this.element.className = className;
    }
}

export default DOMElement;