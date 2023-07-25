<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded">
		<Dropdown >
            <!-- Dropdown trigger -->
            <button
              class="
                dropdown-trigger
                inline-block
                px-6
                py-3
                bg-blue-600
                text-white
                leading-tight
                rounded
                hover:bg-blue-700
                focus:bg-blue-700 focus:outline-none focus:ring-0
                active:bg-blue-800
                transition
                duration-150
                ease-in-out
              "
            >
              Dropdown button
            </button>

            <!-- Dropdown content -->
            <template #popper="{ hide }">
              This is my menu with custom content
            </template>
        </Dropdown>
	</div>
</template>
<script setup>
import { defineProps } from 'vue'
import { Dropdown } from '../../../../src/index'
</script>

<style scoped>
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
</style>
