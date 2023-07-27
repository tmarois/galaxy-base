<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded">
		<Dropdown arrow>
            <Button>Dropdown Menu</Button>

            <template #popper>
              <ul class="py-1 text-gray-70">
                <li>
                  <a
                    href="#"
                    class="
                      block
                      py-2
                      px-4
                      hover:bg-gray-100
                      focus:bg-gray-100
                      outline-none
                    "
                    >Click me to close</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      block
                      py-2
                      px-4
                      hover:bg-gray-100
                      focus:bg-gray-100
                      outline-none
                      dropdown-stay
                    "
                    >Dropdown stays</a
                  >
                </li>
                <li>
                  <a
                    disabled
                    href="#"
                    class="
                      block
                      py-2
                      px-4
                      focus:bg-gray-100
                      outline-none
                      text-gray-400
                      cursor-no-entry
                      disabled
                    "
                    >Disabled item</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      block
                      py-2
                      px-4
                      hover:bg-gray-100
                      focus:bg-gray-100
                      outline-none
                    "
                    >Something else</a
                  >
                </li>
              </ul>
            </template>
        </Dropdown>
	</div>
</template>
<script setup>
import { defineProps } from 'vue'
import { Button, Dropdown } from '../../../../src/index'
</script>
