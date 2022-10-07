import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Content = styled.View`
  padding: 0 20px;
  flex: 1;
`;

export const ContentHeader = styled.View`
  margin: 20px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.text};
`;

export const Description = styled(Title)`
  font-size: 14px;
`

export const LoadingView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;