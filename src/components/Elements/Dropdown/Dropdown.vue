<template>
    <FloatingVueDropdown 
        ref="popoverRef" 
        :distance="props.distance" 
        :triggers="['click']" 
        theme="dropdown-menu" 
        :placement="props.placement" 
        auto-hide 
        @show="onShow" 
        @hide="onHide"
        :skidding="props.skidding"
        v-model:shown="isMenuShown"
        :class="variantClasses.wrapper"
        :popper-class="[variantClasses.size, variantClasses.theme]"
    >
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <div v-if="slot==='default'" class="inline-block relative" :data-slot="slot" :key="slot" v-bind="scope || {}" @click.prevent.stop="">
                <slot :name="slot" />
            </div>
            <template v-else>
                <transition name="dropdown" appear :key="slot" >
                    <div v-show="isMenuShown">
                        <slot :name="slot" v-bind="scope || {}" />
                    </div>
                </transition>
            </template>
        </template>
    </FloatingVueDropdown>
</template>

<script setup>
import { useVariantClasses } from '../../../composables/variantClasses'
import { Dropdown as FloatingVueDropdown } from 'floating-vue'
import { onBeforeUnmount, ref, useSlots, provide, computed, defineEmits } from 'vue'
import 'floating-vue/dist/style.css'

const emit = defineEmits(['hidden','shown'])

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
    placement: {
        type: String,
        default: 'bottom-start'
    },
    distance: {
        type: Number,
        default: 14
    },
    skidding: {
        type: Number,
        default: 0
    },
    arrow: {
        type: Boolean,
        default: false
    },
    itemSelector: {
        type: String,
        default: '.list--item:not(.disabled)',
    },
});

const popoverRef = ref(null);
const isMenuShown = ref(false);
const variantClasses = useVariantClasses('Dropdown', props.variant, props.classes);

const popoverKeydown = (e) => {
    const popover = popoverRef.value;

    if (!popover) {
        return;
    }

    if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();

        const items = [...popover.$refs.popperContent.$el.querySelectorAll(props.itemSelector)];

        if (!items.length) {
            return;
        }

        let index = items.indexOf(e.target);
        index = e.key === 'ArrowDown' ? index + 1 : index - 1;
        items[index]?.focus();
    }

    if ((e.key === 'Enter' || e.key === ' ') && e.target === popover.$refs.popperContent.$el) {
        e.preventDefault();
        popover.hide();
    }
};

const popoverClick = (e) => {
    const popover = popoverRef.value;

    if (!popover || e.target.classList.contains('v-popper') || e.target.classList.contains('disabled')) {
        return;
    }

    let target = e.target;
    let found = true;
    while (target) {
        if (target.getAttribute('data-slot') === 'default') {
            return;
        }
        if (target.classList.contains('list--item')) {
            found=false;
            break;
        }
        target = target.parentElement;
        if (target === null) {
            break;
        }
    }

    if (found) {
        return;
    }

    const items = [...popover.$refs.popperContent.$el.querySelectorAll(props.itemSelector)];
    if (!items.length) {
        return;
    }

    if(e.target.classList.contains('dropdown-stay')) {
        return;
    }

    e.preventDefault();
    popover.hide();
};

const onShow = () => {
    document.addEventListener('keydown', popoverKeydown);
    document.addEventListener('click', popoverClick);
    console.log('shown')
    emit('shown',true)
};

const onHide = () => {
    document.removeEventListener('keydown', popoverKeydown);
    document.removeEventListener('click', popoverClick);
    const popover = popoverRef.value;
    popover?.$refs.popper.$_targetNodes[0].focus();
    console.log('hidden')
    emit('hidden',true)
};

onBeforeUnmount(() => {
    document.removeEventListener('keydown', popoverKeydown);
    document.removeEventListener('click', popoverClick);
});

provide('IS_DROPDOWN', 1);
provide('IS_DROPDOWN_OPEN', isMenuShown);
provide('IS_DROPDOWN_ARROW', props.arrow);
</script> 

<style>
.v-popper--theme-dropdown-menu .v-popper__arrow-container {
    display: none;
}
.dropdown-enter-from, .dropdown-leave-to {
    z-index: 50;
    opacity: 0;
    transform: translateY(-5%);
}
.dropdown-enter-active, .dropdown-leave-active {
    transition: all .2s cubic-bezier(.25,.8,.25,1);
    z-index: 50;
}
.dropdown-enter-to, .dropdown-leave-from {
    z-index: 50;
    opacity: 1;
    transform: translateY(0);
}
</style>