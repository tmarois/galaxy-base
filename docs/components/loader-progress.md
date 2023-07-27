<script setup>
import LoaderProgressExample from './loader/examples/LoaderProgressExample.vue'
</script>

# Loader Progress

## Default Loader Progress
<LoaderProgressExample :progress="60" />

## With Progress Amount
<LoaderProgressExample :progress="48" showProgress />

## With Label
<LoaderProgressExample :progress="48" showProgress label="Downloading" />
