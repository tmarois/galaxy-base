<script setup>
import AvatarExample from './avatar/examples/AvatarExample.vue'
import AvatarStatusExample from './avatar/examples/AvatarStatusExample.vue'
</script>

# Avatar

## Import
```vue
<script setup>
import { Avatar } from 'galaxyui'
</script>
```

## Default Avatar

<AvatarExample />

```vue
<template>
    <Avatar />
    <Avatar text="T" />
    <Avatar>R</Avatar>
    <Avatar img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
</template>
```

## Status

<AvatarStatusExample />

```vue
<template>
    <Avatar status="online" />
    <Avatar status="online" text="T" />
    <Avatar status="offline" text="R" />
    <Avatar status="busy" text="M" />
    <Avatar status="away" text="G" />
    <Avatar status="online" img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
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
img: {
    type: String,
    default: null
},
status: {
    type: String,
    default: null
},
hover: {
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

## Classes
Override the defaults in your variants to customize the look and theme

```js
wrapper: 'relative inline-flex',
content: 'inline-flex items-center justify-center overflow-hidden cursor-default',
contentSize: 'w-10 h-10 text-md font-medium',
contentTheme: 'bg-gray-700 rounded-full text-white',
contentHover: 'hover:z-10 cursor-pointer',
contentGrouped: 'border-2 border-white dark:border-gray-600',
defaultPlaceholderWrapper: 'relative h-full w-full inline-flex justify-center items-center overflow-hidden',
defaultPlaceholderIcon: 'absolute w-auto h-auto -bottom-1',
statusDotSizePosition: 'bottom-0 left-7 absolute w-3 h-3',
statusDotTheme: 'border-2 border-white rounded-full',
statusDotOnline: 'bg-green-400',
statusDotOffline: 'bg-gray-400',
statusDotBusy: 'bg-red-500',
statusDotAway: 'bg-yellow-500'
```