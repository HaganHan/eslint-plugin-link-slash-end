/**
 * @fileoverview 页面路由必须以 '/' 结尾
 * @author Hagan
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/link-slash-end"),
  RuleTester = require("eslint").RuleTester


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: {
    "ecmaVersion": 7,
    "ecmaFeatures": {
      "jsx": true,
    }
  }
})
ruleTester.run("link-slash-end", rule, {

  valid: [
    {
      code: `
        const Link = (<a href="/admin/login/">a标签</a>)
      `
    }
  ],

  invalid: [
    {
      code: `
        const Link = (<a href="/admin/login">a标签</a>)
      `,
      errors: [
        {
          message: "页面路由必须以 '/' 结尾",
          type: "JSXElement"
        }
      ]
    }
  ]
})
