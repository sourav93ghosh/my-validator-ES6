import ValidatorFactory from "./src/factory";
import Style from "./src/style";
import DOMElement from "./src/dom-element";

console.log("test");

// TODO: MAKE FUNCTIONS PRIVATE USING WEAKMAP
class MyValidator {
    constructor() { }

    _shouldValidateField(field, name) {
        return Boolean(field.getAttribute(`data-${name}`));
    }
    
    _getErrorMessage(field, name) {
        return field.getAttribute(`data-${name}-error-message`);
    }

    validateForm(form) {
        let isValid = true;
        const validators = ValidatorEnum.VALIDATORS;
        for (const field of form) {
            const validatorFactory = new ValidatorFactory(field);
            for (const name in validators) {
                const validator = validatorFactory.createValidator(validators[name]);
                const errHtmlId = field.getAttribute('data-error-html-id');
                const errEl = document.getElementById(errHtmlId);
                if (errEl && this._shouldValidateField(field, name)) {
                    const errDomEle = new DOMElement(errEl);
                    const fieldDomEl = new DOMElement(field);
                    if (validator && !validator.validate()) {
                        const errMessage = this._getErrorMessage(field, name);
                        // TODO: use prototype pattern // DONE
                        errDomEle.setInnerText(errMessage ? errMessage : validator.message);
                        errDomEle.setStyle(Style.errClass);
                        fieldDomEl.setStyle(Style.errFieldClass);

                        isValid = false;
                        break;
                    } else {
                        // TODO: use prototype pattern // DONE
                        errDomEle.setInnerText('');
						errDomEle.setStyle({});
						fieldDomEl.setStyle({});
                    }
                }
            }
        }
        return isValid;
    }
}

export default MyValidator;
