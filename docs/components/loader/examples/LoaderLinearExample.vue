<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded">
		<LoaderLinear :disabled="props.disabled" />
	</div>
</template>
<script setup>
import { defineProps } from 'vue'
import { LoaderLinear } from '../../../../src/index'

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
});
</script>