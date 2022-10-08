import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.primary};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const Content = styled.View`
  padding: 15px 0;
`;