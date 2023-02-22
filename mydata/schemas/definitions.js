import {emoji} from '../emojiIcon.jsx'

export default {
  name: 'definitions',
  title: 'Definitions',
  type: 'document',
  icon: emoji('📚'),
  fields: [
    {
      name: 'term',
      title: 'Term',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Generate a slug that has no spaces and no capital letters.',
      type: 'slug',
      options: {
        source: 'term',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
