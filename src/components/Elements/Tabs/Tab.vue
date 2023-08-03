<template>
    <div class="relative overflow-hidden">
        <transition :name="props.transition" mode="out-in">
            <div :key="activeTab">
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
        </transition>
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
    transition: {
        type: String,
        default: 'fade'
    }
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

<style scoped>
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>