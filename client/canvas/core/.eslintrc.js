module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  parserOptions:  {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-console": 0,
    "react/prop-types": 0,
    "curly": 2
  }
};