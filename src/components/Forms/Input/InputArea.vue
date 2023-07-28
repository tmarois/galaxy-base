<template>
    <div :class="variantClasses.root">
        <Label 
            v-if="props.label"
            :id="id"
            :title="props.label"
            :required="props.required"
            :error="props.errors"
            :tooltip="props.tooltip"
            :disabled="props.disabled"
            :variant="props.variantLabel"
        />
        <div class="flex" :class="{'mt-1': props.label}">
            <div :class="variantClasses.inputWrapper">
                <component 
                    ref="inputTag"
                    :is="tag"
                    :id="id"
                    :name="`${props.name}-${id}`"
                    :placeholder="props.placeholder"
                    :readonly="props.readonly"
                    :disabled="props.disabled"
                    :required="props.required"
                    :maxlength="props.maxlength"
                    :autocomplete="`new-${id}`"
                    :autofill="`new-${id}`"
                    :pattern="props.pattern"
                    :value="internalValue"
                    @input="input($event)"
                    @keyup="keyup($event)"
                    @keydown="keydown($event)"
                    @focusout="focusout($event)"
                    @focus="focusin($event)"
                    @blur="blur($event)"
                    :min="props.min"
                    :max="props.max"
                    :step="props.step"
                    :class="inputClasses"
                    :style="(props.width ? `width: ${props.width}px;` : '')+props.customStyle"
                />
                <div 
                    v-if="props.clearable && internalValue && !props.readonly && !props.disabled"
                    :class="variantClasses.clearable"
                    @click="clearField"
                >
                    <slot name="clearable">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </slot>
                </div>
            </div>
        </div>
        <div v-if="props.characterCounter" :class="variantClasses.counter">
            <slot 
                name="counter" 
                :valueLength="(internalValue && internalValue.length) ? internalValue.length : 0" 
                :maxlength="props.maxlength"
            >{{ (internalValue && internalValue.length) || 0 }}<span v-if="props.maxlength">/{{ props.maxlength }}</span></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, useSlots, computed, ref } from 'vue'
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
    label: {
        type: String,
        default: null
    },
    placeholder: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: 'input'
    },
    type: {
        type: String,
        default: 'text'
    },
    decimals: {
        type: Number,
        default: null
    },
    readonly: {
        type: Boolean,
        default: false
    },
    maxlength: {
        type: Number,
        default: null
    },
    modelValue: {
        type: [Number, String],
        default: null
    },
    value: {
        type: [Number, String],
        default: null
    },
    clearable: {
        type: Boolean,
        default: false
    },
    min: {
        type: [String, Number],
        default: null
    },
    max: {
        type: [String, Number],
        default: null
    },
    errors: {
        type: Boolean,
        default: false
    },
    pattern: {
        type: String,
        default: null
    },
    width: {
        type: [String, Number],
        default : null
    },
    characterCounter: {
        type: Boolean,
        default: false
    },
    step: {
        type: [String, Number],
        default: null
    },
    customClasses: {
        type: String,
        default: null
    },
    customStyle: {
        type: String,
        default: null
    },
    noresize: {
        type: Boolean,
        default: false
    },
    formatter: {
        type: Function,
        default: null
    },
    selectAll: {
        type: Boolean,
        default: false
    },
    tooltip: {
        type: String,
        default: null
    },
});

const variantClasses = useVariantClasses('InputArea', props.variant, props.classes);

const tag = 'textarea';

const emit = defineEmits(['keyup','keydown','enter','focusin','focusout','blur', 'cleared','update:modelValue','input']);

const id = uniqueId();

const inputTag = ref(null)

const validateValue = (value) => {
    if (value === null || value === undefined || value === '') return null;
    return value;
};

const input = (e) => {
    // internalValue.value = validateValue(e.target.value);
    // e.target.value = internalValue.value;
};

const keyup = (e) => {
    e.target.value = validateValue(e.target.value);
    internalValue.value = (e.target.value);
    emit('keyup', e);
    if(e.key === 'Enter') {
        emit('enter',e)
    }
};

const keydown = (e) => {
    emit('keydown', e);
};

const focusin = (e) => {
    if (props.selectAll && inputTag?.value) {
        inputTag.value.select()
    }
    emit('focusin', e);
};

const focusout = (e) => {
    emit('focusout', e);
};

const clearField = () => {
    internalValue.value = null;
    emit('cleared');
};

const blur = (e) => {
    internalValue.value = validateValue(e.target.value);
    e.target.value = internalValue.value;
    emit('blur',e)
};

const inputClasses = computed(() => {
    if(!props.customClasses) {
        let c = [variantClasses.input];
        if (props.noresize) c = c.concat(['resize-none'])
        if (props.clearable) c = c.concat(['pr-8'])
        if(props.readonly) c = c.concat([variantClasses.readonly])
        if(props.disabled) c = c.concat([variantClasses.disabled])
        if(props.errors) c = c.concat([variantClasses.errors])
        if (!props.errors && !props.disabled) c = c.concat([variantClasses.inputTheme])
        return c;
    }
    else return props.customClasses;
});

const internalValue = computed({
    get: () => {
        return validateValue((props.modelValue!==null) ? props.modelValue : props.value)
    },
    set: (v) => {
        emit('update:modelValue', (v));
    }
});
</script>