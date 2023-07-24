<template>
	<div class="vp-raw p-8 bg-white border-2 border-gray-300 rounded">
		<div class="flex space-x-2">
			<Avatar />
			<Avatar text="T" />
			<Avatar>R</Avatar>
			<Avatar img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
		</div>
	</div>
</template>
<script setup>
	import { Avatar } from '../../../../src/index'
</script>