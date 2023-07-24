<template>
    <div :class="variantClasses.wrapper">
        <div :class="[
            variantClasses.content, 
            variantClasses.contentSize, 
            variantClasses.contentTheme, 
            {
                [variantClasses.contentGrouped]: isGrouped,
                [variantClasses.contentHover]: props.hover
            }
        ]">
            <slot v-if="props.text || slots?.default" name="default">{{ props.text }}</slot>
            <div v-else-if="props.img">
                <img :src="props.img" alt="">
            </div>
            <div v-else :class="variantClasses.defaultPlaceholderWrapper">
                <svg :class="variantClasses.defaultPlaceholderIcon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </div>
            <span v-if="props.status!==null" :class="[
                variantClasses.statusDotSizePosition, 
                variantClasses.statusDotTheme,
                {
                    [variantClasses.statusDotOnline]: props.status==='online',
                    [variantClasses.statusDotBusy]: props.status==='busy',
                    [variantClasses.statusDotAway]: props.status==='away',
                    [variantClasses.statusDotOffline]: (props.status!=='online' || props.status!=='busy' || props.status==='away'),
                }
            ]"></span>
        </div>
    </div>
</template>

<script setup>
import { defineProps, useSlots, inject } from 'vue'
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
    text: {
        type: String,
        default: null
    },
    img: {
        type: String,
        default: null
    },
    status: {
        type: String,
        default: null
    },
    hover: {
        type: Boolean,
        default: false
    }
});

const variantClasses = useVariantClasses('Avatar', props.variant, props.classes);

const isGrouped = inject('IS_AVATAR_GROUPED', 0);
</script>