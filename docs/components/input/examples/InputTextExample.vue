<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-6">
		<div class="flex justify-center space-x-4 mb-4">
            <InputText 
                v-model="inputValue1" 
                label="Full Name (required)" 
                tooltip="This is required"
                required
            />
            <InputText 
                v-model="inputValue1" 
                label="With placeholder" 
                placeholder="Full Name" 
            />
            <InputText 
                v-model="inputValue1" 
                label="With clearable" 
                clearable
            />
        </div>
        <div class="flex justify-center space-x-4 mb-4">
            <InputText 
                v-model="inputValue1" 
                label="With icon" 
                tooltip="This is required"
                required
            >
                <template v-slot:icon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </template>
            </InputText>
            <InputText 
                v-model="inputValue1" 
                label="With icon with placeholder" 
                placeholder="Full Name" 
            >
                <template v-slot:icon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </template>
            </InputText>
            <InputText 
                v-model="inputValue1" 
                label="With icon clearable" 
                clearable
            >
                <template v-slot:icon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </template>
            </InputText>
        </div>
        <div class="flex justify-center space-x-4 mb-4">
            <InputText 
                v-model="inputValue1" 
                label="Readonly" 
                tooltip="This is required"
                readonly
            />
            <InputText 
                v-model="inputValue1" 
                label="Readonly placeholder" 
                placeholder="Full Name" 
                readonly
            />
            <InputText 
                v-model="inputValue1" 
                label="Readonly clearable" 
                clearable
                readonly
            />
        </div>
        <div class="flex justify-center space-x-4 mb-4">
            <InputText 
                v-model="inputValue1" 
                label="Disabled" 
                tooltip="This is required"
                disabled
            />
            <InputText 
                v-model="inputValue1" 
                label="Disabled placeholder" 
                placeholder="Full Name" 
                disabled
            />
            <InputText 
                v-model="inputValue1" 
                label="Disabled clearable" 
                clearable
                disabled
            />
        </div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { InputText } from '../../../../src/index'

const inputValue1 = ref(null);
</script>