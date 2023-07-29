<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-4 divide-y divide-gray-200">
		<Tabs v-model="tab">
			<Tab name="profile" title="Preloaded">
				<TestPreload />
			</Tab>
			<Tab name="billing" title="Control" :preload="false">
				The starting tab for testing. Does not load additional components
			</Tab>
			<Tab name="settings" title="Not Preloaded" :preload="false">
				<TestPreload />
			</Tab>
		</Tabs>
	</div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { Tabs, Tab } from '../../../../src/index'
import TestPreload from './TestPreload.vue'
const tab = ref('billing');
</script>