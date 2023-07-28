<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-6">
        <div class="flex justify-center space-x-4">
            <InputText 
                v-model="inputValue1" 
                label="Format US Phone Number" 
                :formatter="formatPhoneNumber" 
                placeholder="(000) 000-0000"
            />
            <InputText 
                v-model="inputValue2" 
                label="On Load Format" 
                :formatter="formatPhoneNumber" 
                placeholder="(000) 000-0000"
            />
        </div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { InputText } from '../../../../src/index'
import { formatPhoneNumber } from '../../../../src/utils/format'

const inputValue1 = ref(null);
const inputValue2 = ref('7049817541');
</script>