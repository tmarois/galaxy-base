<template>
    <transition name="fade" appear>
        <div
            v-if="props.show"
            @click="close"
            :class="{
                [variantClasses.base]: true,
                [variantClasses.theme]: true,
                'cursor-pointer': !props.persist,
                'fixed': !props.relative,
                'absolute': props.relative,
            }"
        ></div>
    </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
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
    },
    persist: {
        type: Boolean,
        default: false
    },
    relative: {
        type: Boolean,
        default: false
    },
    show: {
        type: Boolean,
        default: false
    }
});

const variantClasses = useVariantClasses('Overlay', props.variant, props.classes);

const close = () => {
    if (props.persist === false) emit('close');
};
</script> 

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
.fade-appear-from {
    opacity: 0;
}
.fade-appear-to {
    opacity: 1;
}
.fade-appear-active {
    transition: opacity .3s;
}
</style>