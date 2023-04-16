import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: calc(100vh - 50px); 
  padding-top:80px;
`;

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
