<template>
	<div class="w-full vp-raw p-8 bg-white border-2 border-gray-300 rounded">
		<Tooltip>
            <a href="#">Hover this link</a>
            <template #content>
                This is my tooltip message
            </template>
        </Tooltip>
	</div>
</template>
<script setup>
import { Tooltip } from '../../../../src/index'
</script>