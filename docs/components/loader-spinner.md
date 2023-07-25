<script setup>
import LoaderSpinnerExample from './loader/examples/LoaderSpinnerExample.vue'
</script>

# Loader Spinner

## Import
```vue
<script setup>
import { LoaderSpinner } from 'galaxy-vue'
</script>
```

## Default Loader Spinner

<LoaderSpinnerExample />

```vue
<template>
    <LoaderSpinner />
    <LoaderSpinner disabled />
</template>
```

## Props
Props that you can pass into the component

```js
variant: {
    type: String,
    default: null
},
disabled: {
    type: Boolean,
    default: false
},
classes: {
    type: Object,
    default: () => {}
}
```

## Classes
Override the defaults in your variants to customize the look and theme

```js
base: 'animate-spin',
size: 'w-5 h-5',
color: 'text-gray-200 dark:text-gray-600 fill-blue-600 dark:fill-blue-500',
disabled: '!fill-gray-400',
```