<template>
    <div :class="{
        [variantClasses.listGroup]: true,
        [variantClasses.listGroupColor]: true,
        [variantClasses.listGroupText]: true,
    }">
        <slot></slot>
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
    }
});

const variantClasses = useVariantClasses('List', props.variant, props.classes);

provide('IS_LIST_GROUP', 1);
provide('IS_LIST_VARIANT', props.variant);
</script>