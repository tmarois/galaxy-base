<template>
	<div class="vp-raw p-8 bg-white border-2 border-gray-200 rounded">
		<div class="flex space-x-2">
			<Badge text="Car" :removable="props.remove" />
			<Badge :removable="props.remove">House</Badge>
			<Badge :removable="props.remove">Cat</Badge>
			<Badge :removable="props.remove" variant="blue">Dog</Badge>
			<Badge :removable="props.remove" :classes="{themeColor:'bg-red-100 text-red-800'}">Person</Badge>
		</div>
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