<template>
    <div class="flex justify-between" :class="variantClasses.baseText">
        <div v-if="!props.hideStats && !props.loadMore" class="flex flex-row items-center">
            <select
                name="currentPerPage"
                class="flex w-16 py-2 pl-2 pr-2 text-sm font-medium text-gray-500 bg-white border-gray-200 rounded cursor-pointer hover:bg-blue-100 hover:border-blue-900 hover:text-blue-900 focus:outline-none focus:border-blue-900 focus:ring-0"
                :value="props.perPage"
                @input="changePerPage($event)"
            >
                <option
                    v-for="option of props.perPageOptions"
                    :key="option"
                    :value="option"
                >
                    {{ option }}
                </option>
            </select>
            <label for="perPage" class="mt-0 ml-4 text-left">
                <template v-if="totalItems">Showing {{ fromItem }} to {{ toItem }} of {{ totalItems }} {{ itemName }}</template>
                <template v-else-if="props.loading">Loading...</template>
            </label>
        </div>
        <div v-if="props.loadMore" class="relative flex flex-col justify-center items-center w-full text-center">
            <div v-if="!props.hideStats" class="text-center mb-2">
                <template v-if="totalItems">Showing {{ toItem }} of {{ totalItems }} {{ itemName }}</template>
            </div>
            <div v-if="nextPrevButtons" class="flex justify-center space-x-2">
                <Button 
                    outlined
                    @click="prevDisabled ? '' : goToPage(props.page - 1)"
                    :disabled="prevDisabled"
                    :variant="variantButton"
                >Previous</Button>
                <Button 
                    outlined
                    @click="nextDisabled ? '' : goToPage(props.page + 1)"
                    :disabled="nextDisabled"
                    :variant="variantButton"
                >Next</Button>
            </div>
            <Button 
                v-else
                outlined
                @click="nextDisabled ? '' : goToPage(props.page + 1)"
                :disabled="props.loading || nextDisabled"
                :loading="props.loading"
                :variant="variantButton"
            >{{ loadMoreButton }}</Button>
        </div>
        <div v-else class="relative flex order-1 space-x-2">
            <div>
                <Button 
                    ghost
                    :circle="!nextPrevButtons"
                    @click="prevDisabled ? '' : goToPage(props.page - 1)"
                    :disabled="prevDisabled"
                    :variant="variantButton"
                >
                    <template v-if="nextPrevButtons" v-slot:default>
                        <span>Previous</span>
                    </template>
                    <template v-if="!nextPrevButtons" v-slot:icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-auto h-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </template>
                </Button>
            </div>
            <div class="relative flex items-center space-x-2">
                <input 
                    v-if="pageInput"
                    type="number"
                    :value="props.page"
                    :disabled="(!props.totalItems && props.loading) || (totalPages < 1 && !props.loading)"
                    @focusin="$event.target.select()"
                    @change="changePage"
                    :max="totalPages"
                    classes="text-center"
                    style="width:55px"
                />
                <span v-else :class="variantClasses.currentPageText">{{ props.page }}</span>
                <span class="text-gray-500" v-if="props.totalItems">of {{ totalPages }}</span>
            </div>
            <div>
                <Button 
                    ghost
                    :circle="!nextPrevButtons"
                    @click="nextDisabled ? '' : goToPage(props.page + 1)"
                    :disabled="nextDisabled"
                    :variant="variantButton"
                >
                    <template v-if="nextPrevButtons" v-slot:default>
                        <span>Next</span>
                    </template>
                    <template v-if="!nextPrevButtons" v-slot:icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-auto h-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                    </template>
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useVariantClasses } from '../../../composables/variantClasses'
import Button from '../Button/Button.vue'
import { defineProps, defineEmits, computed } from 'vue'
const emit = defineEmits(['change']);
const props = defineProps({
    variant: {
        type: String,
        default: null
    },
    variantButton: {
        type: String,
        default: null
    },
	classes: {
        type: Object,
        default: () => {}
    },
    page: {
        type: Number,
        default: 1,
        required: true
    },
    perPage: {
        type: Number,
        default: 15
    },
    perPageOptions: {
        type: Array,
        default: () => {
            return [15, 30, 50, 100]
        }
    },
    itemsShown: {
        type: Number,
        default: 0
    },
    totalItems: {
        type: Number,
        default: 0
    },
    nextPrevButtons: {
        type: Boolean,
        default: false
    },
    hideStats: {
        type: Boolean,
        default: false
    },
    pageInput: {
        type: Boolean,
        default: false
    },
    itemName: {
        type: String,
        default: 'results'
    },
    loading: {
        type: Boolean,
        default: false
    },
    loadMore: {
        type: Boolean,
        default: false
    },
    loadMoreButton: {
        type: String,
        default: 'Load More'
    }
});

const variantClasses = useVariantClasses('Pagination', props.variant, props.classes);

const totalPages = computed(() => { 
    // if totalItems is not set, the total page is -1 to disable page validation
    return props.totalItems === undefined ? -1 : Math.ceil(props.totalItems / props.perPage);
});

const prevDisabled = computed(() => {
    return props.page === 1;
});

const fromItem = computed(() => {
    if (props.page === 1) return 1;
    else return (props.perPage * (props.page - 1)) + 1;
});

const toItem = computed(() => {
    if (props.page === totalPages.value) {
        return props.totalItems;
    }
    else {
        let itemCount = (props.page) * props.perPage
        if (props.currentCount && itemCount > props.currentCount) return props.currentCount;
        return itemCount;
    }
});

const nextDisabled = computed(() => {
    if (totalPages.value === -1) return false // allow next button to be clicked when total items is not loaded
    if ((totalPages.value < 1 && !props.loading) || totalPages.value === 1 ) return true
    if (totalPages.value > 1) return props.page === totalPages.value
    return false
});

const changePage = (e) => {
    goToPage(e.target.value);
    if (e.target === document.activeElement) e.target.blur();
};

const changePerPage = (e) => {
    emit('change',{
        page: 1,
        perPage: Number(e.target.value)
    });
}

const goToPage = (page) => {
    if (page < 1 || page === 1) page = 1;
    else if (totalPages.value > 0 && Number(page) > totalPages.value) page = totalPages.value;
    emit('change',{
        page: Number(page),
        perPage: props.perPage
    });
}
</script>