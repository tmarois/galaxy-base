<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-6">
		<div class="flex justify-center space-x-4 mb-4">
            <InputArea 
                v-model="inputValue1" 
                label="Max Characters (25)" 
                :maxlength="25"
            />
        </div>
        <div class="flex justify-center space-x-4 mb-4">
            <InputArea 
                v-model="inputValue1" 
                label="With Character Count" 
                :maxlength="25"
                characterCounter
            />
        </div>
        <div class="flex justify-center space-x-4 mb-4">
            <InputArea 
                v-model="inputValue1" 
                label="With Custom Character Count Slot" 
                :maxlength="25"
                characterCounter
            >
                <template v-slot:counter="{ valueLength }">
                    {{ valueLength }} Characters Used
                </template>
            </InputArea>
        </div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { InputArea } from '../../../../src/index'

const inputValue1 = ref(null);
</script>