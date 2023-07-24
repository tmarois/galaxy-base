import { defineConfig } from 'vitepress'

function buildSidebar() {
  return [
    {
      items: [
        { text: 'Home', link: '/' },
        { text: 'Quickstart', link: '/pages/getting-started' },
        { text: 'Nuxt3', link: '/pages/nuxt3' },
        { text: 'Theming', link: '/pages/variants' },
      ],
    },
    {
      text: 'Components',
      collapsible: true,
      items: [
        ...getComponents(),
      ],
    },
  ]
}

function getComponents() {
  return [
    { text: 'Avatar', link: 'components/avatar' },
    { text: 'Avatar Group', link: 'components/avatar-group' },
    { text: 'Badge', link: 'components/badge' },
    { text: 'Loader Spinner', link: 'components/loader-spinner' },
    { text: 'Loader Linear', link: 'components/loader-linear' },
  ]
}

function getFormComponents() {
  return [
    { text: 'Input', link: 'components/input' },
    { text: 'FileInput', link: 'components/fileInput' },
    { text: 'Checkbox', link: 'components/checkbox' },
    { text: 'Select', link: 'components/select' },
    { text: 'Toggle', link: 'components/toggle' },
    { text: 'Textarea', link: 'components/textarea' },
    { text: 'Range', link: 'components/range' },
    { text: 'Radio', link: 'components/radio' },
  ]
}

/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
export default defineConfig({
  title: 'Galaxy UI',
  cleanUrls: 'without-subfolders',
  // head: [
  //   ['link', { rel: "icon", type: "image/svg", href: "/assets/logo.svg"}],
  // ],
  themeConfig: {
    sidebar: buildSidebar(),
    // logo: '/assets/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tmarois/galaxy-base-framework' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 TMAROIS LLC'
    },

  },
})
