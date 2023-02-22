export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'bodyText',
      type: 'blockContent',
      title: 'Body Text',
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
  ],
}
