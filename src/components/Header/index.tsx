import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Container, Content, HeaderLogo } from './styles';

import logo from '../../assets/logo.png';

export default function Header () {
  return (
    <Container>
      <StatusBar style='light' />
      <Content>
        <HeaderLogo source={logo} resizeMode='cover' />
      </Content>
    </Container>
  );
};