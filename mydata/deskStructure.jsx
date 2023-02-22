import {emoji} from './emojiIcon.jsx'

export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .icon(emoji('⚙️'))
        .child(
          S.list()
            // Sets a title for our new list
            .title('Settings')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Header')
                .icon(emoji('⬆️'))
                .child(S.document().schemaType('header').documentId('header')),
              S.listItem()
                .title('Footer')
                .icon(emoji('⬇️'))
                .child(S.document().schemaType('footer').documentId('footer')),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Content Text')
        .icon(emoji('📄'))
        .child(S.document().schemaType('content').documentId('content')),
      S.divider(),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) => !['header', 'footer', 'content'].includes(listItem.getId())
      ),
    ])
