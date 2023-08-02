<template>
	<div class="vp-raw p-8 bg-white border-2 border-gray-200 rounded">
        <div class="max-w-6xl">
            <Gallery>
                <template #img1>
                    <img class="w-full h-full" src="/assets/logos/logitech.svg">
                </template>
                <template #img2>
                    <img class="w-full h-full" src="/assets/logos/booking_com.svg">
                </template>
                <template #img3>
                    <img class="w-full h-full" src="/assets/logos/ibm.svg">
                </template>
                <template #img4>
                    <img class="w-full h-full" src="/assets/logos/netflix.svg">
                </template>
                <template #img5>
                    <img class="w-full h-full" src="/assets/logos/t-mobile_logo.svg">
                </template>
                <template #img6>
                    <img class="w-full h-full" src="/assets/logos/spotify_logo_with_text.svg">
                </template>
            </Gallery>
        </div>
	</div>
</template>

<script setup>
import { Gallery } from '../../../../src/index'
</script>