<script setup>
import CardExample from './card/examples/CardExample.vue'
import CardFooterExample from './card/examples/CardFooterExample.vue'
import CardDetachHeaderExample from './card/examples/CardDetachHeaderExample.vue'
</script>

# Card

## Import
```vue
<script setup>
import { Card } from 'galaxy-vue'
</script>
```

## Default Card
<CardExample />

## With loading

<CardExample loading />

## Disabled with loading
<CardExample loading disabled />

## Header Title

<CardExample title="Card Title" />

```vue
<template>
    <Card title="Card Title">
        The card content
    </Card>
</template>
```

## Header with Subtitle 

<CardExample title="Card Title" subtitle="My card subtitle description can go here" />

```vue
<template>
    <Card 
        title="Card Title" 
        subtitle="My card subtitle description can go here"
    >
        The card content
    </Card>
</template>
```

## Header with Loading 

<CardExample loading title="Card Title" subtitle="My card subtitle description can go here" />

```vue
<template>
    <Card 
        loading
        title="Card Title" 
        subtitle="My card subtitle description can go here"
    >
        The card content
    </Card>
</template>
```

## Header Detached

<CardDetachHeaderExample title="Title Detached" subtitle="This header is detached from the card box" />

```vue
<template>
    <Card 
        detachedHeader
        title="Title Detached" 
        subtitle="This header is detached from the card box"
    >
        The card content
    </Card>
</template>
```


## Footer

<CardFooterExample />

```vue
<template>
    <Card title="My Card" subtitle="This is a card to talk about something">
        The card content
        <template #footer>
            Footer content goes here
        </template>
    </Card>
</template>
```

## Props
Props that you can pass into the component

```js
variant: {
    type: String,
    default: null
},
variantLoader: {
    type: String,
    default: null
},
classes: {
    type: Object,
    default: () => {}
},
loading: {
    type: Boolean,
    default: false
},
title: {
    type: String,
    default: null
},
subtitle: {
    type: String,
    default: null
},
detachedHeader: {
    type: Boolean,
    default: false
},
removePadding: {
    type: Boolean,
    default: false
},
removeBodyPadding: {
    type: Boolean,
    default: false
},
removeFooterPadding: {
    type: Boolean,
    default: false
}
```

## Slots
Slots that you can use or override

- **header**: Custom header for the card (replaces title/subtitle props)
- **actions**: Actions to display on header (required for use)
- **footer**: Add footer content (required for footer use)

## Classes
Override the defaults in your variants to customize the look and theme

### All classes
These are all the classes this component uses 

```js
wrapper: 'flex flex-col w-full relative',
contentWrapper: 'flex flex-col w-full',
contentTheme: 'rounded shadow border border-gray-200 bg-white',
detachedHeaderWrapper: 'flex items-center p-2',
headerWrapper: 'flex items-center',
headerTheme: 'border-b border-gray-200',
headerTitleWrapper: 'grow',
headerTitle: 'font-medium text-lg',
headerSubtitle: 'font-normal text-sm text-gray-600',
headerActions: 'flex items-center',
body: 'grow',
footerTheme: 'border-t border-gray-300',
padding: 'p-4'
```

### Theme-only classes
If you want to only overwrite the theme related classes

```js
contentTheme: 'rounded shadow border border-gray-200 bg-white',
headerTheme: 'border-b border-gray-200',
headerTitle: 'font-medium text-lg',
headerSubtitle: 'font-normal text-sm text-gray-600',
footerTheme: 'border-t border-gray-300',
padding: 'p-4'
```