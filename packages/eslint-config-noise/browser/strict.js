'use strict';

module.exports = {
  env: { browser: true },
  extends: [...['./rules/plugin-unicorn'].map(require.resolve)],
};
