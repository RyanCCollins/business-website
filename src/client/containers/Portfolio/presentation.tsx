import * as React from 'react';
import { Box, Headline, Image, WithAnimation } from 'ui';
import { Props } from './types';
import Hr from './hr';
import Overlay from './overlay';

function PortfolioItems({
  items,
  isMounted,
}) {
  return (
    <Box flexWrap justifyContent="space-around" style={{ maxWidth: 1800 }} flexDirection="row">
      {items.map((item, i) =>
        <WithAnimation delay={(i + 1) * 100} type="fadeInUp" isVisible={isMounted}>
          <PortfolioItem {...item} />
        </WithAnimation>,
      )}
    </Box>
  );
}

function PortfolioItem({
  title,
  image,
}) {
  return (
    <Box style={{ maxWidth: 600 }} pad="large">
      <div style={{ position: 'relative' }}>
        <Overlay>
          <p>{title}</p>
        </Overlay>
        <Image src={image} alt={title} />
      </div>
    </Box>
  );
}

export default class Presentation extends React.Component<Props, undefined> {
  public render() {
    const {
      isMounted,
      theme,
      data: {
        items,
      },
    } = this.props;
    return (
      <Box alignItems="center" boxSize="full" backgroundColor={theme.offwhite}>
        <Box pad="large" alignItems="center">
          <Headline color="#666" fontWeight={700}>Case Studies</Headline>
          <Hr color="#666" />
        </Box>
        <PortfolioItems isMounted={isMounted} items={items} />
      </Box>
    );
  }
}
