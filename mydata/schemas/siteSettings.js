export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'string',
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'blockContent',
    },
    {
      name: 'instagramUsername',
      type: 'string',
      title: 'Instagram Username',
      description: 'Without URL or @',
    },
    {
      name: 'email',
      type: 'email',
      title: 'E-Mail Address',
    },
    {
      name: 'imprintText',
      title: 'Imprint',
      type: 'blockContent',
    },
  ],
}
