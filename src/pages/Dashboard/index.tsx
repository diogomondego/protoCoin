import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import Header from "../../components/Header";
import { useCoin } from "../../hooks/coin";
import api from "../../services/api";
import colors from "../../utils/colors";
import { CoinData } from "../../utils/types";
import { Container, Content, Description, Title, LoadingView, ContentHeader } from "./styles";

export default function Home() {
  const { coins, setCoins } = useCoin()
  const [loading, setLoading] = useState(false)

  // Renderizar lista de coins
  function renderList(item: CoinData) {
    return (
      <Description>{item.symbol}</Description>
    )
  }

  // Renderizar lista vazia de coins
  function loadingList() {
    return (
      loading &&
        <LoadingView>
          <ActivityIndicator color={colors.gray_200} size='large' />
          <Title>Loading coins...</Title>
        </LoadingView>
        
    )
  }

  const fetchCoins = useCallback(async () => {
    try {
      setLoading(true)
      const { data } = await api.get('/v3/ticker/24hr')

      setCoins(data)
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCoins()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <ContentHeader>
          <Title>Nosso Catálogo</Title>
          <Description>Lista de Criptomoedas disponíveis para você</Description>
        </ContentHeader>
        <FlatList
          data={coins}
          keyExtractor={item => item.symbol}
          renderItem={({ item }) => renderList(item)}
          ListEmptyComponent={loadingList}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        />
      </Content>
    </Container>
  );
}
