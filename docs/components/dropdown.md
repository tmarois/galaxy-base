<script setup>
import DropdownExample from './dropdown/examples/DropdownExample.vue'
import DropdownMenuExample from './dropdown/examples/DropdownMenuExample.vue'
</script>

# Dropdown

## Import
```vue
<script setup>
import { Dropdown } from 'galaxy-vue'
</script>
```

## Default Dropdown

<DropdownExample />

```vue
<template>
    <Dropdown>

    </Dropdown>
</template>
```

## With Menu

<DropdownMenuExample />

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
distance: {
    type: Number,
    default: 14
},
itemSelector: {
    type: String,
    default: 'li > a:not(.disabled)',
},
```

## Classes
Override the defaults in your variants to customize the look and theme

```js
wrapper: 'inline',
theme: 'bg-white border rounded shadow-md',
size: 'w-64'
```