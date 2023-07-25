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
        :class="variantClasses.wrapper"
        :popper-class="[variantClasses.size, variantClasses.theme]"
    >
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </FloatingVueDropdown>
</template>

<script setup>
import { useVariantClasses } from '../../../composables/variantClasses'
import { Dropdown as FloatingVueDropdown } from 'floating-vue'
import { onBeforeUnmount, ref } from 'vue'
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
        default: 'bottom-start'
    },
    distance: {
        type: Number,
        default: 14
    },
    itemSelector: {
        type: String,
        default: 'li > a:not(.disabled)',
    },
});

const popoverRef = ref(null);
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

    if (!popover || e.target.classList.contains('dropdown-trigger') || e.target.classList.contains('disabled')) {
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
};

const onHide = () => {
    document.removeEventListener('keydown', popoverKeydown);
    document.removeEventListener('click', popoverClick);
    const popover = popoverRef.value;
    popover?.$refs.popper.$_targetNodes[0].focus();
};

onBeforeUnmount(() => {
    document.removeEventListener('keydown', popoverKeydown);
    document.removeEventListener('click', popoverClick);
});
</script>

<style>
.v-popper--theme-dropdown-menu .v-popper__arrow-container {
    display: none;
}
</style>
