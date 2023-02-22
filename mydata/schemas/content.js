import {defineType} from 'sanity'

export default defineType({
  name: 'content',
  title: 'Content',
  type: 'document',
  fields: [
    {
      name: 'why',
      title: 'Why',
      type: 'blockContent',
    },
    {
      title: 'What',
      name: 'what',
      type: 'object',
      fields: [
        {
          title: 'We are...',
          name: 'weAre',
          type: 'blockContent',
        },
        {
          title: 'We are not...',
          name: 'weAreNot',
          type: 'blockContent',
        },
      ],
    },
    {
      name: 'bodyText',
      title: 'Body',
      description: 'This text will display under the "What" part.',
      type: 'blockContent',
    },
  ],

  preview: {
    title: 'dings',
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
