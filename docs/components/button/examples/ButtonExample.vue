<template>
	<div class="vp-raw p-8 bg-white border-2 border-gray-200 rounded space-y-4">

		<div class="flex space-x-2">
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size">Normal</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" circle>Circle</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" disabled>Disabled</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" loading>Loading</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" loading disabled>Loading Disabled</Button>
		</div>

		<div class="font-bold">Icon:</div>
		<div class="flex space-x-2">
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size">
				<template #icon>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
					</svg>
				</template>
				Download
			</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" disabled>
				<template #icon>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
					</svg>
				</template>
				Download
			</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" loading>
				<template #icon>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
					</svg>
				</template>
				Download
			</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" loading disabled>
				<template #icon>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
					</svg>
				</template>
				Download
			</Button>
		</div>

		<div class="font-bold">Icon After:</div>
		<div class="flex space-x-2">
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size">
				Next Page
				<template v-slot:icon-after>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</template>
			</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" disabled>
				Next Page
				<template v-slot:icon-after>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</template>
			</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" loading>
				Next Page
				<template v-slot:icon-after>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</template>
			</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" loading disabled>
				Next Page
				<template v-slot:icon-after>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</template>
			</Button>
		</div>

		<div class="font-bold">Icon Only:</div>
		<div class="flex space-x-2">
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size">
				<template #icon>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-auto h-auto">
						<path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
					</svg>
				</template>
			</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" disabled>
				<template #icon>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-auto h-auto">
						<path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
					</svg>
				</template>
			</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" loading>
				<template #icon>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-auto h-auto">
						<path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
					</svg>
				</template>
			</Button>
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" loading disabled>
				<template #icon>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-auto h-auto">
						<path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
					</svg>
				</template>
			</Button>
		</div>

		<div class="font-bold">Icon Only (circle):</div>
		<div class="flex space-x-2">
			<Button circle :ghost="props.ghost" :outlined="props.outlined" :size="props.size">
				<template #icon>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
					</svg>
				</template>
			</Button>
			<Button circle :ghost="props.ghost" :outlined="props.outlined" :size="props.size" disabled>
				<template #icon>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
					</svg>
				</template>
			</Button>
			<Button circle :ghost="props.ghost" :outlined="props.outlined" :size="props.size" loading>
				<template #icon>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
					</svg>
				</template>
			</Button>
			<Button circle :ghost="props.ghost" :outlined="props.outlined" :size="props.size" loading disabled>
				<template #icon>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
					</svg>
				</template>
			</Button>
		</div>

		<div class="font-bold">Responsive:</div>
		<div class="w-full" style="height:80px">
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" responsive>Responsive Button</Button>
		</div>
		<div class="w-full">
			<Button :ghost="props.ghost" :outlined="props.outlined" :size="props.size" responsive>Responsive Button</Button>
		</div>

	</div>
</template>
<script setup>
import { Button } from '../../../../src/index'
import { defineProps } from 'vue'
const props = defineProps({
    outlined: {
        type: Boolean,
        default: false
    },
	ghost: {
        type: Boolean,
        default: false
    },
	size: {
        type: String,
        default: 'md'
    },
});
</script>