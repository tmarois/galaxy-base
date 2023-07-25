<script setup>
import BadgeExample from './badge/examples/BadgeExample.vue'
</script>

# Badge

## Import
```vue
<script setup>
import { Badge } from 'galaxy-vue'
</script>
```

## Default Badge

<BadgeExample />

```vue
<template>
    <Badge text="Car" />
    <Badge>House</Badge>
    <Badge>Cat</Badge>
    // use a custom class
    <Badge variant="blue">Dog</Badge>
    // override variant classes
    <Badge :classes="{themeColor:'bg-red-100 text-red-800'}">Person</Badge>
</template>
```

## Removable

<BadgeExample remove />

```vue
<template>
    <Badge text="Car" removable @remove="removeBadge()" />
    <Badge removable @remove="removeBadge()">House</Badge>
    <Badge removable @remove="removeBadge()">Cat</Badge>
    <Badge removable @remove="removeBadge()">Dog</Badge>
</template>
```

## Props
Props that you can pass into the component

```js
variant: {
    type: String,
    default: null
},
text: {
    type: String,
    default: null
},
removable: {
    type: Boolean,
    default: false
},
classes: {
    type: Object,
    default: () => {}
}
```

## Slots
Slots that you can use or override

- **default**: The default slot that replaces the `text` prop
- **remove-icon**: Replaces the remove button icon

## Emits
Emits you can listen too:

- **remove**: listen to when the remove button is clicked

## Classes
Override the defaults in your variants to customize the look and theme

```js
base: 'inline-flex items-center px-2 py-1 gap-x-0.5 cursor-default',
theme: 'rounded text-sm font-normal',
themeColor: 'bg-gray-100 text-gray-800',
removeButton: 'flex items-center justify-center relative -mr-1 h-4 w-4',
removeButtonTheme: 'rounded-full hover:bg-gray-600/20 text-gray-800',
removeIcon: 'h-3 w-3'
```