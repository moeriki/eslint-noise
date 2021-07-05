'use strict';

module.exports = {
  rules: {
    // Do not use `document.cookie` directly
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md
    'unicorn/no-document-cookie': 'error',

    // Prefer `.addEventListener()` and `.removeEventListener()` over on-functions
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
    'unicorn/prefer-add-event-listener': 'error',

    // Prefer `Node#append()` over `Node#appendChild()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-append.md
    'unicorn/prefer-dom-node-append': 'error',

    // Prefer using `.dataset` on DOM elements over `.setAttribute(…)`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-dataset.md
    'unicorn/prefer-dom-node-dataset': 'error',

    // Prefer `node.remove()` over `parentNode.removeChild(node)` and `parentElement.removeChild(node)`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-remove.md
    'unicorn/prefer-dom-node-remove': 'error',

    // Prefer `.textContent` over `.innerText`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-text-content.md
    'unicorn/prefer-dom-node-text-content': 'error',

    // Prefer KeyboardEvent#key over KeyboardEvent#keyCode
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-keyboard-event-key.md
    'unicorn/prefer-keyboard-event-key': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-modern-dom-apis.md
    'unicorn/prefer-modern-dom-apis': 'error',

    // Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
    'unicorn/prefer-query-selector': 'error',
  },
};
