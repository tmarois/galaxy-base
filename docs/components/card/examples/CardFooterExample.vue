<template>
    <div class="vp-raw p-8 bg-gray-100 border-2 border-gray-200 rounded">
        <Card title="My Card" subtitle="This is a card to talk about something">
            The card content
            <template #footer>
                Footer content goes here
            </template>
        </Card>
    </div>
</template>
<script setup>
import { Card } from '../../../../src/index'
</script>