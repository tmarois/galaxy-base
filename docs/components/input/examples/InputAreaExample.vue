<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-6">
		<div class="flex justify-center space-x-4 mb-4">
            <InputArea 
                v-model="inputValue1" 
                label="Write your comments" 
            />
            <InputArea 
                v-model="inputValue1" 
                label="With a placeholder" 
                tooltip="This is required"
                required
                placeholder="Write your comments"
            />
        </div>
        <div class="flex justify-center space-x-4 mb-4">
            <InputArea 
                v-model="inputValue1" 
                label="With readonly" 
                readonly
            />
            <InputArea 
                v-model="inputValue1" 
                label="With disabled" 
                placeholder="Write your comments"
                disabled
            />
        </div>
        <div class="flex justify-center space-x-4 mb-4">
            <InputArea 
                v-model="inputValue1" 
                label="With clearable" 
                clearable
            />
        </div>
        <div class="flex justify-center space-x-4 mb-4">
            <InputArea 
                v-model="inputValue1" 
                label="With noresize" 
                noresize
            />
        </div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { InputArea } from '../../../../src/index'

const inputValue1 = ref(null);
</script>