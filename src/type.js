export const emptyObject = Object.freeze({})
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
const _toString = Object.prototype.toString;

export function toRawType(value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}

export function isRegExp(obj) {
  return _toString.call(obj) === '[object RegExp]'
}

/**
 * 是否能转换为Number
 * @param {string | number} obj 
 */
export function isNumber(obj) {
  if(obj === null || obj === undefined || typeof obj === "boolean") {
    return false;
  }
  return !Number.isNaN(Number(obj));
}