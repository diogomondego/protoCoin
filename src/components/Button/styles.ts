import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from "../../utils/colors";

export const Container = styled(TouchableOpacity)`
  padding: 15px 10px;

  align-items: center;
  justify-content: center;

  border-radius: 5px;
  background-color: ${colors.secondary};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
  font-weight: bold;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${colors.primary};
  position: absolute;
  right: 10px;
`;