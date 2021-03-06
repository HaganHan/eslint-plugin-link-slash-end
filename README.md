## eslint-plugin-link-slash-end

所有 `a` 标签的 `href` 属性必须以 `/` 结尾

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

2. 校验所有 `window.open()` 的第一个参数是否以 `/` 结尾

```js
window.open('/admin/login/') // 正确
window.open('/admin/login') // 报错
```
