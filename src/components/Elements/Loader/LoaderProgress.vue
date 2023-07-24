<template>
    <div :class="variantClasses.wrapper">
        <template v-if="props.label">
            <div :class="variantClasses.outsideLabelWrapper">
                <span :class="variantClasses.outsideLabelText">{{ label }}</span>
                <span :class="variantClasses.outsideLabelProgress">{{ props.progress }}%</span>
            </div>
        </template>
        <div :class="[variantClasses.bar, variantClasses.size, variantClasses.barColor]">
            <div :class="[variantClasses.progressBar, variantClasses.size, variantClasses.progressBarColor, variantClasses.insideLabelText]" :style="{ width: props.progress + '%' }">
                <template v-if="props.progress > 0 && props.showProgress && !props.label">
                    {{ props.progress }}%
                </template>
            </div>
        </div>
    </div>
</template>

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
    progress: {
        type: Number,
        default: 0
    },
    showProgress: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: '',
    },
    labelPosition: {
        type: String,
        default: 'inside',
    },
});

const variantClasses = useVariantClasses('LoaderProgress', props.variant, props.classes);
</script>