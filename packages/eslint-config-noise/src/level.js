'use strict';

const legacyLevelMap = {
  0: 'off',
  1: 'warn',
  2: 'error',
};

const validLevels = Object.values(legacyLevelMap);

function getRuleLevel(ruleConfig) {
  const ruleConfigLevel = Array.isArray(ruleConfig)
    ? ruleConfig[0]
    : ruleConfig;
  const level = legacyLevelMap[ruleConfigLevel] ?? ruleConfigLevel;
  if (!validLevels.includes(level)) {
    throw new TypeError(
      `Expected rule level to be one of: ${validLevels.join(
        ', ',
      )}. Instead received: "${level}"`,
    );
  }
  return level;
}

module.exports = { getRuleLevel };
