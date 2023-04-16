import React from 'react';
import { Container, Heading, Text } from './Portfolio.styles';

import PageWrapper from '../../components/shared/PageWrapper';

const Portfolio = () => {
  return (
    <PageWrapper>
      <Heading>Your Heading Here</Heading>
      <Text>
        Your text content goes here. You can use this component to display text
        with the styles defined in the .styles.ts file.
      </Text>
      {/* Add more components and content as needed */}
    </PageWrapper>
  );
};

export default Portfolio;
