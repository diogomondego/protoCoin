import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity } from "react-native";

import Header from "../../components/Header";
import Row from "../../components/Row";

import { useCoin } from "../../hooks/coin";

import api from "../../services/api";
import colors from "../../utils/colors";
import { CoinData } from "../../utils/types";

import { Container, Content, Description, Title, LoadingView, ContentHeader, HeaderList, SeparatorList } from "./styles";

export default function Home() {
  const { coins, setCoins } = useCoin()
  const [loading, setLoading] = useState(false)

  // Renderizar lista de coins
  function _renderList(item: CoinData, key: number) {
    return (
      <TouchableOpacity>
        <Row item={item} number={key} />
      </TouchableOpacity>
    )
  }

  // Renderizar lista vazia de coins
  function _loadingList() {
    return (
      loading &&
        <LoadingView>
          <ActivityIndicator color={colors.text} size='large' />
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
        <HeaderList>
          <Row header />
        </HeaderList>
        <FlatList
          data={coins}
          keyExtractor={item => item.symbol}
          renderItem={({ item, index }) => _renderList(item, index)}
          ItemSeparatorComponent={() => <SeparatorList />}
          ListEmptyComponent={_loadingList}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
}
