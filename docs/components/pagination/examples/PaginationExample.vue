<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded">
		<Pagination 
            :page="state.page" 
            :itemsShown="state.shown" 
            :totalItems="state.total" 
            :perPage="state.perPage"
            @change="change"
            :loadMore="loadMore"
            :nextPrevButtons="nextPrevButtons"
        />
	</div>
</template>

<script setup>

import { defineProps, reactive } from 'vue'
import { Pagination } from '../../../../src/index'

const props = defineProps({
    loadMore: {
        type: Boolean,
        default: false
    },
    nextPrevButtons: {
        type: Boolean,
        default: false
    }
});

const state = reactive({
    page: 1,
    shown: 15,
    total: 200,
    perPage: 15
});

const change = (options) => {
    state.page = options.page
    state.perPage = options.perPage
}

</script>