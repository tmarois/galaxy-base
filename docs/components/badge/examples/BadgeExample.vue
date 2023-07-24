<template>
	<div class="flex space-x-2">
		<Badge text="Car" :removable="remove" />
		<Badge :removable="remove">House</Badge>
		<Badge :removable="remove">Cat</Badge>
		<Badge :removable="remove" variant="blue">Dog</Badge>
		<Badge :removable="remove" :classes="{themeColor:'bg-red-100 text-red-800'}">Person</Badge>
	</div>
</template>
<script setup>
import { defineProps } from 'vue'
import { Badge, setVariantClasses } from '../../../../src/index'
const props = defineProps({
    remove: {
        type: Boolean,
        default: false
    }
});
setVariantClasses({
	'Badge': {
		blue: {
			themeColor: 'bg-blue-100 text-blue-800',
			removeButtonTheme: 'rounded-full hover:bg-gray-600/20 text-blue-800',
		}
	},
});
</script>