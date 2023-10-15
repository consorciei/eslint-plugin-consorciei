/**
 * @fileoverview eslint for consorciei
 * @author Consorciei
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  globals: {
    consorciei: true,
  },
  plugins: ["@typescript-eslint", "import", "sonarjs"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:sonarjs/recommended",
  ],
  env: {
    node: true,
  },
  rules: {
    curly: "error",
    "import/no-unresolved": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
