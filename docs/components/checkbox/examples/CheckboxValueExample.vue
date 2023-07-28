<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-4">

		<Checkbox v-model="myValue1" label="Do you agree?" trueValue="Yes" falseValue="No" />
		<div>Value: <span class="font-bold">{{ myValue1 }}</span></div>

        <Checkbox v-model="myValue2" label="With already value set" trueValue="Yes" falseValue="No" />
		<div>Value: <span class="font-bold">{{ myValue2 }}</span></div>

        <Checkbox v-model="myValue3" label="With reversed boolean (false/true)" :trueValue="false" :falseValue="true" />
		<div>Value: <span class="font-bold">{{ myValue3 }}</span></div>

	</div>
</template>
<script setup>
import { ref } from 'vue'
import { Checkbox } from '../../../../src/index'

const myValue1 = ref('No');
const myValue2 = ref('Yes');
const myValue3 = ref(true);
</script>