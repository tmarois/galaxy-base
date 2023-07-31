<template>
    <div>
        <div class="flex w-full">
            <div v-if="props.thumbnails && props.thumbnailPosition === 'left'" class="p-4 space-y-2">
                <div v-for="(image, index) in images" :class="index === currentImageIndex ? 'opacity-100 ring-primary-500' : 'ring-transparent opacity-60 border-2 border-transparent'" :key="index" class="w-[60px] hover:opacity-100 cursor-pointer overflow-hidden rounded ring-2 ring-offset-2" @click.prevent="slideTo(index)">
                    <img :src="(image?.thumbnail) ? image.thumbnail : image.src" class="block w-full h-full" :alt="image.alt">
                </div>
            </div>
            <div class="grow relative">
                <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                    <div :class="index === currentImageIndex ? 'z-30' : 'z-0'"
                        v-for="(image, index) in images" :key="index" class="absolute inset-0 -translate-y-0">
                        <transition name="fade" mode="out-in" appear>
                            <img 
                                v-if="index === currentImageIndex" 
                                :src="image.src" 
                                class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" 
                                :alt="image.alt"
                            >
                        </transition>
                        <div v-if="props.imageAlt && image.alt" class="bg-gray-100 block absolute bottom-0 text-center w-full text-xs py-2">{{ image.alt }}</div>
                    </div>
                </div>
                <div v-if="props.indicators" class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    <button v-for="(image, index) in images" :key="index" type="button" :class="index === currentImageIndex ? 'bg-white' : 'bg-white/50'" class="w-3 h-3 rounded-full bg-white" aria-current="false" :aria-label="'Slide ' + index" @click.prevent="slideTo(index)"></button>
                </div>
                <button v-if="controls" @click.prevent="previousImage" type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
                    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="hidden">Previous</span>
                    </span>
                </button>
                <button v-if="controls" @click.prevent="nextImage" type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
                    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="hidden">Next</span>
                    </span>
                </button>
            </div>
        </div>
        <div v-if="props.thumbnails && props.thumbnailPosition === 'bottom'" class="mx-auto mt-4 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <div class="grid grid-cols-6 gap-4" aria-orientation="horizontal" role="tablist">
                <button v-for="(image, index) in images" :key="index" class="relative flex h-16 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none" aria-controls="tabs-1-panel-1" role="tab" type="button" @click.prevent="slideTo(index)">
                    <span class="sr-only">Angled view</span>
                    <span class="absolute inset-0 overflow-hidden rounded-md">
                        <img :src="(image?.thumbnail) ? image.thumbnail : image.src" :alt="image.alt" :class="index === currentImageIndex ? 'opacity-100' : 'opacity-70'" class="h-full w-full object-cover object-center hover:opacity-100">
                    </span>
                    <span :class="index === currentImageIndex ? 'ring-primary-500' : 'ring-transparent'" class="pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { useVariantClasses } from '../../../composables/variantClasses'

const props = defineProps({
    variant: {
        type: String,
        default: null
    },
    variantButton: {
        type: String,
        default: null
    },
    classes: {
        type: Object,
        default: () => {}
    },
    images: {
        type: Array,
        default: () => []
    },
    indicators: {
        type: Boolean,
        default: false,
    },
    controls: {
        type: Boolean,
        default: false,
    },
    slide: {
        type: Boolean,
        default: false,
    },
    slideInterval: {
        type: Number,
        default: 3000,
    },
    thumbnails: {
        type: Boolean,
        default: false,
    },
    thumbnailPosition: {
        type: String,
        default: 'left'
    },
    imageAlt: {
        type: Boolean,
        default: false,
    },
});

const variantClasses = useVariantClasses('Carousel', props.variant, props.classes);

const currentImageIndex = ref(0)
const direction = ref('')
const interval = ref()

const nextImage = () => {
    if (currentImageIndex.value !== props.images.length - 1) {
        currentImageIndex.value++
    } else {
        currentImageIndex.value = 0
    }
    direction.value = 'right'
    resetInterval()
}

const previousImage = () => {
    if (currentImageIndex.value !== 0) {
        currentImageIndex.value--
    } else {
        currentImageIndex.value = props.images.length -1
    }
    direction.value = 'left'
    resetInterval()
}

const slideTo = (index) => {
    nextTick(() => {
        currentImageIndex.value = index;
    });
    resetInterval()
}

const resetInterval = () => {
    clearInterval(interval.value)
    if (props.slide) {
        automatic()
    }
}

const automatic = () => {
    interval.value = setInterval(function() {
        nextImage()
    }, props.slideInterval)
}

onMounted(() => {
    if (props.slide) {
        automatic()
    }
});
</script>

<style scoped>
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
</style>