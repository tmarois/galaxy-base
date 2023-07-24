# Galaxy UI with Nuxt3

## tailwind.config.js
Add the galaxy ui to the tailwind content
```javascript
module.exports = {
  content: [
    './node_modules/galaxyui/**/*.{js,jsx,ts,tsx}',
  ],
}
```

## Setup Plugin for Variants
If you want to implement variants on your nuxt3 project

```javascript
// ~/plugins/galaxy-ui.js

import { setVariantClasses } from 'galaxyui'

export default defineNuxtPlugin(() => {
    setVariantClasses({
        // ...
    })
})
```
