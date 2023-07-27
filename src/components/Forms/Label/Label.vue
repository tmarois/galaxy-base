<template>
    <label 
        :for="props.id"
        :class="{
            [variantClasses.base]: true,
            [variantClasses.theme]: true,
            [variantClasses.disabled]: props.disabled,
            [variantClasses.errors]: props.errors,
            ...props.classes,
        }"
    >
        <span v-if="slots?.icon" class="mr-1"><slot name="icon" /></span>
        <span>
            <slot><span v-if="props.title">{{ props.title }}</span></slot>
        </span>
        <span v-if="props.required" class="text-red-500">*</span>
        <Tooltip 
            v-if="props.tooltip || slots['tooltip-content']" 
            :placement="props.tooltipPosition" 
        >
            <span :class="[variantClasses.icon, 'ml-1 cursor-pointer flex items-center']">
                <slot name="tooltip-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" :class="variantClasses.iconSize"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>
                </slot>
            </span>
            <template #content>
                <span>
                    <slot name="tooltip-content">{{ tooltip }}</slot>
                </span>
            </template>
        </Tooltip>
    </label>
</template>

<script setup>
import { defineProps, useSlots } from 'vue'
import { useVariantClasses } from '../../../composables/variantClasses'
import Tooltip from '../../Elements/Tooltip/Tooltip.vue'

const slots = useSlots()
const props = defineProps({
    variant: {
        type: String,
        default: null
    },
    classes: {
        type: Object,
        default: () => {}
    },
    required: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    errors: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: null
    },
    id: {
        type: String,
        default: null
    },
    tooltip: {
        type: String,
        default: null
    },
    tooltipPosition: {
        type: String,
        default: 'top'
    },
    tooltipIconSize: {
        type: Number,
        default: 4
    },
    tooltipHideArrow: {
        type: Boolean,
        default: false
    }
});

const variantClasses = useVariantClasses('Label', props.variant, props.classes);
</script>