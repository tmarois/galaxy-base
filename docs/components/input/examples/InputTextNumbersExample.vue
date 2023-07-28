<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-6">
		<div class="flex justify-center space-x-4 mb-4">
            <InputText 
                v-model="inputValue1" 
                label="Your Age" 
                type="number"
            />
            <InputText 
                v-model="inputValue1" 
                label="With placeholder" 
                placeholder="Your Age" 
                type="number"
            />
            <InputText 
                v-model="inputValue1" 
                label="With clearable" 
                clearable
                type="number"
            />
        </div>
        <div class="flex justify-center space-x-4 mb-4">
            <InputText 
                v-model="inputValue2" 
                label="Min: 5" 
                type="number"
                :min="5" 
            />
            <InputText 
                v-model="inputValue2" 
                label="Max: 100" 
                type="number"
                :max="100"
            />
            <InputText 
                v-model="inputValue2" 
                label="Min: 5 and Max: 100" 
                type="number"
                :min="5" :max="100"
            />
        </div>
        <div class="flex justify-center space-x-4 mb-4">
            <InputText 
                v-model="inputValue3" 
                label="Decimals: 2" 
                type="number"
                :decimals="2"
            />
            <InputText 
                v-model="inputValue3" 
                label="Decimals: 4 and Max: 100" 
                type="number"
                :max="100"
                :decimals="4"
            />
            <InputText 
                v-model="inputValue3" 
                label="Decimals: 4, Min: 5, Max: 100" 
                type="number"
                :min="5" :max="100"
                :decimals="4"
            />
        </div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { InputText } from '../../../../src/index'

const inputValue1 = ref(null);
const inputValue2 = ref(0);
const inputValue3 = ref(6.95);
</script>