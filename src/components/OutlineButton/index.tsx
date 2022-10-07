import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { 
  Container,
  Icon,
  Title,
} from './styles'

interface Props extends TouchableOpacityProps {
  title: string;
  icon: string;
}

export default function OutlineButton({
  icon,
  title,
  ...rest
}: Props) {
  return (
    <Container 
      {...rest}
    >
      <Icon 
        name={icon} 
      />
      <Title>{ title }</Title>
    </Container>
  )
}