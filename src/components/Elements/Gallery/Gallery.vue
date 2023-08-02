<template>
    <div :class="{
        'gallery': true,
        [variantClasses.wrapper]: true,
        'gallery-fade-edges': props.edges
    }">
        <div :class="{
            'gallery-strip': true,
            'inline-block': true,
            [variantClasses.itemList]: true,
            'gallery-strip-animation': props.animation
        }">
            <template v-if="props.images.length>0">
                <div v-for="image,i in props.images" :class="['gallery-item','inline-block', variantClasses.item]" :key="i">
                    <img :class="variantClasses.image" :src="image">
                </div>
                <template v-if="props.animation && props.repeat > 1">
                    <template v-for="(_, index) in Array.from({ length: props.repeat })" :key="index">
                        <div v-for="image,i in props.images" :class="['gallery-item','inline-block', variantClasses.item]" :key="i">
                            <img :class="variantClasses.image" :src="image">
                        </div>
                    </template>
                </template>
            </template>
            <template v-else>
                <div v-for="(_, slot) in $slots" :class="['gallery-item','inline-block', variantClasses.item]" :data-slot="slot" :key="slot" v-bind="scope || {}">
                    <slot :name="slot" />
                </div>
                <template v-if="props.animation && props.repeat > 1">
                    <template v-for="(_, index) in Array.from({ length: props.repeat })" :key="index">
                        <div v-for="(_, slot) in $slots" :class="['gallery-item','inline-block', variantClasses.item]" :data-slot="slot" :key="slot" v-bind="scope || {}">
                            <slot :name="slot" />
                        </div>
                    </template>
                </template>
            </template>
        </div>
    </div>
</template>

<script setup>
import { defineProps, useSlots } from 'vue'
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
    edges: {
        type: Boolean,
        default: true
    },
    animation: {
        type: Boolean,
        default: true
    },
    repeat: {
        type: Number,
        default: 2
    },
    images: {
        type: Array,
        default: () => []
    },
});

const variantClasses = useVariantClasses('Gallery', props.variant, props.classes);
</script>

<style scoped>
.gallery-fade-edges::before, .gallery-fade-edges::after {
    content: "";
    position: absolute;
    width: 10%;
    height: 100%;
    z-index: 2;
}
.gallery-fade-edges::before {
    left: 0;
    background: linear-gradient(to right, white, transparent);
}
.gallery-fade-edges::after {
    right: 0;
    background: linear-gradient(to left, white, transparent);
}
.gallery-strip-animation {
    animation: galleryScroll 40s linear infinite;
}
@keyframes galleryScroll {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-50%);
    }
}
</style>