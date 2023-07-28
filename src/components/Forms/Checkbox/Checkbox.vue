<template>
    <div :class="variantClasses.wrapper">
        <div :class="variantClasses.inputWrapper">
            <input 
                :id="id"
                :type="props.radio ? 'radio' : 'checkbox'" 
                :class="{
                    [variantClasses.inputCheck]: !props.radio, 
                    [variantClasses.inputRadio]: props.radio, 
                    [variantClasses.inputDisabled]: props.disabled
                }" 
                :checked="isChecked"
                :value="props.modelValue"
                :disabled="props.disabled"
                @change="onChange($event)" 
            />
        </div>
		<div v-if="props.label || slots?.default" :class="variantClasses.labelWrapper">
            <slot :isChecked="isChecked" :props="props">
                <Label 
                    :id="id" 
                    :required="props.required"
                    :disabled="props.disabled"
                    :tooltip="props.tooltip"
                    :variant="props.variantLabel"
                    :variantTooltip="props.variantTooltip"
                >{{ props.label }}</Label>
            </slot>
		</div>
	</div>
</template>

<style scoped>
input:checked + div div {
  display: block;
}
</style>

<script setup>
import { defineProps, defineEmits, useSlots, computed } from 'vue'
import { useVariantClasses } from '../../../composables/variantClasses'
import Label from '../../Forms/Label/Label.vue'
import { uniqueId } from '../../../utils/id'
import { valueComparator } from '../../../utils/values'

const slots = useSlots()
const props = defineProps({
    variant: {
        type: String,
        default: null
    },
    variantLabel: {
        type: String,
        default: null
    },
    variantTooltip: {
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
    label: {
        type: String,
        default: null
    },
    tooltip: {
        type: String,
        default: null
    },
    modelValue: {
        type: [String, Boolean],
        default: null
    },
    value: {
        type: [String, Boolean],
        default: null
    },
    trueValue: {
        type: [String, Boolean],
        default: true
    },
    falseValue: {
        type: [String, Boolean],
        default: false
    },
    radio: {
        type: Boolean,
        default: false
    },
});

const emit = defineEmits(['update:modelValue', 'change']);
const id = uniqueId();

const variantClasses = useVariantClasses('Checkbox', props.variant, props.classes);

const onChange = (e) => {
    const value = props.modelValue;
    let input = internalValue;
    input = valueComparator(value, props.trueValue) ? props.falseValue : props.trueValue;
    internalValue.value = input;
    emit('change', e);
}

const internalValue = computed({
    get: () => {
        return props.modelValue
    },
    set: (v) => {
        emit('update:modelValue', v);
    }
});

const isChecked = computed(() => valueComparator(props.modelValue || props.value, props.trueValue) ? true : false);
</script>