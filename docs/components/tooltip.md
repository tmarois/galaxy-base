<script setup>
import TooltipExample from './tooltip/examples/TooltipExample.vue'
</script>

# Tooltip

## Import
```vue
<script setup>
import { Tooltip } from 'galaxy-vue'
</script>
```

## Default Tooltip

<TooltipExample />

```vue
<template>
    <Dropdown>

    </Dropdown>
</template>
```

## Props
Props that you can pass into the component

```js
variant: {
    type: String,
    default: null
},
classes: {
    type: Object,
    default: () => {}
},
placement: {
    type: String,
    default: 'bottom-start'
},
itemSelector: {
    type: String,
    default: 'li > a:not(:disabled)',
},
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