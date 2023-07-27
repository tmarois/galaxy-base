<template>
	<div class="vp-raw p-8 bg-white border-2 border-gray-200 rounded space-y-2">
        <div><Label>My Label</Label></div>
        <div><Label required>My Label with required</Label></div>
        <div><Label disabled>My Label with disabled</Label></div>
        <div>
            <Label>
                My Label using icon slot
                <template v-slot:tooltip-icon>[?]</template>
                <template v-slot:tooltip-content>This is my tooltip content from slot</template>
            </Label>
        </div>
        <div>
            <Label tooltip="This is my description using the tooltip prop">My Label</Label>
        </div>
        <div>
            <Label tooltip="This is my description using the tooltip prop" required>Required with tooltip</Label>
        </div>
	</div>
</template>

<script setup>
import { Label } from '../../../../src/index'
</script>