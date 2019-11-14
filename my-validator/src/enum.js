
/**
 * @description Validator Enum
 */
class ValidatorEnum {
    static get VALIDATORS() {
        return {
            REQUIRED: "required",
            NUMERIC: "numeric",
            NONDECIMAL: "nondecimal",
            MINLENGTH: "minlength",
            MAXLENGTH: "maxlength"
        }
    }
}