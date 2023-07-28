<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-6">
		<div class="flex justify-center space-x-4">
            <InputText 
                v-model="dateInput" 
                label="Select Date" 
                type="date"
            />
            <InputText 
                v-model="timeInput" 
                label="Select Time" 
                type="time"
            />
        </div>
        <div class="flex justify-center space-x-4 mb-4">
            <InputText 
                v-model="dateInput" 
                label="Select Date (clearable)" 
                type="date"
                clearable
            />
            <InputText 
                v-model="timeInput" 
                label="Select Time (clearable)" 
                type="time"
                clearable
            />
        </div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { InputText } from '../../../../src/index'

const dateInput = ref(null);
const timeInput = ref(null);
</script>