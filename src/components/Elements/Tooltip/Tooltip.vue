<template>
    <FloatingVueTooltip
        :triggers="['hover']" 
        theme="tooltip" 
        :placement="props.placement" 
        auto-hide 
        :class="variantClasses.wrapper"
        :popper-class="[variantClasses.theme]"
    >
        <slot />
        <template #popper>
            <slot name="content"></slot>
        </template>
    </FloatingVueTooltip>
</template>

<script setup>
import { useVariantClasses } from '../../../composables/variantClasses'
import { Tooltip as FloatingVueTooltip } from 'floating-vue'
import 'floating-vue/dist/style.css'

const props = defineProps({
    variant: {
        type: String,
        default: null
    },
    classes: {
        type: Object,
        default: () => {}
    },
    placement: {
        type: String,
        default: 'top'
    },
    distance: {
        type: Number,
        default: 6
    },
});

const variantClasses = useVariantClasses('Tooltip', props.variant, props.classes);
</script>


<style>
/* .v-popper--theme-tooltip-dark .v-popper__wrapper .v-popper__inner {
  background: rgba(0, 0, 0);
  color: #fff;
  border-radius: 6px;
  padding: 7px 12px 6px;
}

.v-popper--theme-tooltip-dark .v-popper__arrow-inner {
  visibility: hidden;
}

.v-popper--theme-tooltip-dark .v-popper__arrow-outer {
  border-color: #000c;
}

@media (prefers-color-scheme: dark) {
  .v-popper--theme-tooltip-dark .v-popper__wrapper .v-popper__inner {
    background: rgb(55 65 81);
  }

  .v-popper--theme-tooltip-dark .v-popper__arrow-outer {
    border-color: rgb(55 65 81);
  }
}

.v-popper--theme-tooltip-light .v-popper__wrapper .v-popper__inner {
  background: #fff;
  color: black;
  padding: 7px 12px 6px;
  border-radius: 6px;
  border: 1px solid #eeeeee;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25);
}

.v-popper--theme-tooltip-light .v-popper__arrow-inner {
  visibility: visible;
  border-color: #fff;
}

.v-popper--theme-tooltip-light .v-popper__arrow-outer {
  border-color: #ddd;
}
.v-popper__popper[data-popper-placement^='bottom'] .v-popper__inner {
  margin-top: -1px;
}
.v-popper__popper[data-popper-placement^='right'] .v-popper__inner {
  margin-left: -1px;
} */
</style>