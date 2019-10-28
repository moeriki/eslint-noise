module.exports = {
  extends: ['noise-node'],
  overrides: [
    {
      files: ['*.test.js'],
      env: { jest: true },
    },
  ],
  root: true,
};
