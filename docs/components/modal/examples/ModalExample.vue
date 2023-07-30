<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded relative">
        <Button @click="state.show=true">Show Modal</Button>
        <Modal 
            :show="state.show" 
            :persist="props.persist" 
            :relative="props.relative" 
            :type="props.type" 
            @close="close" 
        >
            <div class="h-full w-full p-8">
                <div class="h-full w-full flex items-center justify-center">
                    <div v-if="props.type === 'full'">
                        <div>This modal is <span class="font-bold">Full Screen</span></div>
                        <div class="flex justify-center mt-6">
                            <Button outlined @click="close">Close Modal</Button>
                        </div>
                    </div>
                    <div v-else-if="props.type === 'center' && props.persist === true" class="text-center">
                        <div>This modal is <span class="font-bold">Persist</span></div>
                        <div class="text-gray-500 text-sm">*Backdrop click disabled</div>
                        <div class="flex justify-center mt-6">
                            <Button outlined @click="close">Close Modal</Button>
                        </div>
                    </div>
                    <div v-else class="text-center">
                        <div>This modal is <span class="font-bold">Default State</span></div>
                        <div class="flex justify-center mt-6">
                            <Button outlined @click="close">Close Modal</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
	</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import { Modal, Button } from '../../../../src/index'
const props = defineProps({
    persist: {
        type: Boolean,
        default: false
    },
    relative: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'center'
    },
});

const state = reactive({
    show: false
});

const close = () => {
    state.show = false
}

</script>