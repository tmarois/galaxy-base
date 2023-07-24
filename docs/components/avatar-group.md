<script setup>
import AvatarGroupExample from './avatar/examples/AvatarGroupExample.vue'
</script>

# Avatar Group

## Import
```vue
<script setup>
import { Avatar, AvatarGroup } from 'galaxyui'
</script>
```

## Example

<AvatarGroupExample />

```vue
<template>
    <AvatarGroup>
        <Avatar hover />
        <Avatar hover text="T" />
        <Avatar hover>R</Avatar>
        <Avatar hover img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <Avatar hover text="+8" variant="stats" />
    </AvatarGroup>
</template>
```

Using custom variants

```js
blue: {
    contentTheme: 'bg-blue-600 rounded-full text-white',
},
orange: {
    contentTheme: 'bg-orange-600 rounded-full text-white',
},
stats: {
    contentTheme: 'bg-gray-200 rounded-full text-gray-800 !text-sm !font-normal',
    contentHover: 'hover:z-10 hover:bg-gray-300 cursor-pointer',
}
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
}
```

## Slots
Only the `<Avatar>` components should be within the group

- **default**: The default slot to place `<Avatar>` components

## Classes
Override the defaults in your variants to customize the look and theme

```js
content: 'flex -space-x-2'
```