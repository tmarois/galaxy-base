<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-4">
		<Checkbox v-model="myValue" label="Option 1" radio trueValue="One" />
        <Checkbox v-model="myValue" label="Option 2" radio trueValue="Two" />
        <Checkbox v-model="myValue" label="Option 3" radio trueValue="Three" />
        <Checkbox v-model="myValue" label="Option 4 (disabled)" radio trueValue="Four" disabled />
		<Checkbox v-model="myValue" label="Option 5" radio trueValue="Five" />
		<div>Value: <span class="font-bold">{{ myValue }}</span></div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { Checkbox } from '../../../../src/index'

const myValue = ref('Two');
</script>