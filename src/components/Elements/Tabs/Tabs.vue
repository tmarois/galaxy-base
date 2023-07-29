<template>
    <div :class="variantClasses.wrapper">
        <div :class="variantClasses.tabListWrapper">
            <ul :class="variantClasses.tabList">
                <li 
                    v-for="(item, id) in tabs"
                    :key="id"
                    @click.prevent="tabClick(item.props?.name, item)"
                    :class="{
                        [variantClasses.tabItem]: true,
                        [variantClasses.tabItemDisabled]: (item.props?.disabled === '' || item.props?.disabled === true),
                        [variantClasses.tabItemSelected]: modelValueRef === item.props?.name,
                    }"
                >
                    <div :class="variantClasses.tabItemTitle">
                        <template v-if="item.slotContent">
                            <template v-for="(content, i) in item.slotContent" :key="i">
                                <component :is="content" />
                            </template>
                        </template>
                        <template v-else>
                            {{ item.props.title }}
                        </template>
                    </div>
                </li>
            </ul>
        </div>
        <div v-bind="$attrs" :class="variantClasses.tabContentWrapper">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { useVariantClasses } from '../../../composables/variantClasses'
import { computed, provide, toRef, useSlots } from 'vue'
import { Fragment, createTextVNode, Comment } from 'vue'

const props = defineProps({
    variant: {
        type: String,
        default: null
    },
	classes: {
        type: Object,
        default: () => {}
    },
    modelValue: {
        type: String,
        default: '',
    }
})

const emit = defineEmits(['update:modelValue', 'click:tab'])  
const slots = useSlots()
const defaultSlot = slots.default

const variantClasses = useVariantClasses('Tabs', props.variant, props.classes);

const flatten = (vNodes, filterCommentNode = true, result = []) => {
    vNodes.forEach((vNode) => {
        if (vNode === null) return
        if (typeof vNode !== 'object') {
            if (typeof vNode === 'string' || typeof vNode === 'number') {
                result.push(createTextVNode(String(vNode)))
            }
            return
        }
        if (Array.isArray(vNode)) {
            flatten(vNode, filterCommentNode, result)
            return
        }
        if (vNode.type === Fragment) {
            if (vNode.children === null) return
            if (Array.isArray(vNode.children)) {
                flatten(vNode.children, filterCommentNode, result)
            }
        } else if (vNode.type !== Comment) {
            if (vNode.children && vNode.children.title) {
                vNode.slotContent = vNode.children.title()
            }
            result.push(vNode)
        }
    })
    return result
}

const tabs = computed(() => {
    return defaultSlot ? flatten(defaultSlot()).filter((v) => {
            return (v.type).__GALAXY_TAB__
        }) : []
})

const modelValueRef = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
})

const change = (value) => {
    modelValueRef.value = value
}

function tabClick(value, item) {
    if ((item.props?.disabled === '' || item.props?.disabled === true)) return;
    change(value)
}

provide('IS_TABS', 1);
provide('IS_TABS_VARIANT', props.variant);
provide('TAB_ACTIVE', modelValueRef);
provide('TAB_CHANGE', change);
</script>