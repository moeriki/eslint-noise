const { isPlainObject, mergeWith } = require('lodash/fp');

/* eslint-disable-next-line consistent-return */
const mergeObject = mergeWith((sourceValue, objectValue, key, object) => {
  if (objectValue === undefined) {
    /* eslint-disable no-param-reassign */
    // Allow unsetting properties with undefined
    object[key] = undefined;
    return undefined;
  }
  if (Array.isArray(sourceValue) && Array.isArray(objectValue)) {
    // If both array, can be merged
    return [...sourceValue, ...objectValue];
  }
  if (!isPlainObject(sourceValue) || !isPlainObject(objectValue)) {
    // If neither object, override value
    return objectValue;
  }
});

function merge(ruleArgument, extension) {
  if (
    ruleArgument == null ||
    extension == null ||
    typeof ruleArgument !== 'object'
  ) {
    return extension;
  }
  return mergeObject(ruleArgument, extension);
}

function extendRule([ruleLevel, ...ruleArguments], ...extensions) {
  const length = Math.max(ruleArguments.length, extensions.length);
  return [
    ruleLevel,
    ...Array.from({ length }, (_, index) => {
      const ruleArgument = ruleArguments[index];
      const extension = extensions[index];
      return merge(ruleArgument, extension);
    }),
  ];
}

function extendRules(baseRules, extensionRules) {
  return Object.keys(extensionRules).reduce((accumulator, key) => {
    if (!(key in baseRules)) {
      throw new Error(`Rule "${key}" not found on base rules`);
    }
    accumulator[key] = extendRule(baseRules[key], extensionRules[key]);
    return accumulator;
  }, baseRules);
}

module.exports = {
  extendRule,
  extendRules,
};
