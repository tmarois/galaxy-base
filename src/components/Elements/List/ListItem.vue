<template>
    <div :class="{
        'flex items-center': true,
        'list--item': props.hover && !props.disabled && !props.divider,
        'h-[1px]': props.divider,
        [variantClasses.listItem]: !props.divider,
        [variantClasses.listItemSize]: !props.divider,
        [variantClasses.listItemTheme]: !props.disabled || !props.divider,
        [variantClasses.listItemHover]: props.hover && !props.disabled && !props.divider,
        [variantClasses.listItemDisabled]: props.disabled && !props.divider,
        [variantClasses.listItemDivider]: props.divider
    }">
        <div v-if="slots?.before" :class="[variantClasses.listItemBefore]">
            <slot name="before"></slot>
        </div>
        <div class="grow w-full">
            <slot></slot>
        </div>
        <div v-if="slots['after']" :class="[variantClasses.listItemAfter]">
            <slot name="after"></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps, useSlots, inject, ref } from 'vue'
import { useVariantClasses } from '../../../composables/variantClasses'

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
    disabled: {
        type: Boolean,
        default: false
    },
    hover: {
        type: Boolean,
        default: true
    },
    divider: {
        type: Boolean,
        default: false
    },
});

const isGrouped = inject('IS_LIST_GROUP', 0);
const isGroupVariant = inject('IS_LIST_VARIANT', null);

const listItemVariant = ref(props.variant);
if (isGrouped && isGroupVariant && !props.variant) {
    listItemVariant.value = isGroupVariant;
}

const variantClasses = useVariantClasses('List', listItemVariant.value, props.classes);
</script>