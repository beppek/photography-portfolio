import { ReactElement } from 'react';
import styled from 'styled-components';
import { Hero, HeroProps } from '../hero/hero';
import {
  PageSections,
  PageSection,
  SectionBackground,
  Color,
} from '../../../lib/cms/cms-types';
import { Heading } from '../../atoms/typography/heading';
import { SectionColumns, SectionColumnsProps } from './column-section';

type Props = {
  section: PageSection;
};

const sectionComponents = {
  [PageSections.hero]: (props: HeroProps) => <Hero {...props} />,
  [PageSections.pageBuilderColumns]: (props: SectionColumnsProps) => (
    <SectionColumns {...props} />
  ),
};

type SectionWrapperProps = {
  background?: SectionBackground;
  textColor?: Color;
};

const SectionWrapper = styled.div<SectionWrapperProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-content: space-around;
  justify-content: space-around;
  background-color: ${(props) =>
    props.background?.color?.hex || props.theme.colors.backround};
  color: ${(props) => props.textColor?.hex || props.theme.colors.foreground};
`;

type SectionHeadingWrapperProps = {
  background?: SectionBackground;
  textColor?: Color;
};

const SectionHeadingWrapper = styled.div<SectionHeadingWrapperProps>`
  /* transform: rotate(90deg); */
  writing-mode: vertical-lr;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* padding-top: calc(${(props) => props.theme.spacing.padding} * 6); */
  /* text-align: right; */
  /* margin-top: calc(${(props) => props.theme.spacing.padding} * 6); */
  & * {
    background-color: ${(props) =>
      props.background?.color?.hex || props.theme.colors.backround};
    color: ${(props) => props.textColor?.hex || props.theme.colors.foreground};
    padding: calc(${(props) => props.theme.spacing.padding} * 2);
  }
`;

export function Section({ section }: Props): ReactElement {
  return (
    <SectionWrapper
      textColor={section.textColor}
      background={section.background}
      id={section.anchor}
    >
      {section.heading && (
        <SectionHeadingWrapper
          textColor={section.textColor}
          background={section.background}
        >
          <Heading level={section.heading.headingType}>
            {section.heading.text}
          </Heading>
        </SectionHeadingWrapper>
      )}
      {section.components.map((component) => {
        return sectionComponents[component.type]
          ? sectionComponents[component.type](component)
          : null;
      })}
    </SectionWrapper>
  );
}
