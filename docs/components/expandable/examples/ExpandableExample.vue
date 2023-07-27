<template>
	<div class="vp-raw p-8 bg-white border-2 border-gray-300 rounded space-y-2">

		<Expandable title="Title 1" :arrowPosition="arrowPosition" :arrowHide="arrowHide">
			<div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
			</div>
        </Expandable>

		<Expandable title="Title 2" :arrowPosition="arrowPosition" :arrowHide="arrowHide">
			<div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
			</div>
        </Expandable>

		<Expandable title="Title 3 (disabled)" :arrowPosition="arrowPosition" :arrowHide="arrowHide" disabled>
			<div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
			</div>
        </Expandable>

		<Expandable title="Title 4" :arrowPosition="arrowPosition" :arrowHide="arrowHide">
			<div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
				<div>
					This is the content I want to hide inside this panel. 
				</div>
			</div>
        </Expandable>

	</div>
</template>
<script setup>
import { Expandable, ExpandableGroup } from '../../../../src/index'
import { defineProps } from 'vue'
const props = defineProps({
	arrowPosition: {
		type: String,
		default: 'end'
	},
	arrowHide: {
		type: Boolean,
		default: false
	}
});
</script>