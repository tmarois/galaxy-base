<template>
    <div :class="{
        'relative': true,
        'w-full h-full': props.responsive,
        [variantClasses.content] : true
    }">
        <slot name="default"></slot>
    </div>
</template>

<script setup>
import { defineProps, provide } from 'vue'
import { useVariantClasses } from '../../../composables/variantClasses'

const props = defineProps({
    variant: {
        type: String,
        default: null
    },
    classes: {
        type: Object,
        default: () => {}
    },
    responsive: {
        type: Boolean,
        default: false
    }
});

const variantClasses = useVariantClasses('ButtonGroup', props.variant, props.classes);

provide('IS_BUTTON_GROUP', 1);
provide('IS_BUTTON_GROUP_RESPONSIVE', props.responsive);
</script>

<style>
.animation-none {
    animation:none !important;
    transform:none !important;
}

@tailwind components;

@layer components {    
    .btn-group > .btn {
        @apply rounded-none
    }
    .btn-group > .btn, .btn-group > .btn:active:hover, .btn-group > .btn:active:focus {
        @apply animation-none
    }
    .btn-group > .btn:not(:disabled) {
        @apply border-r border-primary-800
    }
    .btn-group > .btn:first-child {
        @apply rounded-l;
    }
    .btn-group > .btn:last-child {
        @apply rounded-r;
    }
}
</style>