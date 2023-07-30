<template>
	<div :class="[variantClasses.base]">
		<transition :name="`slide-${position}`" appear>
			<div
                v-if="state.localShowing"
				:class="[containerClasses, variantClasses.content, variantClasses.contentTheme, 'p-4']"
				:style="`${props.maxWidth ? `max-width: ${props.maxWidth}px;` : ''} min-width: 300px; height: 100%;`"
			>
				<slot />
			</div>
		</transition>
		<Backdrop 
            :show="props.show"
            :persist="props.persist"
            :relative="props.relative"
            :variant="props.variantBackdrop"
            :id="state.id"
            @close="close"
        />
	</div>
</template>

<script setup>
import { defineProps, defineEmits, useSlots, reactive, computed, watch, onBeforeUnmount } from 'vue'
import { useVariantClasses } from '../../../composables/variantClasses'
import { uniqueId } from '../../../utils/id'
import Backdrop from '../../Overlays/Backdrop/Backdrop.vue'
const emit = defineEmits(['close']);
const slots = useSlots()
const props = defineProps({
    variant: {
        type: String,
        default: null
    },
    variantBackdrop: {
        type: String,
        default: null
    },
    classes: {
        type: Object,
        default: () => {}
    },
    position: {
        type: String,
        default: 'right'
    },
    show: {
        type: Boolean,
        default: false
    },
    scrolling: {
        type: Boolean,
        default: false
    },
    persist: {
        type: Boolean,
        default: false
    },
    relative: {
        type: Boolean,
        default: false
    },
    edges: {
        type: Boolean,
        default: false
    }
});

const variantClasses = useVariantClasses('Drawer', props.variant, props.classes);

const state = reactive({
    localShowing: false,
    id: uniqueId()
})

const close = () => {
    emit('close');
}

const containerClasses = computed(() => {
    let c = [
        'block',
        'inset-y-0',
        'w-full',
        'sm:max-w-xl'
    ];
    
    switch(props.position) {
        case 'right': 
            c = c.concat(['right-0']);
            break;
        case 'left': 
            c = c.concat(['left-0']);
            break;
    }

    if (props.scrolling) c = c.concat(['overflow-y-auto']);
    else c = c.concat(['overflow-y-hidden']);
    return c;
});

const removeBodyOverflowHidden = () => {
    let elements = document.querySelectorAll('.backdrop');
    if (elements.length === 1) {
        document.body.style.overflow = 'auto';
    }
}

watch(() => props.show, (value) => {
    if (value === true) {
        state.localShowing = true
        document.body.style.overflow = 'hidden';
    }
    else {
        removeBodyOverflowHidden()
        state.localShowing = false
    }
})

onBeforeUnmount(() => {
    removeBodyOverflowHidden()
});

</script>

<style scoped>
.slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active  {
	transition: transform .2s cubic-bezier(.25,.8,.25,1);
}
.slide-right-enter-from, .slide-right-leave-to {
	transform: translateX(100%);
}
.slide-left-enter-from, .slide-left-leave-to {
	transform: translateX(-100%);
}
.slide-right-enter-to, .slide-right-leave-from {
	transform: translateX(0);
}
.slide-left-enter-to, .slide-left-leave-from {
	transform: translateX(0);
}
</style>