/**
 * @fileoverview eslint for consorciei
 * @author Consorciei
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rules = requireIndex(__dirname + "/rules");

// import all rules in lib/rules
module.exports = {
  rules,
};


