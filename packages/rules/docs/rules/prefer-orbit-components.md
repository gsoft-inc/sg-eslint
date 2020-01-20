# Prefer orbit components over semantic-ui-react components. (prefer-orbit-components)

Some semantic-ui-react components are wrapped by orbit. They should be used instead of the ones from semantic-ui-react.

## Rule Details

The following patterns are considered errors:

```jsx

import { Button } from "semantic-ui-react"
import { Label } from "semantic-ui-react"

```

The following patterns are **not** considered errors:

```jsx
import { Button } from "@orbit-ui/react-components"
import { Label } from "@orbit-ui/react-components"
import { Dropdown } from "semantic-ui-react"
```


## When Not To Use It

If you are not using orbit or if you don't want to enforce the usage of orbit components.
