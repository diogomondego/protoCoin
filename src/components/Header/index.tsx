import React from 'react';

import { Container, Content } from './styles';

import Logo from '../Logo';

export default function Header () {
  return (
    <Container>
      <Content>
        <Logo />
      </Content>
    </Container>
  );
};