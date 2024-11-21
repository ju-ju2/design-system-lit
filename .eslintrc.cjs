/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: [".eslintrc.cjs", "dist"],
  extends: [
    "@hnine-dev/eslint-config/index.js",
    "plugin:lit/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["import", "no-unsanitized", "lit"],
  rules: {
    "import/prefer-default-export": "off",
    "import/extensions": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "no-unsanitized/method": "error",
    "no-unsanitized/property": "error",
    "class-methods-use-this": "off",
    "lit/no-template-bind": "error",
    "lit/no-duplicate-template-bindings": "error",
  },
  overrides: [
    {
      files: ["*.spec.js"],
      rules: {
        "no-unsanitized/method": "off",
        "no-unsanitized/property": "off",
      },
    },
  ],
};
