import { CoinData } from "../../utils/types";
import OutlineButton from "../OutlineButton";
import { Container, Column, Title } from "./styles";

interface Props {
  item?: CoinData;
  number?: number | string;
  header?: boolean;
}

export default function Row({ 
  item = {} as CoinData, 
  number = '#', 
  header,
}: Props) {
  if (header) {
    item.symbol = 'Nome'
    item.lastPrice = 'Preço'
  }

  return (
    <Container>
      <Column flex={0.5}>
        <Title header={header}>{number}</Title>
      </Column>
      <Column>
        <Title header={header}>{item.symbol}</Title>
      </Column>
      <Column>
        <Title header={header}>{item.lastPrice}</Title>
      </Column>
      <Column>
        {!header &&
          <OutlineButton title="Comprar" icon="download" />
        }
      </Column>
    </Container>
  );
};