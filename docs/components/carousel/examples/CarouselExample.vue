<template>
	<Carousel 
        :images="images"
        :controls="!props.slide"
        :indicators="props.indicators"
        :slide="props.slide"
        :thumbnails="props.thumbnails"
        :imageAlt="props.imageAlt"
        :thumbnailPosition="props.thumbnailPosition"
    />
</template>
<script setup>
import { Carousel } from '../../../../src/index'

const props = defineProps({
    slide: {
        type: Boolean,
        default: false
    },
    thumbnails: {
        type: Boolean,
        default: false
    },
    imageAlt: {
        type: Boolean,
        default: false
    },
    indicators: {
        type: Boolean,
        default: false
    },
    thumbnailPosition: {
        type: String,
        default: 'left'
    }
});

const images = [
    {
        alt: 'Technology watch',
        src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
        alt: 'A shoe',
        src: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
        alt: 'At the beach',
        src: 'https://images.unsplash.com/photo-1625126334963-67846ed79c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
]
</script>