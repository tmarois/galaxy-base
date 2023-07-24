<template>
    <div :class="[variantClasses.base, variantClasses.theme, variantClasses.themeColor]">
        <div><slot>{{ props.text }}</slot></div>
        <button 
            v-if="props.removable" 
            type="button" 
            :class="[variantClasses.removeButton, variantClasses.removeButtonTheme]"
            @click="remove($event)"
        >
            <slot name="remove-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="variantClasses.removeIcon"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </slot>
        </button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useVariantClasses } from '../../../composables/variantClasses'

const emit = defineEmits(['remove'])
const props = defineProps({
    variant: {
        type: String,
        default: null
    },
    classes: {
        type: Object,
        default: () => {}
    },
    text: {
        type: String,
        default: null
    },
    removable: {
        type: Boolean,
        default: false
    }
});

const variantClasses = useVariantClasses('Badge', props.variant, props.classes);

const remove = (event) => {
    emit('remove', event)
}
</script>