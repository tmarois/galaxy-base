<template>
    <div>This content is testing preload. Check console.log</div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
    console.log('onMounted')
});

onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
});
</script>