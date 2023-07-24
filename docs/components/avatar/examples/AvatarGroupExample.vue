<template>
    <div class="vp-raw p-8 bg-white border-2 border-gray-300 rounded">
        <AvatarGroup>
            <Avatar hover />
            <Avatar hover text="T" variant="blue" />
            <Avatar hover variant="orange">R</Avatar>
            <Avatar hover img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <Avatar text="+8" hover variant="stats" />
        </AvatarGroup>
    </div>
</template>
<script setup>
	import { Avatar, AvatarGroup, setVariantClasses } from '../../../../src/index'
    setVariantClasses({
        'Avatar': {
            blue: {
                contentTheme: 'bg-blue-600 rounded-full text-white',
            },
            orange: {
                contentTheme: 'bg-orange-600 rounded-full text-white',
            },
            stats: {
                contentTheme: 'bg-gray-200 rounded-full text-gray-800 !text-sm !font-normal',
                contentHover: 'hover:z-10 hover:bg-gray-300 cursor-pointer',
            }
        },
    });
</script>