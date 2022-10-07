import styled, { css } from "styled-components/native";
import colors from "../../utils/colors";

interface ColumnProps {
  flex?: number;
}

interface TitleProps {
  header?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`;

export const Column = styled.View<ColumnProps>`
  flex: 1;

  ${props => 
    props.flex && css`
      flex: ${props.flex};
    `
  }
`;

export const Title = styled.Text<TitleProps>`
  color: ${colors.text};

  ${props =>
    props.header && css`
      font-weight: bold;
    `
  }
`;