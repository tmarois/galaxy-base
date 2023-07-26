<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded">
		<Dropdown>
        <Button>
          Dropdown button
          <template v-slot:icon-after>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </template>
        </Button>
        <template #popper="{ hide }">
          This is my menu with custom content
        </template>
    </Dropdown>
	</div>
</template>
<script setup>
import { defineProps } from 'vue'
import { Button, Dropdown } from '../../../../src/index'
</script>

<!-- <style scoped>
.dropdown-trigger::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
</style> -->
