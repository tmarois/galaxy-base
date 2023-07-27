<script setup>
import CardExample from './card/examples/CardExample.vue'
import CardFooterExample from './card/examples/CardFooterExample.vue'
import CardDetachHeaderExample from './card/examples/CardDetachHeaderExample.vue'
</script>

# Card

## Default Card
<CardExample />

## With loading
<CardExample loading />

## Disabled with loading
<CardExample loading disabled />

## Header Title
<CardExample title="Card Title" />

## Header with Subtitle 
<CardExample title="Card Title" subtitle="My card subtitle description can go here" />

## Header with Loading 
<CardExample loading title="Card Title" subtitle="My card subtitle description can go here" />

## Header Detached
<CardDetachHeaderExample title="Title Detached" subtitle="This header is detached from the card box" />

## Footer
<CardFooterExample />
