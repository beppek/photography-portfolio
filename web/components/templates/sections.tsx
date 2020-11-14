import { ReactElement } from 'react';
import { PageSection } from '../../lib/cms/cms-types';
import { Column } from '../molecules/layout/column';
import { Section } from '../organisms/section/section';

type Props = {
  sections: PageSection[];
};

export function Sections({ sections }: Props): ReactElement {
  return (
    <Column alignItems="stretch">
      {sections.map((section) => (
        <Section key={section.key} section={section} />
      ))}
    </Column>
  );
}
