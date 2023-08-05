# Container

## Example

```javascript
<template>
    <Container>
        <div>content</div>
    </Container>
</template>
```

## Fluid

*Note: This option disables variant property width and uses `w-full` instead*

**Example:** full width of container
 
```vue
<template>
    <Container fluid>
        <div>This content fits the full width of its parents</div>
    </Container>
</template>
```

## Fade In

*Note: Containers will fade in even if they are not visible on screen*

**Example:** fade in transition 
 
```vue
<template>
    <Container fadeIn>
        <div>This content will fade in</div>
    </Container>
</template>
```

**Example:** fade in order (up to 4)
 
```vue
<template>
    <Container fadeIn :fadeInOrder="2">
        <div>This will fade in 2nd place (or delayed)</div>
    </Container>
</template>
```

**Example:** You can also fade in any other element using the available css class:

```vue
<template>
    <div class="g-fade-in">
        <div>This custom div will fade in</div>
    </div>
</template>
```

**Available Fade In CSS Classes:** 
- `g-fade-in`
- `g-fade-first`
- `g-fade-second`
- `g-fade-third`
- `g-fade-forth`

## Props

```javascript
variant: {
    type: String,
    default: null
},
classes: {
    type: Object,
    default: () => {}
},
fluid: {
    type: Boolean,
    default: false
},
fadeIn: {
    type: Boolean,
    default: false
},
fadeInOrder: {
    type: Boolean,
    default: false
}
```

## Variants

```javascript
default: {
    base: 'flex h-full flex-col mx-auto',
    width: 'max-w-7xl'
}
```