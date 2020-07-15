
module.exports = {
  meta: {
    docs: {
      description: "页面链接必须以 / 结尾",
    },
    fixable: null  // 修复函数
  },
  create: function(context) { // rule 核心
    return {
      JSXElement (node) {
        const { openingElement } = node
        if (openingElement.name.name === 'a') {
          const { attributes } = openingElement
          if (attributes.length) {
            const href = attributes.find(item => item.name.name === 'href').value.value
            if (href[href.length - 1] !== '/') {
              context.report({
                node,
                message: "链接必须以 '/' 结尾"
              })
            }
          }
        }
      }
    }
  }
}
