<template>
    <div class="relative">
        <template v-if="props.preload === true">
            <div v-show="activeTab === props.name" :class="variantClasses.tabContent">
                <slot />
            </div>
        </template>
        <template v-else-if="props.preload === false">
            <div v-if="activeTab === props.name" :class="variantClasses.tabContent">
                <slot />
            </div>
        </template>
    </div>
</template>

<script setup>
import { defineProps, useSlots, computed, inject, ref } from 'vue'
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
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    preload: {
        type: Boolean,
        default: true,
    },
});

const isTabVariant = inject('IS_TABS_VARIANT', null);
const isTabs = inject('IS_TABS', 0);
if(!isTabs) {
  console.warn('[Galaxy Vue] <Tab> should only be used within <Tabs>')
}

const tabVariant = ref(props.variant);
if (isTabs && isTabVariant && !props.variant) {
    tabVariant.value = isTabVariant;
}

const variantClasses = useVariantClasses('Tabs', tabVariant.value, props.classes);

const activeTab = inject('TAB_ACTIVE', null);
</script>
  
<script>
export default {
    __GALAXY_TAB__: true
}
</script>