<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded relative">
        <Button @click="state.show=true">Show Modal (1)</Button>
        <Modal 
            :show="state.show" 
            @close="close" 
        >
            <div class="h-full w-full p-8">
                <div class="h-full w-full flex items-center justify-center">
                    <div class="text-center">
                        <div>This modal is <span class="font-bold">Modal (1)</span></div>
                        <div class="flex justify-center mt-6 space-x-4">
                            <Button @click="state.show2=true">Open Modal (2)</Button>
                            <Button outlined @click="close">Close Modal (1)</Button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal :show="state.show2" @close="close2">
                <div class="h-full w-full p-8">
                    <div class="h-full w-full flex items-center justify-center">
                        <div class="text-center">
                            <div>This modal is <span class="font-bold">Modal 2</span></div>
                            <div class="flex justify-center mt-6">
                                <Button outlined @click="close2">Close Modal</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

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
    show: false,
    show2: false
});

const close = () => {
    state.show = false
}

const close2 = () => {
    state.show2 = false
}

</script>