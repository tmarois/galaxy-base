<template>
    <div class="expandable-wrapper relative" :class="{
        [variantClasses.panelWrapperNotGrouped]: !isGroup,
        [variantClasses.panelWrapperGrouped]: isGroup
    }">
        <div 
            :class="{
                'expandable flex items-center justify-start': true,
                [variantClasses.panel] : true,
                [variantClasses.panelTheme] : true,
                [variantClasses.panelActive]: isOpen,
                // 'rounded': !isGroup,
                // 'rounded-b-none': isOpen,
            }" 
            @click="triggerOpen"
        >
            <div v-if="arrowPosition==='start' && !props.arrowHide" :class="['mr-2',variantClasses.panelArrowWrapper]">
                <slot name="arrow-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="[variantClasses.panelArrowSize, { 'rotate-0': !isOpen, 'rotate-90': isOpen }]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </slot>
            </div>
            <div class="grow" :class="variantClasses.panelTitle">
                <slot name="title">{{ props.title }}</slot>
            </div>
            <div v-if="arrowPosition==='end' && !props.arrowHide" :class="variantClasses.panelArrowWrapper">
                <slot name="arrow-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="[variantClasses.panelArrowSize, { 'rotate-0': !isOpen, 'rotate-180': isOpen }]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </slot>
            </div>
        </div>
        <transition name="slide" 
            @before-enter="beforeEnter" 
            @enter="enter" 
            @before-leave="beforeLeave" 
            @leave="leave"
        >
            <div v-show="isOpen" ref="content" class="overflow-hidden" :class="variantClasses.panelContent">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<style scoped>
.slide-enter-active, .slide-leave-active {
    transition: height 0.1s ease;
}
.slide-enter, .slide-leave-to {
    height: 0;
}
.rotate-180 {
    transform: rotate(180deg);
    transition: transform 0.2s ease-in-out;
}
.rotate-90 {
    transform: rotate(90deg);
    transition: transform 0.2s ease-in-out;
}
.rotate-0 {
    transform: rotate(0deg);
    transition: transform 0.2s ease-in-out;
}
</style>
<script setup>
import { defineProps, inject, ref, watch } from 'vue'
import { useVariantClasses } from '../../../composables/variantClasses'
import { uniqueId } from '../../../utils/id'

const props = defineProps({
    variant: {
        type: String,
        default: null
    },
    classes: {
        type: Object,
        default: () => {}
    },
    title: {
        type: String,
        default: null
    },
    arrowHide: {
        type: Boolean,
        default: false,
    },
    arrowPosition: {
        type: String,
        default: 'end',
        validator: function (value) {
            return ['start', 'end'].includes(value);
        },
    }
});

const id = uniqueId()
const content = ref(null);
const isOpen = ref(false)
const variantClasses = useVariantClasses('Expandable', props.variant, props.classes);

const isGroup = inject('IS_EXPANDABLE_GROUP', 0)
const isAlwaysOpen = inject('IS_ALWAYS_OPEN', 0)
const sharedActiveExpand = inject('EXPAND_ACTIVE', null)

if (isGroup) {
    watch(sharedActiveExpand, (newValue, oldValue) => {
        if (!isAlwaysOpen && newValue !== id) {
            isOpen.value = false
        }
    });
}

const triggerOpen = () => {
    isOpen.value = !isOpen.value
    if (isGroup && isOpen.value===true) {
        sharedActiveExpand.value = id
    }
}
const beforeEnter = (el) => {
    el.style.height = '0';
};
const enter = (el) => {
    el.style.height = el.scrollHeight + 'px';
};
const beforeLeave = (el) => {
    el.style.height = el.scrollHeight + 'px';
};
const leave = (el) => {
    el.style.height = '0';
};

</script>