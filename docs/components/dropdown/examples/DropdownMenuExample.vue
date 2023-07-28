<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded">
		<Dropdown arrow>
        <Button>Dropdown Menu</Button>
        <template #popper>
          <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
          </List>
        </template>
    </Dropdown>
	</div>
</template>
<script setup>
import { defineProps } from 'vue'
import { Button, Dropdown, List, ListItem } from '../../../../src/index'
</script>
