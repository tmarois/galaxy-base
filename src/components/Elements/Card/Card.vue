<template>
    <div :class="variantClasses.wrapper">
        <div v-if="props.detachedHeader && (props.title || slots.header || slots.actions)" :class="variantClasses.detachedHeaderWrapper">
            <div :class="variantClasses.headerTitleWrapper">
                <template v-if="!slots.header">
                    <h1 :class="variantClasses.headerTitle">{{ props.title }}</h1>
                    <div :class="variantClasses.headerSubtitle">{{ props.subtitle  }}</div>
                </template>
                <slot v-else name="header" />
            </div>
            <div v-if="slots.actions" :class="variantClasses.headerActions">
                <slot name="actions" />
            </div>
        </div>
        <div :class="[variantClasses.contentWrapper, variantClasses.contentTheme]">
            <div v-if="props.disabled" :class="variantClasses.contentDisabled"></div>
            <div 
                v-if="!props.detachedHeader && (props.title || slots.header || slots.actions)" 
                :class="[variantClasses.headerWrapper, variantClasses.headerTheme, { [variantClasses.padding] : !props.removeHeaderPadding && !props.removePadding }]"
            >
                <div :class="variantClasses.headerTitleWrapper">
                    <template v-if="!slots.header">
                        <h1 :class="variantClasses.headerTitle">{{ props.title }}</h1>
                        <div :class="variantClasses.headerSubtitle">{{ props.subtitle  }}</div>
                    </template>
                    <slot v-else name="header" />
                </div>
                <div v-if="slots.actions" :class="variantClasses.headerActions">
                    <slot name="actions" />
                </div>
            </div>
            <LoaderLinear v-if="props.loading" :classes="{base: 'inline-block w-full overflow-hidden relative -mt-1 z-10'}" :variant="variantLoader" />
            <div :class="[variantClasses.body, { [variantClasses.padding] : !props.removeBodyPadding && !props.removePadding }]">
                <slot />
            </div>
            <div v-if="slots.footer" :class="[variantClasses.footerTheme, { [variantClasses.padding] : !props.removeFooterPadding && !props.removePadding }]">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, useSlots } from 'vue'
import { useVariantClasses } from '../../../composables/variantClasses'
import LoaderLinear from '../Loader/LoaderLinear.vue'

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
    title: {
        type: String,
        default: null
    },
    subtitle: {
        type: String,
        default: null
    },
    detachedHeader: {
        type: Boolean,
        default: false
    },
    removePadding: {
        type: Boolean,
        default: false
    },
    removeHeaderPadding: {
        type: Boolean,
        default: false
    },
    removeBodyPadding: {
        type: Boolean,
        default: false
    },
    removeFooterPadding: {
        type: Boolean,
        default: false
    }
});

const variantClasses = useVariantClasses('Card', props.variant, props.classes);
</script>