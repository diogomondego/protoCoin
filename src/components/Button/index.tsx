import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'

import {
  Container,
  Icon,
  Title,
} from './styles'

interface Props extends TouchableOpacityProps {
  title: string;
  icon: keyof typeof Feather.glyphMap;
}

export default function Button({
  icon,
  title,
  ...rest
}: Props) {
  return (
    <Container
      {...rest}
    >
      <Title>{title}</Title>
      <Icon
        name={icon}
      />
    </Container>
  )
}