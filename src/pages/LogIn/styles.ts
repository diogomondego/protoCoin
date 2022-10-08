import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
  padding: 0 25px;
  flex: 1;
  background: ${colors.background};
  justify-content: center;
`;

export const Content = styled.View`
  background-color: ${colors.primary};
  padding: 50px 25px;
  border-radius: 50px;
`;

export const HeaderLogo = styled.View`
  align-items: center;
  margin-bottom: 50px;
`;