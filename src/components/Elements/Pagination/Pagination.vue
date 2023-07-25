<template>
    <div>pagination</div>
</template>

<script setup>
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
});

const variantClasses = useVariantClasses('Pagination', props.variant, props.classes);
</script>