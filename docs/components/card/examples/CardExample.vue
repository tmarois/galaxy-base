<template>
    <div class="vp-raw p-8 bg-gray-100 border-2 border-gray-200 rounded">
        <Card 
            :loading="props.loading"
            :title="props.title"
            :subtitle="props.subtitle"
        >
            The card content
        </Card>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { Card } from '../../../../src/index'
const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: null
    },
    subtitle: {
        type: String,
        default: null
    }
});
</script>