module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "src/test/*"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "prettier", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "warn",
    "no-console": "warn",
    "import/prefer-default-export": "warn",
  },
}
