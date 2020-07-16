## eslint-plugin-link-slash-end

业务需要，所有页面链接必须以 / 结尾进行跳转，但开发人员较多，有时会有的同学忘掉这个规则，导致线上报错，因此做了这个 `eslint-plugin-link-slash-end` 校验规则

## 使用方法

```shell
yarn add -D eslint-plugin-link-slash-end
```

在 `.eslint` 文件中添加

```json
{
  "plugins": [
    "link-slash-end"
  ]
}
```

```json
{
  "rules": {
    "link-slash-end/link-slash-end": 2
  }
}
```


## 规则说明

此规则主要做如下几个校验

1. 校验所有 `a` 标签的 `href` 属性是否以 `/` 结尾

```html
<!-- 正确 -->
<a href="/admin/login/"></a>

<!-- 报错 -->
<a href="/admin/login"></a>
```

2. 校验所有 `window.open()` 的参数是否以 `/` 结尾

```js
window.open('/admin/login/') // 正确
window.open('/admin/login') // 报错
```

### Usage

Add `link-slash-end` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "link-slash-end"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "link-slash-end/rule-name": 2
    }
}
```

### Supported Rules

* Fill in provided rules here


