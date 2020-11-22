module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
    'space-before-function-paren': 'off',

    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],

    'nuxt/no-cjs-in-config': 'off',
  },
  settings: {
    extensions: ['.js', '.vue', '.ts'],
  },
}
