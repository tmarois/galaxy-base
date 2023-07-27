<template>
    <component 
        v-bind="options.data" 
        :is="options.tag" 
        :class="computeClasses"
    >
        <span v-if="props.loading || slots?.icon" :class="{
            'flex items-center justify-center' : true,
            'mr-2': slots?.default,
        }">
            <span v-if="props.loading" :class="{
                'btn__loader': props.loading && !slots?.default,
                'opacity-0': !props.loading,
            }">
                <slot name="loader">
                    <LoaderSpinner :disabled="props.disabled" :variant="props.variantLoader" />
                </slot>
            </span>
            <span v-if="(slots?.icon && !slots?.default) || !props.loading && slots?.icon && slots?.default" :class="{
                'opacity-0': props.loading,
                [variantClasses.iconSize]: true
            }">
                <slot name="icon" />
            </span>
        </span>
        <span v-if="slots?.default" :class="{
            'opacity-0': props.loading && !slots?.default
        }">
            <slot />
        </span>
        <span v-if="slots?.default && (slots['icon-after'] || isDropdown && isDropdownWithArrow)" class="ml-2" :class="variantClasses.iconSize">
            <slot name="icon-after">
                <svg v-if="isDropdown && isDropdownWithArrow && isDropdownOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                <svg v-else-if="isDropdown && isDropdownWithArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </slot>
        </span>
    </component>
</template>

<script setup>
import { defineProps, useSlots, computed, inject } from 'vue'
import { useVariantClasses } from '../../../composables/variantClasses'
import LoaderSpinner from '../Loader/LoaderSpinner.vue'

const slots = useSlots()
const props = defineProps({
    variant: {
        type: String,
        default: null
    },
    variantLoader: {
        type: String,
        default: null
    },
    classes: {
        type: Object,
        default: () => {}
    },
    loading: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    target: {
        type: String,
        default: null
    },
    to: {
        type: String,
        default: null
    },
    href: {
        type: String,
        default: null
    },
    tag: {
        type: String,
        default: 'button'
    },
    circle: {
        type: Boolean,
        default: false
    },
    outlined: {
        type: Boolean,
        default: false
    },
    ghost: {
        type: Boolean,
        default: false
    },
    responsive: {
        type: Boolean,
        default: false
    }
});

const variantClasses = useVariantClasses('Button', props.variant, props.classes);

const computeClasses = computed(() => {
    return {
        'btn relative inline-flex items-center justify-center': true,
        'w-full h-full': props.responsive || isResponsive,
        [variantClasses.base]: true,
        [variantClasses.baseSize]: true,
        [variantClasses.baseSizeIconOnly]: (!isGrouped && (props.circle && isIconOnly.value || isIconOnly.value)),
        [variantClasses.normal]: !props.outlined && !props.ghost && !props.disabled,
        [variantClasses.outlined]: props.outlined && !props.disabled,
        [variantClasses.ghost]: props.ghost && !props.outlined && !props.disabled,
        [variantClasses.normalDisabled]: !props.outlined && !props.ghost && props.disabled,
        [variantClasses.outlinedDisabled]: props.outlined && !props.ghost && props.disabled,
        [variantClasses.ghostDisabled]: props.ghost && !props.outlined && props.disabled,
        [variantClasses.shadow]: (!isGrouped && !props.outlined && !props.ghost),
        [variantClasses.disabled]: props.disabled,
        'rounded-full': props.circle,
        'btn__loading': props.loading,
    };
});

const options = computed(() => {
    let tag = '';

    const data = {
        disabled: false,
        target: null,
        href: null,
        to: null
    };

    if (!props.disabled) {
        if (props.to) {
            tag = 'RouterLink';
            data.to = props.to;
        } 
        else {
            tag = (props.href && 'a') || props.tag || 'div';
            if (tag === 'a' && props.href) data.href = props.href;
        }
        if (props.target) data.target = props.target;
    }
    else {
        tag = 'button'
    }

    if (tag === 'button' && props.disabled) {
        data.disabled = true;
    }

    return { tag, data };
});

const isIconOnly = computed(() => {
    if (!slots.default && slots.icon) {
        return true
    }
    return false
});

const isGrouped = inject('IS_BUTTON_GROUP', 0);
const isResponsive = inject('IS_BUTTON_GROUP_RESPONSIVE', 0);
const isDropdown = inject('IS_DROPDOWN', 0);
const isDropdownOpen = inject('IS_DROPDOWN_OPEN', 0);
const isDropdownWithArrow = inject('IS_DROPDOWN_ARROW', 0);
</script>

<style>
.btn__loading .btn__content {
	opacity: 0;
}
.btn__loader {
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: center;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
}
.btn {
    -webkit-user-select:none;
    user-select:none;
    transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;
    transition-duration:.2s;
    transition-timing-function:cubic-bezier(.4,0,.2,1);
    animation:button-pop .25s ease-out;
}
@keyframes button-pop{
    0%{
        transform:scale(.95)
    }
    40%{
        transform:scale(1.02)
    }
    to{
        transform:scale(1)
    }
}
.btn:active:hover,.btn:active:focus{
    animation:none;
    transform:scale(var(--btn-focus-scale,.95))
}
</style>