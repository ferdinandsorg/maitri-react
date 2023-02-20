export default {
  name: 'motive',
  title: 'Motive',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: {type: 'artist'},
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      options: {
        format: 'currency',
      },
    },
  ],
}
