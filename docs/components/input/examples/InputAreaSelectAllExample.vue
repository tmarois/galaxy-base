<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-6">
        <div class="flex justify-center space-x-4">
            <InputArea 
                v-model="inputValue1" 
                label="Select All on focus (custom height)" 
                selectAll
                customStyle="height:200px"
            />
        </div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { InputArea } from '../../../../src/index'

const inputValue1 = ref("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
</script>