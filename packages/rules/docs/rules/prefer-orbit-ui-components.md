# Prefer Orbit UI React components over Semantic UI React components. (prefer-orbit-ui-components)

Some Semantic UI React components are wrapped by Orbit UI. They should be used instead of the ones from Semantic UI React.

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

If you are not using Orbit UI or if you don't want to enforce the usage of Orbit UI React components.
