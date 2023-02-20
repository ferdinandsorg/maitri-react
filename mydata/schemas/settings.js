export default {
  name: 'settings',
  type: 'document',
  title: 'Settings',
  __experimental_actions: ['update', 'publish'], // remove this if you're not using the Content Lake
  fields: [
    {
      name: 'footer',
      type: 'object',
      title: 'Footer',
      fields: [
        {
          name: 'legalNotice',
          type: 'text',
          title: 'Legal Notice',
        },
        {
          name: 'copyrightText',
          type: 'text',
          title: 'Copyright Text',
        },
        {
          name: 'instagramLink',
          type: 'url',
          title: 'Instagram Link',
        },
        {
          name: 'mailLink',
          type: 'url',
          title: 'Mail Link',
        },
      ],
    },
    {
      name: 'header',
      type: 'object',
      title: 'Header',
      fields: [
        {
          name: 'textLogo',
          type: 'image',
          title: 'Text Logo',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'symbolLogo',
          type: 'image',
          title: 'Symbol Logo',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  initialValue: {
    footer: {
      legalNotice: '',
      copyrightText: '',
      instagramLink: '',
      mailLink: '',
    },
    header: {
      textLogo: null,
      symbolLogo: null,
    },
  },
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
  __experimental_everything: {
    singleton: true, // restrict to a single instance
  },
}
