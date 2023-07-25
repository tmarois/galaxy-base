# Galaxy Vue with Nuxt3

## tailwind.config.js
Add the galaxy vue to the tailwind content
```javascript
module.exports = {
  content: [
    './node_modules/galaxy-vue/**/*.{js,jsx,ts,tsx}',
  ],
}
```

## Setup Plugin for Variants
If you want to implement variants on your nuxt3 project

```javascript
// ~/plugins/galaxy-vue.js

import { setVariantClasses } from 'galaxy-vue'

export default defineNuxtPlugin(() => {
    setVariantClasses({
        // ...
    })
})
```
