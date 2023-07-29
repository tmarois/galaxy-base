<template>
	<div class="w-full vp-raw bg-white border border-gray-200 rounded ">
		<Table 
			:selectOne="props.selectOne"
			:hideHeader="props.hideHeader"
			:selectRow="props.selectRow"
			:select="props.select"
			:loading="props.loading"
			:headers="headers"
			:rows="(props.noData) ? [] : rows"
		/>
	</div>
</template>
<script setup>
import { defineProps, ref, reactive } from 'vue'
import { Table } from '../../../../src/index'

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    },
	noData: {
        type: Boolean,
        default: false
    },
	select: {
        type: Boolean,
        default: false
    },
	selectRow: {
        type: Boolean,
        default: false
    },
	hideHeader: {
        type: Boolean,
        default: false
    },
	selectOne: {
        type: Boolean,
        default: false
    },
});

const headers = reactive([
	{
		value: 'id',
		label: 'ID'
	},
	{
		value: 'first_name',
		label: 'First Name'
	},
	{
		value: 'last_name',
		label: 'Last Name'
	},
	{
		value: 'email',
		label: 'Email'
	}
])

const rows = reactive([
	{
		id: 1,
		first_name: 'John',
		last_name: 'Doe',
		email: 'john@example.com'
	},
	{
		id: 2,
		first_name: 'Jane',
		last_name: 'Doe',
		email: 'jane@example.com'
	},
	{
		id: 3,
		first_name: 'Liz',
		last_name: 'Durand',
		email: 'liz@example.com'
	}
]);
</script>