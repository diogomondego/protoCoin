import styled, { css } from 'styled-components/native';

import colors from '../../utils/colors';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isFilled: boolean;
  width?: number;
  background?: string;
  height?: number;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;
  padding: 2px 10px 0 10px;
  border-width: 1px;
  border-color: ${colors.gray_400};
  border-radius: 6px;
  margin-bottom: 16px;
  overflow: hidden;

  ${props =>
    props.width &&
    css`
      width: ${props.width}%;
    `};

  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `};

  ${props =>
    props.isFilled &&
    css`
      border-color: ${colors.gray_400};
    `};

  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.danger};
    `};

  ${props =>
    props.isFocused &&
    css`
      border-color: ${colors.secondary};
    `};

  ${props =>
    props.background &&
    css`
      background: ${props.background};
    `};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding: 0 5px;
  align-items: center;
  justify-content: center;
  color: ${colors.gray_400};
  font-size: 14px;
  margin-top: 10px;
`;

export const IconContainer = styled.View`
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 10px;
`;