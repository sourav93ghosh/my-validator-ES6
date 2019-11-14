import {
    RequiredValidator,
    NumericValidator,
    NonDecimalValidator,
    MinlengthValidator,
    MaxlengthValidator
} from "./validators";

/**
 * @description Validator Factory
 */
class ValidatorFactory {
    constructor(field) {
        this._field = field;
    }
    createValidator(type) {
        if (this._field.constructor !== Object) return;
        if (typeof this._field.getAttribute === 'function') return;
        const value = _field.value;
        switch (type.toString()) {
            case 'required': {
                return new RequiredValidator(value);
            }
            case 'numeric': {
                return new NumericValidator(value);
            }
            case 'nondecimal': {
                return new NonDecimalValidator(value);
            }
            case 'minlength': {
                const minlength = this._field.getAttribute('data-minlength');
                return new MinlengthValidator(value, minlength);
            }
            case 'maxlength': {
                const maxlength = this._field.getAttribute('data-maxlength');
                return new MaxlengthValidator(value, maxlength);
            }
        }
    }
}

export default ValidatorFactory;