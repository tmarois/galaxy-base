<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-4 divide-y divide-gray-200">
		<Tabs v-model="tab">
			<Tab name="profile" title="My Profile">
				<template #title>
                    <div>My Profile</div>
                    <Badge :classes="{base: 'ml-1 p-0.5 px-2',theme: 'rounded-full text-xs'}">5</Badge>
                </template>
				This tab uses a custom slot for title
			</Tab>
			<Tab name="billing" title="Billing">
				This is my account billing
			</Tab>
			<Tab name="settings" title="Settings">
                <template #title>
                    <div>Settings</div>
                    <Dropdown>
                        <Button ghost circle>
                            <template #icon><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg></template>
                        </Button>
                        <template #popper>
                        <List>
                            <ListItem>Item 1</ListItem>
                            <ListItem>Item 2</ListItem>
                            <ListItem>Item 3</ListItem>
                            <ListItem>Item 4</ListItem>
                        </List>
                        </template>
                    </Dropdown>
                </template>
				This is my account settings
			</Tab>
		</Tabs>
	</div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { Tabs, Tab, Badge, Button, Dropdown, List, ListItem } from '../../../../src/index'
const tab = ref('profile');
</script>