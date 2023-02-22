// settings.js

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
  // Optional singleton option to ensure only one document of this type can be created
  __experimental_actions: ['create', 'update', 'publish'],
  singleton: true,
}
