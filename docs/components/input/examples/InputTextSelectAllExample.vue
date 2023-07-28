<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-6">
        <div class="flex justify-center space-x-4">
            <InputText 
                v-model="inputValue1" 
                label="Select All on focus" 
                selectAll
            />
        </div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { InputText } from '../../../../src/index'

const inputValue1 = ref('this is my value');
</script>