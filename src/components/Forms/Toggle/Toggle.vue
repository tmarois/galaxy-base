<template>
    <div :class="variantClasses.wrapper">
        <div 
            v-if="props.falseLabel"
            :class="variantClasses.labelFalseWrapper"
		>
			<Label 
				@click.native="switchState('before')"
                :disabled="props.disabled"
				:classes="{
                    'cursor-pointer': true,
                    [variantClasses.switchFalseLabelColorChecked]: isChecked,
                }"
			>
				{{ props.falseLabel }}
			</Label>
		</div>
        <div 
            v-if="!props.disabled" 
            :class="variantClasses.inputWrapper" 
            @click="clickHandler"
        >
            <input 
                :id="id"
                class="sr-only" 
                :checked="isChecked"
                :value="props.modelValue"
                :disabled="props.disabled"
                @change="onChange($event)" 
            />
            <div>
                <div :class="`${props.inset ? 'w-12' : 'w-10'} ${props.inset ? 'h-6' : 'h-4'} ${isChecked ? variantClasses.switchColorChecked : variantClasses.switchColor} rounded-full shadow-inner`" id="switch-background" />
                <div :class="`absolute w-6 h-6 bg-white border-2 ${isChecked ? `${variantClasses.switchColorBorderChecked} translate-x-full` : `${variantClasses.switchColorBorder} translate-x-0`} rounded-full ${props.inset ? 'left-0 top-0' : '-left-1 -top-1'} transition`" />
            </div>
        </div>
        <div v-else class="relative cursor-not-allowed">
			<div :class="`${props.inset ? 'w-12' : 'w-10'} ${props.inset ? 'h-6' : 'h-4'} ${isChecked ? variantClasses.switchDisabledColorChecked : variantClasses.switchDisabledColor } rounded-full shadow-inner`" />
			<div :class="`absolute w-6 h-6 bg-white border-2 ${isChecked ? `${variantClasses.switchDisabledColorBorderChecked} translate-x-full` : 'translate-x-0'} rounded-full ${props.inset ? 'left-0 top-0' : '-left-1 -top-1'} transition`" /> 
		</div>
		<div 
            v-if="props.label" 
            :class="variantClasses.labelWrapper"
            @click.native="switchState('after')"
        >
			<Label 
                :id="null" 
                :required="props.required"
                :disabled="props.disabled"
                :tooltip="props.tooltip"
                :variant="props.variantLabel"
                :variantTooltip="props.variantTooltip"
                :classes="{
                    'cursor-pointer': true,
                    [variantClasses.switchTrueLabelColorChecked]: isChecked && props.falseLabel,
                    [variantClasses.switchTrueLabelColor]: !isChecked && props.falseLabel,
                }"
            >{{ props.label }}</Label>
		</div>
	</div>
</template>

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
    falseLabel: {
        type: [String,Boolean],
        default: false
    },
    inset: {
        type: Boolean,
        default: false
    },
});

const emit = defineEmits(['update:modelValue', 'change']);
const id = uniqueId();

const variantClasses = useVariantClasses('Toggle', props.variant, props.classes);

const onChange = (e) => {
    const value = props.modelValue;
    let input = internalValue;
    input = valueComparator(value, props.trueValue) ? props.falseValue : props.trueValue;
    internalValue.value = input;
    emit('change', e);
}

const clickHandler = (e) => {
    e.preventDefault()
    switchState('toggle')
}

const switchState = (side) => {
    if(!props.disabled) {
        if(side === 'after' && props.falseLabel) {
            internalValue.value = props.trueValue;
        }
        else if(side === 'before' && props.falseLabel) {
            internalValue.value = props.falseValue;
        }
        else {
            internalValue.value = valueComparator(props.modelValue, props.trueValue) ? props.falseValue : props.trueValue
        }
    }
};

const internalValue = computed({
    get: () => {
        return props.modelValue
    },
    set: (v) => {
        emit('update:modelValue', v);
    }
});

const isChecked = computed(() => valueComparator(props.modelValue, props.trueValue) ? true : false);
</script>