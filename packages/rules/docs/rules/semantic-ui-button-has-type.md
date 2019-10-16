# Prevent usage of Semantic UI's `Button` elements without an explicit `type` attribute (react/button-has-type)

The default value of `type` attribute for `button` HTML element is `"submit"` which is often not the desired behavior and may lead to unexpected page reloads.
This rules enforces an explicit `type` attribute for all the `button` elements and checks that its value is valid per spec (i.e., is one of `"button"`, `"submit"`, and `"reset"`).

## Rule Details

The following patterns are considered errors:

```jsx
var Hello = <Button>Hello</Button>
var Hello = <Button type="foo">Hello</Button>

```

The following patterns are **not** considered errors:

```jsx
var Hello = <span>Hello</span>
var Hello = <span type="foo">Hello</span>
var Hello = <Button type="button">Hello</Button>
var Hello = <Button type="submit">Hello</Button>
var Hello = <Button type="reset">Hello</Button>
```

## Rule Options

```js
...
"@sharegate/apricot/semantic-ui-button-has-type": [<enabled>, {
  "button": <boolean>,
  "submit": <boolean>,
  "reset": <boolean>
}]
...
```

You can forbid particular type attribute values by passing `false` as corresponding option (by default all of them are `true`).

The following patterns are considered errors when using `"@sharegate/apricot/semantic-ui-button-has-type": ["error", {reset: false}]`:

```jsx
var Hello = <Button type="reset">Hello</Button>
```

## When Not To Use It

If you use only `"submit"` buttons, you can disable this rule