
class ElementBuilder {
    element;
    constructor(element) {
        this.element = element;
    }
    setInnerText(text) {
        this._element.innerText = text;
        return this;
    }
    setClassName(className) {
        this._element.className = className;
        return this;
    }
    setStyle(style) {
        this._element.style = style;
        return this;
    }
    build() {
        return this;
    }
}