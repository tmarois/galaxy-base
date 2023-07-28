<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-4 divide-y divide-gray-200">
		<div class="py-4"><Toggle v-model="myValue" :inset="inset" /><div class="mt-6">Value: <span class="font-bold">{{ myValue }}</span></div></div>
		<div class="py-4 pt-8"><Toggle v-model="myValue" :inset="inset" disabled label="Disabled" /></div>
		<div class="py-4 pt-8"><Toggle v-model="myValue" label="Turn on active mode" :inset="inset" required tooltip="This is active mode" /></div>
		<div class="py-4 pt-8"><Toggle v-model="myValue" label="Turn on active mode" falseLabel="Turn off active mode" :inset="inset" /></div>
		<div class="py-4 pt-8"><Toggle v-model="myValue2" label="On (by default)" falseLabel="Off" :inset="inset" /></div>
	</div>
</template>
<script setup>
import { ref, defineProps } from 'vue'
import { Toggle } from '../../../../src/index'

const props = defineProps({
    inset: {
        type: Boolean,
        default: false
    }
});

const myValue = ref(false);
const myValue2 = ref(true);
</script>