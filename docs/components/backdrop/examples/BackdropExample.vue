<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded relative">
        <Button @click="state.showBackdrop=true">Show Backdrop</Button>
        <Backdrop :show="state.showBackdrop" :persist="props.persist" @close="closeBackdrop" :relative="props.relative" />
	</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import { Backdrop, Button } from '../../../../src/index'
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
    showBackdrop: false
});

const closeBackdrop = () => {
    state.showBackdrop = false
}

</script>