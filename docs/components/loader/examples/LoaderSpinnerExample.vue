<template>
	<div class="flex space-x-2">
		<LoaderSpinner />
        <LoaderSpinner disabled />
	</div>
</template>
<script setup>
import { defineProps } from 'vue'
import { LoaderSpinner } from '../../../../src/index'
</script>