module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    // "indent": [
    //   "error",
    //   2
    // ],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    'no-console': ['warn'],
    // "linebreak-style": [
    //   "error",
    //   "unix"
    // ],
    // "quotes": [
    //   "error",
    //   "single"
    // ],
    // "semi": [
    //   "error",
    //   "always"
    // ],
    // "no-console": "off",
    // "max-classes-per-file": ["error", 2],
  }
};