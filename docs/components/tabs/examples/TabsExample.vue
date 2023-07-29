<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-4 divide-y divide-gray-200">
		<Tabs v-model="tab">
			<Tab name="profile" title="My Profile">
				This is my tab content for the profile
			</Tab>
			<Tab name="billing" title="Billing">
				This is my account billing
			</Tab>
			<Tab name="settings" title="Settings">
				This is my account settings
			</Tab>
		</Tabs>
	</div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { Tabs, Tab } from '../../../../src/index'
const tab = ref('profile');
</script>