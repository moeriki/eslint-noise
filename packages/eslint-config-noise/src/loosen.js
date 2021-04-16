'use strict';

const { getRuleLevel } = require('./level');

module.exports = function loosen(eslintConfig) {
  const strictConfig = { ...eslintConfig };
  strictConfig.rules = strictConfig.rules || {};
  if (Array.isArray(strictConfig.extends)) {
    for (const extendsPath of strictConfig.extends) {
      if (extendsPath[0] === '/') {
        const { rules } = require(extendsPath);
        for (const [id, ruleConfig] of Object.entries(rules)) {
          if (getRuleLevel(ruleConfig) === 'warn') {
            strictConfig.rules[id] = 'off';
          }
        }
      }
    }
  }
  return strictConfig;
};
