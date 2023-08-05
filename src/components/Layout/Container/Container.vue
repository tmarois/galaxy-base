<template>
    <div :class="{
        [variantClasses.base]: true,
        [variantClasses.width]: !props.fluid,
        'w-full': props.fluid,
        'g-fade-in': props.fadeIn,
        'g-fade-in-first': props.fadeInOrder===1,
        'g-fade-in-second': props.fadeInOrder===2,
        'g-fade-in-third': props.fadeInOrder===3,
        'g-fade-in-forth': props.fadeInOrder===4
    }">
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
});
const variantClasses = useVariantClasses('Container', props.variant, props.classes);
</script> 

<style>
.g-fade-in {
	opacity: 0;
	-webkit-animation: gfadeIn ease-in 1;
	-moz-animation: gfadeIn ease-in 1;
	animation: gfadeIn ease-in 1;
	-webkit-animation-fill-mode: forwards;
	-moz-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
	-webkit-animation-duration: 0.3s;
	-moz-animation-duration: 0.3s;
	animation-duration: 0.3s; 
}
.g-fade-in-first {
	-webkit-animation-delay: 0.1s;
	-moz-animation-delay: 0.1s;
	animation-delay: 0.1s; 
}
.g-fade-in-second {
	-webkit-animation-delay: 0.3s;
	-moz-animation-delay: 0.3s;
	animation-delay: 0.3s; 
}
.g-fade-in-third {
	-webkit-animation-delay: 0.75s;
	-moz-animation-delay: 0.75s;
	animation-delay: 0.75s; 
}
.g-fade-in-fourth {
	-webkit-animation-delay: 1s;
	-moz-animation-delay: 1s;
	animation-delay: 1s; 
}
@keyframes gfadeIn {
	from {
		opacity: 0; 
	}
	to {
		opacity: 1; 
	} 
}
</style>