# galaxy-vue
 

## Install

Install the package locally `npm ci` or `npm install`


## View Examples

View the documentation/example components `npm run dev` 


## Use within project

Until there is a proper npm package to install from, you an do: 

`github:tmarois/galaxy-vue#main`

When changes are made, you can do: 

`npm update galaxy-vue`

Note: There will be a package soon for the first version. This is currently in testing phase.

## Import

Be sure to globally add the css into your project

```js
import '/node_modules/galaxy-vue/dist/style.css';
```

Importing components 

```js
import { Button } from 'galaxy-vue'
```

## Variants

You can override or add new variants using:

```js
import { setVariantClasses } from 'galaxy-vue'

setVariantClasses({
    'Button': {
        cta: {
            base: 'whitespace-nowrap font-medium rounded-full border cursor-pointer',
            baseSize: 'text-lg px-8 py-4',
            normal: 'text-white bg-brand hover:bg-brandLite border-transparent',
        },
        // ... more variants for the button
    },
    // ... more components 
)
```

Note: it would be best to set this globally in your package like a set of rules. 

Using Nuxt3 Plugins you can do: 

```js
import { setVariantClasses } from 'galaxy-vue'
import '/node_modules/galaxy-vue/dist/style.css';

export default defineNuxtPlugin(() => {
    setVariantClasses({
        'Button': {
            cta: {
                base: 'whitespace-nowrap font-medium rounded-full border cursor-pointer',
                baseSize: 'text-lg px-8 py-4',
                normal: 'text-white bg-brand hover:bg-brandLite border-transparent',
            },
            // ... more variants for the button
        },
        // ... more components 
    })
})
```

In the examples above, you can use variants like 

```vue
<Button variant="cta">Sign Up</Button>
```


