'use strict';

module.exports = {
  env: { browser: true },
  rules: {
    // Prefer `.addEventListener()` and `.removeEventListener()` over on-functions
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
    'unicorn/prefer-add-event-listener': 'error',

    // Prefer using `.dataset` on DOM elements over `.setAttribute(…)`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dataset.md
    'unicorn/prefer-dataset': 'error',

    // Prefer KeyboardEvent#key over KeyboardEvent#keyCode
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-event-key.md
    'unicorn/prefer-event-key': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-modern-dom-apis.md
    'unicorn/prefer-modern-dom-apis': 'error',

    // Prefer `Node#append()` over `Node#appendChild()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-append.md
    'unicorn/prefer-node-append': 'error',

    // Prefer `node.remove()` over `parentNode.removeChild(node)` and `parentElement.removeChild(node)`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-remove.md
    'unicorn/prefer-node-remove': 'error',

    // Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
    'unicorn/prefer-query-selector': 'error',

    // Prefer `.textContent` over `.innerText`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-text-content.md
    'unicorn/prefer-text-content': 'error',
  },
};
