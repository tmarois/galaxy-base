<script setup>
import GalleryExample from './gallery/examples/GalleryExample.vue'
import GalleryArrayExample from './gallery/examples/GalleryArrayExample.vue'
</script>

# Gallery

## Default Gallery
This gallery uses slots for each item in the rotation. 

When using slots, be sure to make your images `w-full h-full` to fit within the sizes set on the variant property of `item`

<GalleryExample />

## With Image Array
This gallery uses an array of images `:images="imageArray"`

When using the images array, all images are already pre-configured with size. To adjust sizes go to the variant `item` property.

<GalleryArrayExample />

## With No Animation
This gallery disables the css animation `:animation="false"`

<GalleryArrayExample :animation="false" />