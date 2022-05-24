import React from 'react';
import styled from 'styled-components';

const Header = ({ title }) => {
  return (
    <HeaderDiv>
      <h1>{title}</h1>
    </HeaderDiv>
  );
};

Header.defaultProps = {
  title: 'Feedback UI',
};

export default Header;

const HeaderDiv = styled.div`
  align-items: center;
  background-color: #2e0249;
  color: #f806cc;
  display: flex;
  font-family: 'Noto Sans', sans-serif;
  height: 60px;
  justify-content: center;
`;
