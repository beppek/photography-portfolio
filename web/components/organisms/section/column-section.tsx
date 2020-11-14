import { ReactElement } from 'react';
import styled from 'styled-components';
import {
  ColumnComponent,
  ColumnContent,
  ColumnContentTypes,
  BodyContent,
  CMSImage,
} from '../../../lib/cms/cms-types';
import { Fluid } from '../../molecules/layout/container';
import { Column } from '../../molecules/layout/column';
import { Row } from '../../molecules/layout/row';
import { BlockContent } from '../../molecules/block-content/block-content';
import { Image } from '../../atoms/image/image';
import { cmsFactory as cms } from '../../../lib/cms/cms';

const columnContentTypes = {
  [ColumnContentTypes.bodyContent]: ({
    content,
  }: {
    content: BodyContent[];
  }) => <BlockContent blocks={content} />,
  [ColumnContentTypes.imageAlt]: ({ alt, asset }: CMSImage) => (
    <Image width={300} alt={alt} src={cms({}).getUrlForImage(asset).url()} />
  ),
};

function ColumnContentComponent({
  content,
}: {
  content: ColumnContent;
}): ReactElement {
  console.log('content from other', content);
  return columnContentTypes[content._type]
    ? columnContentTypes[content._type](content)
    : null;
}

export type SectionColumnsProps = {
  columns: ColumnComponent[];
};

const SectionRow = styled(Row)`
  padding: ${(props) => props.theme.spacing.padding};
  margin: ${(props) => props.theme.spacing.padding};
  /* & * {
    flex-basis: 0;
  } */
`;

const SectionContainer = styled(Fluid)`
  width: 1000px;
  margin-top: calc(${(props) => props.theme.spacing.padding} * 4);
  margin-bottom: calc(${(props) => props.theme.spacing.padding} * 4);
`;

const SectionColumn = styled(Column)`
  flex-grow: 0;
`;

export function SectionColumns({ columns }: SectionColumnsProps): ReactElement {
  // console.log('columns', columns);
  return (
    <SectionContainer fullwidth>
      <SectionRow justifyContent="space-around">
        {columns.map((column) => (
          <SectionColumn key={column._key}>
            {column.content.map((content) => (
              <ColumnContentComponent content={content} />
            ))}
          </SectionColumn>
        ))}
      </SectionRow>
    </SectionContainer>
  );
}
