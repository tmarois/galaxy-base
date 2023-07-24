<template>
    <div :class="variantClasses.content">
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
    }
});

const variantClasses = useVariantClasses('AvatarGroup', props.variant, props.classes);

provide('IS_AVATAR_GROUPED', 1);
</script>