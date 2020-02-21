module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/strongly-recommended'
  ],
  rules: {
    'space-before-function-paren': [
      0,
      'never'
    ],
    'no-console': 0,
    'vue/require-default-prop': 0,
    'vue/require-prop-types': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
}
