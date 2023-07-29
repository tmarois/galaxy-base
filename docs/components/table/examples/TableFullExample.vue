<template>

    <div>
        <div class="text-sm text-gray-500 pb-4">Note: Sorting and Pagination are for display purposes of this documentation. You will need to control the data yourself by utilizing the change emits.</div>
        <Card removeBodyPadding class="mb-4">
            <div class="w-full vp-raw overflow-hidden h-[255px] overflow-y-scroll">
                <Table 
                    selectRow
                    select
                    selectBorder
                    :loading="state.loading"
                    :headers="state.headers"
                    :rows="state.rows"
                    @sort="updateSorting"
                    @selection="selection"
                />
            </div>
            <template #footer>
                <Pagination 
                    :perPage="state.perPage"
                    :page="state.page"
                    :totalItems="500"
                    :itemsShown="state.rows.length"
                    @change="change"
                />
            </template>
        </Card>
        <div class="w-full vp-raw space-y-4 text-xs">
            <Card :title="`Selected Items: (${state.selection.length})`">
                {{ state.selection }}
            </Card>
            <Card :title="`Selected Indexes: (${state.selectionIndexes.length})`">
                {{ state.selectionIndexes }}
            </Card>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import { Table, Card, Pagination } from '../../../../src/index'

const state = reactive({
    page: 1,
    perPage: 15,
    loading: false,
    headers: [
        {
            value: 'id',
            label: 'ID'
        },
        {
            value: 'first_name',
            label: 'First Name',
            sorting: true,
            sorted: 'ASC'
        },
        {
            value: 'last_name',
            label: 'Last Name',
            sorting: true
        },
        {
            value: 'email',
            label: 'Email',
            sorting: true
        }
    ],
    rows: [
        
    ],
    selection: [],
    selectionIndexes: [],
})

for (let index = 1; index < 500; index++) {
    state.rows.push({
        id: index,
        first_name: 'John '+index,
        last_name: 'Doe '+index,
        email: 'john'+index+'@example.com',
    })
}

const updateSorting = (h, direction, newHeaders) => {
    state.headers = newHeaders
}

const selection = (items, indexes) => {
    state.selection = items
    state.selectionIndexes = indexes
}

const change = (options) => {
    state.page = options.page
    state.perPage = options.perPage
}

</script>