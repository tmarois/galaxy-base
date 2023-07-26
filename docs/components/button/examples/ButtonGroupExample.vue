<template>
	<div class="vp-raw p-8 bg-white border-2 border-gray-200 rounded space-y-4">
		<ButtonGroup>
			<Button>Normal</Button>
            <Button loading>Loading</Button>
			<Button disabled>Disabled</Button>
			<Button loading disabled>Loading Disabled</Button>
		</ButtonGroup>
        <div class="font-bold">Icons:</div>
		<ButtonGroup>
			<Button><template #icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-auto h-auto"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /></svg></template></Button>
            <Button loading><template #icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-auto h-auto"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /></svg></template></Button>
			<Button disabled><template #icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-auto h-auto"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /></svg></template></Button>
			<Button loading disabled><template #icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-auto h-auto"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /></svg></template></Button>
		</ButtonGroup>
		<div class="font-bold">No State Example: (responsive)</div>
		<ButtonGroup responsive>
			<Button>Export</Button>
            <Button>Import</Button>
			<Button>Filter</Button>
			<Button>Delete</Button>
		</ButtonGroup>
		<div class="font-bold">Disabled Example: (responsive)</div>
		<ButtonGroup responsive>
			<Button disabled>Export</Button>
            <Button disabled>Import</Button>
			<Button disabled>Filter</Button>
			<Button disabled>Delete</Button>
		</ButtonGroup>
		<div class="font-bold">Ghost: (responsive)</div>
		<ButtonGroup responsive>
			<Button ghost>Export</Button>
            <Button ghost>Import</Button>
			<Button ghost>Filter</Button>
			<Button ghost>Delete</Button>
		</ButtonGroup>
		<div class="font-bold">Outlined: (responsive)</div>
		<ButtonGroup responsive>
			<Button outlined>Export</Button>
            <Button outlined>Import</Button>
			<Button outlined>Filter</Button>
			<Button outlined>Delete</Button>
		</ButtonGroup>
	</div>
</template>
<script setup>
import { Button, ButtonGroup } from '../../../../src/index'
</script>