// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  globals: {
    globalThis: false, // means it is not writeable
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-props-no-spreading": [0],
    "react/require-default-props": [0],
    "react/prop-types": [0],
    "class-methods-use-this": ["off"],
    "consistent-return": ["off"],
    "one-var": ["error", { var: "never", let: "consecutive", const: "consecutive" }],
    radix: ["error", "as-needed"],
    "no-bitwise": ["off"],
    "no-plusplus": ["off"],
    "no-shadow": ["off"],
    "no-debugger": ["warn"],
    "no-unused-expressions": ["off"],
    "no-nested-ternary": ["off"],
    "no-console": ["off"],
    "no-use-before-define": ["off"],
    "@typescript-eslint/no-use-before-define": ["off"],
    "no-unused-vars": ["off"],
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/prefer-default-export": ["off"],
    "no-return-assign": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"],
  },
}

module.exports = config
