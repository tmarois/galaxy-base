<template>
	<div class="vp-raw p-8 bg-white border-2 border-gray-200 rounded">
        <div class="max-w-6xl">
            <Gallery :images="images" :animation="props.animation" />
        </div>
	</div>
</template>

<script setup>
import { Gallery } from '../../../../src/index'

const props = defineProps({
    animation: {
        type: Boolean,
        default: true
    },
});

const images = [
    '/assets/logos/spotify_logo_with_text.svg',
    '/assets/logos/t-mobile_logo.svg',
    '/assets/logos/logitech.svg',
    '/assets/logos/ibm.svg',
    '/assets/logos/booking_com.svg',
    '/assets/logos/netflix.svg'
];
</script>