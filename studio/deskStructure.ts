import { StructureBuilder as S } from '@sanity/structure';

export default () =>
  S.list()
    .title('Content')
    .items([...S.documentTypeListItems()]);
