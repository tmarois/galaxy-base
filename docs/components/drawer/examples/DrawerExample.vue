<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded relative">
        <Button @click="state.show=true">Show Drawer</Button>
        <Drawer 
            :show="state.show" 
            :persist="props.persist" 
            :relative="props.relative" 
            @close="close" 
        >
            <div class="h-full w-full p-8">
                <div class="h-full w-full flex items-center justify-center">
                    <div v-if="props.persist === true" class="text-center">
                        <div>This Drawer is <span class="font-bold">Persist</span></div>
                        <div class="text-gray-500 text-sm">*Backdrop click disabled</div>
                        <div class="flex justify-center mt-6">
                            <Button outlined @click="close">Close Drawer</Button>
                        </div>
                    </div>
                    <div v-else-if="props.withModal" class="text-center">
                        <div>This Drawer is <span class="font-bold">with modal</span></div>
                        <div class="flex justify-center mt-6 space-x-4">
                            <Button @click="state.show2=true">Open Modal</Button>
                            <Button outlined @click="close">Close Drawer</Button>
                        </div>

                        <Modal 
                            :show="state.show2" 
                            @close="close2" 
                        >
                            <div class="h-full w-full p-8">
                                <div class="h-full w-full flex items-center justify-center">
                                    <div class="text-center">
                                        <div>This modal is <span class="font-bold">Default State</span></div>
                                        <div class="flex justify-center mt-6">
                                            <Button outlined @click="close2">Close Modal</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>

                    </div>
                    <div v-else class="text-center">
                        <div>This Drawer is <span class="font-bold">Default State</span></div>
                        <div class="flex justify-center mt-6">
                            <Button outlined @click="close">Close Drawer</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
	</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import { Drawer, Modal, Button } from '../../../../src/index'
const props = defineProps({
    persist: {
        type: Boolean,
        default: false
    },
    relative: {
        type: Boolean,
        default: false
    },
    withModal: {
        type: Boolean,
        default: false
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