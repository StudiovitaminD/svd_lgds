# Design tokens

This folder is the repository source for design tokens shared between the Learn Geeta Figma library and the React implementation.

Store exported or synced token JSON in `tokens.json`. Use the same token names in Figma and React so design decisions such as colors, spacing, typography, borders, and shadows stay aligned.

Suggested structure when tokens are added:

```json
{
  "color": {
    "brand": {
      "primary": {
        "$type": "color",
        "$value": "#000000"
      }
    }
  }
}
```

React component source belongs in `src/components`. This folder holds the token data those components consume.
