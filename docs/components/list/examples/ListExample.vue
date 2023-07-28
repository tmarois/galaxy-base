<template>
	<div class="vp-raw p-8 bg-white border-2 border-gray-200 rounded space-y-2">
        <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
            <ListItem disabled>Item 5 (disabled)</ListItem>
            <ListItem>Item 6</ListItem>
            <ListItem :hover="false">Item 7 (no hover)</ListItem>
        </List>
	</div>
</template>

<script setup>
import { List, ListItem } from '../../../../src/index'
</script>