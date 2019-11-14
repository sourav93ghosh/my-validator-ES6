/**
 * @description Different types of validator
 */

 // TODO: USE WEAKMAP TO MAKE VARIABLE PRIVATE
class RequiredValidator {
    constructor(value) {
        this._value = value;
        this.message = 'Required Field';
    }
    validate() {
        return Boolean(this._value) && typeof this._value === 'string';
    }
}

class NumericValidator {
    constructor(value) {
        this._value = value;
        this.message = 'Numeric Field';
    }
    validate() {
        if (this._value && typeof this._value === 'string') {
            return !isNaN(Number(this._value));
        }
    }
}

class NonDecimalValidator {
    constructor(value) {
        this._value = value;
        this.message = 'Non decimal Field';
    }
    validate() {
        if (this._value && typeof this._value === 'string') {
            return !isNaN(Number(this._value)) && this._value.indexOf('.') < 0;
        }
    }
}

class MinlengthValidator {
    constructor(value, minlength) {
        this._value = value;
        this._minlength = minlength;
        this.message = this._minlength && !isNaN(this._minlength) ? `Minimum length ${_minlength}` : '';
    }
    validate() {
        if (this._value && typeof this._value === 'string' &&
            this._minlength && !isNaN(this._minlength)) {
            return this._value.length < this._minlength;
        }
    }
}

class MaxlengthValidator {
    constructor(value, maxlength) {
        this._value = value;
        this._maxlength = maxlength;
        this.message = this._maxlength && !isNaN(this._maxlength) ? `Maximum length ${this._maxlength}` : '';
    }
    validate() {
        if (this._value && typeof this._value === 'string' &&
            this._maxlength && !isNaN(this._maxlength)) {
            return this._value.length < this._maxlength;
        }
    }
}

export {
    RequiredValidator,
    NumericValidator,
    NonDecimalValidator,
    MinlengthValidator,
    MaxlengthValidator
}
