<template>
    <div class="expandable-group" :class="[variantClasses.group, variantClasses.groupTheme]">
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps, provide, ref } from 'vue'
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
    alwaysOpen: {
        type: Boolean,
        default: false
    }
});

const expandActive = ref(false)
const variantClasses = useVariantClasses('Expandable', props.variant, props.classes);

provide('IS_EXPANDABLE_GROUP', 1);
provide('IS_ALWAYS_OPEN', props.alwaysOpen);
provide('EXPAND_ACTIVE', expandActive);
</script>

<style>
@tailwind components;

@layer components {    
    .expandable-group > .expandable-wrapper .expandable {
        @apply !rounded-none
    }
    /* .expandable-group > .expandable:first-child {
        @apply !rounded-t;
    }
    .expandable-group > .expandable:last-child {
        @apply !rounded-b;
    } */
}
</style>