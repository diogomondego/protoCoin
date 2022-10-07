import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from "../../utils/colors";

export const Container = styled(TouchableOpacity)`
  padding: 10px;

  align-items: center;
  justify-content: center;

  border: 1px solid ${colors.secondary};
  border-radius: 5px;
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  color: ${colors.secondary};
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${colors.secondary};
`;