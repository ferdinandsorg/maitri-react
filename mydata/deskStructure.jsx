import {emoji} from './emojiIcon.jsx'

export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'content'].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Content Text')
        .icon(emoji('📄'))
        .child(S.document().schemaType('content').documentId('content')),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(emoji('⚙️'))
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ])
