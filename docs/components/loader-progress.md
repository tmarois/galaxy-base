<script setup>
import LoaderProgressExample from './loader/examples/LoaderProgressExample.vue'
</script>

# Loader Progress

## Import
```vue
<script setup>
import { LoaderProgress } from 'galaxy-vue'
</script>
```

## Default Loader Progress

<LoaderProgressExample :progress="60" />

```vue
<template>
    <LoaderProgress :progress="60" />
</template>
```

## With Progress Amount

<LoaderProgressExample :progress="48" showProgress />

```vue
<template>
    <LoaderProgress :progress="48" showProgress />
</template>
```

## With Label

<LoaderProgressExample :progress="48" showProgress label="Downloading" />

```vue
<template>
    <LoaderProgress 
        :progress="48" 
        showProgress 
        label="Downloading"  
    />
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
progress: {
    type: Number,
    default: 0
},
showProgress: {
    type: Boolean,
    default: false,
},
label: {
    type: String,
    default: '',
},
labelPosition: {
    type: String,
    default: 'inside',
},
```

## Classes
Override the defaults in your variants to customize the look and theme

```js
wrapper: 'relative block w-full overflow-hidden',
size: 'h-4',
bar: 'w-full rounded-full',
barColor: 'bg-gray-200 dark:bg-gray-700',
progressBar: 'rounded-full p-0.5',
progressBarColor: 'bg-blue-600 dark:bg-blue-600 text-blue-100',
insideLabelText: 'font-medium text-center text-xs leading-none',
outsideLabelWrapper: 'flex justify-between mb-1',
outsideLabelText: 'text-base font-medium',
outsideLabelProgress: 'text-sm font-medium',
```