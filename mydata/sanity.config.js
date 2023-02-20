import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Maitri',

  projectId: 'm407z1ye',
  dataset: 'mydata',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
