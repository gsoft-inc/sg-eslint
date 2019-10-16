# CSS Modules should have the same name as a component and located in the same folder (strict-css-modules-name)

CSS modules should have the same name as the component they are used in.

## Rule Details

This rules prevents the import of a css modules that isn't for this component.

Examples of **incorrect** code for this rule:

```js
// in file owner-row.jsx
import styles from "./owner-main-page.module.css";

// in file owner-row.jsx
import styles from "./owner-row/owner-row.module.css";

```

Examples of **correct** code for this rule:

```js
// in file owner-row.jsx
import styles from "./owner-row.module.css";

// importing global css file is fine
import styles from "./global.css";
```

## When Not To Use It

If you do not wish to enforce strict css modules names, you can safely disable this rule.