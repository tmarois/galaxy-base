<template>
	<div class="w-full">
		<LoaderLinear :disabled="disabled" />
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