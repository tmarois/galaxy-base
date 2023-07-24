<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded">
		<LoaderProgress 
            :progress="props.progress" 
            :showProgress="showProgress" 
            :label="props.label"
        />
	</div>
</template>
<script setup>
import { defineProps } from 'vue'
import { LoaderProgress } from '../../../../src/index'

const props = defineProps({
    progress: {
        type: Number,
        default: 0
    },
    showProgress: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: null
    }
});
</script>