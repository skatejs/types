# Binding types for SkateJS

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
  type: skateTypeAttribute
});
```

Attributes are a great way to mix in functionality but lack the explicitness of tag names, or the `is` attribute. Use attribute names when:

- You have functionality that you want to declaratively mix-in to your element.
- Your component won't conflict with other components on the same element.
- Your component does *not* template the element.
- You are converting legacy components to Skate components and for whatever reason you can't change the markup.


## `classname`

A binding for using class names to identify a component.

```html
<div class="class-name"></div>
```

```js
skate('class-name', {
  type: skateTypeClass
});
```

Class names are the least preferred method of binding behaviour to an element because generally, classes are for styling, not behaviour. There are however some cases where this can be helpful. You should try to *only* use class names when:

- You are converting legacy components to Skate components and for whatever reason you can't change the markup.
