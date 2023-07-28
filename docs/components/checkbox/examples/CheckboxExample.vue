<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-4">
		<Checkbox v-model="myValue" label="Do you agree?" />
		<Checkbox v-model="myValue" label="This is required" required />
		<Checkbox v-model="myValue" label="Something not understood" required tooltip="This is my tooltip" />
		<Checkbox v-model="myValue" label="This is disabled" disabled />
		<Checkbox v-model="myValue">
			<template #default="{ isChecked, props }">
				<div class="text-black">My Custom Slot Label ({{ isChecked }})</div>
			</template>
		</Checkbox>
		<Checkbox v-model="myValue" />
		<div>Value: <span class="font-bold">{{ myValue }}</span></div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { Checkbox } from '../../../../src/index'

const myValue = ref(false);
</script>