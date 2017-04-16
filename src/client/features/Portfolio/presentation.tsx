import * as React from 'react';
import { Box, Headline } from 'ui';
import { CaseStudies } from 'components';
import { Props } from './types';
import Hr from './hr';

export default function Presentation({
  theme,
  projects,
}: Props) {
  return (
    <Box alignItems="center" backgroundColor={theme.offwhite}>
      <Box pad="large" alignItems="center">
        <Headline color="#666" fontWeight={700}>Case Studies</Headline>
        <Hr color="#666" />
      </Box>
      {projects &&
        <CaseStudies items={projects} />
      }
    </Box>
  );
}
