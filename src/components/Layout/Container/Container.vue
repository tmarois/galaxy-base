<template>
    <div :class="[variantClasses.base, variantClasses.width]">
        <slot />
    </div>
</template>

<script setup>
import { useVariantClasses } from '../../../composables/variantClasses'
const emit = defineEmits(['close']);
const props = defineProps({
    variant: {
        type: String,
        default: null
    },
    classes: {
        type: Object,
        default: () => {}
    }
});
const variantClasses = useVariantClasses('Container', props.variant, props.classes);
</script> 