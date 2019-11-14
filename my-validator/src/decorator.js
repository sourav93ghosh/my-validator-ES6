/**
 * @description Various type of Decorators
 */
function readOnly(target, name, descriptor) {
    Object.freeze(descriptor.value);
}
