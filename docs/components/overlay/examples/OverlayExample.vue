<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded relative">
        <Button @click="state.showOverlay=true">Show Overlay</Button>
        <Overlay :show="state.showOverlay" :persist="props.persist" @close="closeOverlay" :relative="props.relative" />
	</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import { Overlay, Button } from '../../../../src/index'
const props = defineProps({
    persist: {
        type: Boolean,
        default: false
    },
    relative: {
        type: Boolean,
        default: false
    },
});

const state = reactive({
    showOverlay: false
});

const closeOverlay = () => {
    state.showOverlay = false
}

</script>