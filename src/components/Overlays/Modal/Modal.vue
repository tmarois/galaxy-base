<template>
    <div v-show="state.localShowing" 
        :class="{
            [variantClasses.base]: true,
            'overflow-y-scroll': props.scroll,
            'p-4': (props.type === 'full')
    }">
		<div :class="{
            [variantClasses.wrapper]: true,
            'min-h-full': props.type !== 'full',
            'h-full': props.type === 'full',
        }">
			<transition name="pop" appear>
				<div
					v-if="props.show"
                    :data-modal-id="state.id"
					:class="{
                        [variantClasses.content]: true,
                        [variantClasses.contentTheme]: true,
                        containerClasses: true,
                        'h-screen': props.type === 'full'
                    }"
					:style="`${props.maxWidth ? `max-width:${props.maxWidth}px;` : ''} min-width: 300px; ${props.scroll ? `margin-top: 1em; margin-bottom: 1em;` : `max-height: calc(100vh - ${props.type === 'full' ? '2em' : '0em'});`} ${widthCalculation} ${offsetCalculation};`"
				
				>
                    <div class="h-full w-full">
                        <slot />
                    </div>
                </div>
            </transition>
        </div>
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
import { defineProps, defineEmits, useSlots, reactive, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useVariantClasses } from '../../../composables/variantClasses'
import { uniqueId } from '../../../utils/id'
import Backdrop from '../../Overlays/Backdrop/Backdrop.vue'
const emit = defineEmits(['close', 'end']);
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
    type: {
        type: String,
        default: 'center'
    },
    show: {
        type: Boolean,
        default: false
    },
    scroll: {
        type: Boolean,
        default: false
    },
    scrolling: {
        type: Boolean,
        default: false
    },
    maxWidth: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: null
    },
    persist: {
        type: Boolean,
        default: false
    },
    relative: {
        type: Boolean,
        default: false
    },
    offsetDirection: {
        type: String,
        default: undefined
    },
    offset: {
        type: Number,
        default: 0
    },
    offsetDiv: {
        type: String,
        default: null
    },
});

const variantClasses = useVariantClasses('Modal', props.variant, props.classes);

const state = reactive({
    relativeOffsetPx: null,
    localShowing: false,
    id: uniqueId()
})

const close = () => {
    emit('close');
}

const updateDivOffset = () => {
    state.relativeOffsetPx = null
    if (props.offsetDiv) {
        let mainDivOffset = 0;
        let mainDiv = document.getElementById(props.offsetDiv);
        if (mainDiv) mainDivOffset = mainDiv.offsetWidth;
        let appDiv  = document.getElementById('app');
        if (appDiv) {
            let offset  = +(appDiv.offsetWidth - mainDivOffset);
            if (offset) state.relativeOffsetPx = offset;
        }
    }
}

const widthCalculation = computed(() => {
    if(props.offset || state.relativeOffsetPx) {
        return `width: calc(100% - 2em ${props.offset || state.relativeOffsetPx ? `- ${props.offset || state.relativeOffsetPx}px` : ''});`;
    } else if(props.centerOverflow || props.type === 'full') {
        return `width: calc(100%);`;
    }
    
    return 'width: auto;';
});

const offsetCalculation = computed(() => {
    if (state.relativeOffsetPx) {
        if(props.type === 'center') return `left: calc(${state.relativeOffsetPx}px + 1em); right: 1em;`;
        else return 'right: 1em;';
    } else if(props.offsetDirection && props.offset > 0) {
        return `${props.offsetDirection}: ${props.offset}px; ${oppositeOf(props.offsetDirection)}: 0;`;
    }
});

const oppositeOf = (v) => {
    if(v === 'right') return 'left';
    return 'right';
}

const containerClasses = computed(() => {
    let c = [];
    switch(props.type) {
        case 'center': 
            c = c.concat([
                'inset-0',
                'max-w-xl',
                'mx-auto',
                'flex',
                'items-center',
                'justify-center', 
            ]);
            break;
        case 'full':
            c = c.concat([
                'inset-0',
                'h-screen',
                'flex',
                'items-center',
                'justify-center', 
            ]);
            break; 
    }

    if (props.relative) c = c.concat(['absolute']);
    else if(!props.relative && props.scroll) c = c.concat(['relative']);
    else c = c.concat(['fixed']);

    if (!props.scrolling) c = c.concat(['overflow-hidden']);

    return c;
});

const removeBodyOverflowHidden = () => {
    let elements = document.querySelectorAll('.backdrop');
    if (elements.length === 1) {
        document.body.style.overflow = 'auto';
    }
    // this will need some rework
    // elements.forEach((element) => {
    //     if (element.getAttribute('data-backdrop-id') !== state.id || elements.length === 1) {
    //         document.body.style.overflow = 'auto';
    //     }
    // });
}

watch(() => props.show, (value) => {
    if (value === true) {
        state.localShowing = true
        document.body.style.overflow = 'hidden';
    }
    else {
        removeBodyOverflowHidden()
        setTimeout(() => {
            state.localShowing = false
            emit('end');
        },300)
    }
})

onMounted(() => {
    updateDivOffset()
});

onBeforeUnmount(() => {
    removeBodyOverflowHidden()
});

</script>

<style scoped>
.pop-enter-from, .pop-leave-to {
  z-index: 50;
  transform: scale(0.30);
  opacity: 0;
  transform-origin: center center;
}
.pop-enter-active, .pop-leave-active, .slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
  transition: all .2s cubic-bezier(.25,.8,.25,1);
  z-index: 50;
}
.pop-enter-to, .pop-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>