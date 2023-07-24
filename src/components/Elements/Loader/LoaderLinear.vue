<template>
	<div :class="[
        variantClasses.base,
        variantClasses.size,
        {
			[variantClasses.emptyColor] : !props.disabled,
			[variantClasses.disabledEmptyColor] : props.disabled
		}
    ]">
		<div 
            class="loader-linear" 
            :class="{
				[variantClasses.fillColor] : !props.disabled,
				[variantClasses.disabledFillColor] : props.disabled
			}" 
        />
	</div>
</template>

<style scoped>
.loader-linear::before {
	content: '';
	position: absolute;
	background-color: inherit;
	bottom: 0;
	top: 0;
	left: 0;
	animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}
.loader-linear::after {
	content: '';
	position: absolute;
	background-color: inherit;
	bottom: 0;
	top: 0;
	left: 0;
	animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
	animation-delay: 1.15s;
}
@keyframes indeterminate {
	0% {
		left:-35%;
		right:100%;
	} 
	60% {
		left:100%;
		right:-90%;
	} 
	100% {
		left:100%;
		right:-90%;
	}
}
@keyframes indeterminate-short {
	0% { 
		left: -200%;
		right: 100%;
	} 
	60% {
		left: 107%;
		right: -8%;
	} 
	100% {
		left:107%;
		right:-8%;
	}
}
</style>

<script setup>
import { defineProps } from 'vue'
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
    disabled: {
        type: Boolean,
        default: false
    }
});

const variantClasses = useVariantClasses('LoaderLinear', props.variant, props.classes);
</script>