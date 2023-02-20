import {defineType} from 'sanity'

export default defineType({
  name: 'content',
  title: 'Content',
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
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})

// export default {
//   name: 'contentBlocks',
//   title: 'Content Blocks',
//   type: 'document',
//   fields: [
//     {
//       name: 'headline',
//       title: 'Headline',
//       type: 'string',
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'headline',
//         maxLength: 100,
//       },
//     },
//     {
//       name: 'content',
//       title: 'Content',
//       type: 'text',
//     },
//   ],
// }
