# Prefer cx over classnames as the name of classnames imports. (prefer-cx)

[classnames](https://www.npmjs.com/package/classnames) has historically been referred to by the reference name classnames. In order to to be able to use classnames as a variable name, we will be using cx exclusively going forward.

## Rule Details

Examples of **incorrect** code for this rule:

```js
import classnames from "classnames";
```

Examples of **correct** code for this rule:

```js
import cx from "classnames";
```

## When Not To Use It

If you do not use the package classnames, you can safely disable this rule.
