# Skate Attribute Binding

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
