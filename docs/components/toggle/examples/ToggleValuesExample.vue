<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-4 divide-y divide-gray-200">
		<div class="py-4">
            <div class="pb-4 text-sm">(1) Yes/No values</div>
            <Toggle v-model="myValue1" label="Yes" falseLabel="No" trueValue="Yes" falseValue="No" />
            <div class="mt-4">Value: <span class="font-bold">{{ myValue1 }}</span></div>
        </div>
        <div class="py-4 pt-8">
            <div class="pb-4 text-sm">(2) Already set value</div>
            <Toggle v-model="myValue2" label="Yes" falseLabel="No" trueValue="Yes" falseValue="No" />
            <div class="mt-4">Value: <span class="font-bold">{{ myValue2 }}</span></div>
        </div>
        <div class="py-4 pt-8">
            <div class="pb-4 text-sm">(3) Reversed boolean values</div>
            <Toggle v-model="myValue3" :trueValue="false" :falseValue="true" />
            <div class="mt-4">Value: <span class="font-bold">{{ myValue3 }}</span></div>
        </div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { Toggle } from '../../../../src/index'

const myValue1 = ref('No');
const myValue2 = ref('Yes');
const myValue3 = ref(true);
</script>