/**
 * @fileoverview eslint for consorciei frontend projects
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
  plugins: ["@typescript-eslint", "import", "sonarjs", "react"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  env: {
    node: true,
  },
  rules: {
    curly: "error",
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
    ], // plugin:import/recommended
    "react/react-in-jsx-scope": "off", // plugin:react/recommended
    "react-hooks/exhaustive-deps": "off", // plugin:react-hooks/recommended
  },
};
