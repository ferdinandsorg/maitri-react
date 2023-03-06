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
        .title('co dings')
        .icon(emoji('-'))
        .child(
          S.list()
            // Sets a title for our new list
            .title('Settings')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('text')
                .icon(emoji('⬇️'))
                .child(S.document().schemaType('definitions').documentId('definitions')),
            ]),
          ...S.documentTypeListItems()
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
