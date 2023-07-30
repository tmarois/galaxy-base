import { defineConfig } from 'vitepress'

function buildSidebar() {
	return [
		{
			items: [
				{ text: 'Home', link: '/' },
				// { text: 'Quickstart', link: '/pages/getting-started' },
				// { text: 'Nuxt3', link: '/pages/nuxt3' },
				// { text: 'Theming', link: '/pages/variants' },
			],
		},
		{
			text: 'Element',
			collapsible: true,
			items: [
				...getComponents(),
			],
		},
		{
			text: 'Form',
			collapsible: true,
			items: [
				...getForms(),
			],
		},
		{
			text: 'Table',
			collapsible: true,
			items: [
				...getTables(),
			],
		},
		{
			text: 'Overlay',
			collapsible: true,
			items: [
				...getOverlays(),
			],
		},
	]
}

function getComponents() {
	return [
		// { text: '*Alert', link: 'components/alert' },
		{ text: 'Avatar', link: 'components/avatar' },
		{ text: 'Avatar Group', link: 'components/avatar-group' },
		{ text: 'Badge', link: 'components/badge' },
		{ text: 'Button', link: 'components/button' },
		{ text: 'Button Group', link: 'components/button-group' },
		{ text: 'Card', link: 'components/card' },
		{ text: 'Pagination', link: 'components/pagination' },
		{ text: 'Dropdown', link: 'components/dropdown' },
		{ text: 'Tooltip', link: 'components/tooltip' },
		{ text: 'Tabs', link: 'components/tabs' },
		{ text: 'List', link: 'components/list' },
		{ text: 'Expandable', link: 'components/expandable' },
		{ text: 'Expandable Group', link: 'components/expandable-group' },
		{ text: 'Loader Spinner', link: 'components/loader-spinner' },
		{ text: 'Loader Linear', link: 'components/loader-linear' },
		{ text: 'Loader Progress', link: 'components/loader-progress' },
	]
}

function getOverlays() {
	return [
		{ text: 'Backdrop', link: 'components/backdrop' },
		{ text: '*Modal', link: 'components/modal' },
		{ text: '*Drawer', link: 'components/drawer' }
	]
}

function getTables() {
	return [
		{ text: 'Table', link: 'components/table' },
	]
}

function getForms() {
	return [
		{ text: 'Label', link: 'components/label' },
		{ text: 'Checkbox', link: 'components/checkbox' },
		{ text: 'Toggle', link: 'components/toggle' },
		{ text: 'InputText', link: 'components/input-text' },
		{ text: 'InputArea', link: 'components/input-area' },
		{ text: '*Select', link: 'components/select' },
		// { text: 'Range', link: 'components/range' },
		// { text: 'FileInput', link: 'components/range' },
	]
}

/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
export default defineConfig({
	title: 'Galaxy Vue',
	cleanUrls: 'without-subfolders',
	appearance: false,
	// head: [
	//   ['link', { rel: "icon", type: "image/svg", href: "/assets/logo.svg"}],
	// ],
	themeConfig: {
		sidebar: buildSidebar(),
		// logo: '/assets/logo.svg',
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/tmarois/galaxy-vue' },
		],

		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2023 Timothy Marois'
		},

	},
})
