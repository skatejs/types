# [DEPRECATED] Binding types for SkateJS

***PLEASE NOTE: Custom types have been deprecated and will not work in Skate 1.x+. They will continue to work in 0.x releases.***

This repository contains binding types for [SkateJS](https://github.com/skatejs/skatejs) components. Included types are:

- [`attribute`](#attribute)
- [`classname`](#classname)

## `attribute`

A binding for using attribute names to identify a component.

```html
<div attribute-name></div>
```

```js
skate('attribute-name', {
  type: skateTypes.attribute
});
```

Attributes are a great way to mix in functionality but lack the explicitness of tag names so only use them when you can't use tag names.


## `classname`

A binding for using class names to identify a component.

```html
<div class="class-name"></div>
```

```js
skate('class-name', {
  type: skateTypes.classname
});
```

Class names are the least preferred method of binding behaviour to an element because classes are for styling, not behaviour. However, if you can't use tags or attributes for whatever reason, then this binding will allow you to use a class name.
