<script setup>
import LoaderLinearExample from './loader/examples/LoaderLinearExample.vue'
</script>

# Loader Linear

## Import
```vue
<script setup>
import { LoaderLinear } from 'galaxy-vue'
</script>
```

## Default Loader Linear

<LoaderLinearExample />

```vue
<template>
    <LoaderLinear />
</template>
```

## Disabled

<LoaderLinearExample disabled />

```vue
<template>
    <LoaderLinear disabled />
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
base: 'relative block w-full overflow-hidden',
size: 'h-1',
emptyColor: 'bg-blue-200 dark:bg-gray-700',
fillColor: 'bg-blue-700',
disabledEmptyColor: 'bg-gray-200 dark:bg-gray-700',
disabledFillColor: 'bg-gray-400 dark:bg-gray-500',
```