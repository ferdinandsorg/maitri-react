export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Artist name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'instagram',
      title: 'Instagram Username',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email adress',
      type: 'email',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
  ],
}
