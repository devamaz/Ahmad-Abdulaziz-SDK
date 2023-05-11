module.exports = {
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns: ['loader.js', 'node_modules/', 'html-doc/', 'doc/'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'no-useless-escape': 0,
    'no-console': 1,
    'no-debugger': 1,
    'import/extensions': 'off',
  },
};
