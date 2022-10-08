# Proto Coin 🏅

## Introdução

Como proposta de caso de uso, tem-se que a Proto Coin necessita de uma solução que monitore a flutuação de criptomoedas para ajudar na compra de transação de valores.

Como requisitos, a aplicação deve ser capaz de listar, buscar e expandir os dados disponíveis. Para isso, ela deve consumir a API da Binance.

## Tecnologias

- Utilizado o framework React Native para desenvolvimento da aplicação.
- Por ser uma aplicação que não necessita de recursos nativos, foi-se utilizado o framework Expo Managed (gerenciado) para uma experiência de desenvolvimento mais aprimorada.
- Para o desenvolvimento da interface e sua estilização, foi-se utilizado a lib Styled Components.
- Para uma possível navegação entre telas, foi-se utilizado a lib React Navigation.
- A linguagem utilizada para desenvolvimento é o Typescript.

## Desenvolvimento

- Por um dos requisitos ser a autenticação, foi-se utilizado o Firebase Authentication para assim que o usuário acessar o App ele possa cadastrar-se com e-mail e senha.
- Uma parte importante da aplicação no primeiro momento é o monitoramento das criptomoedas. Por isso, ela foi desenvolvida primeiro.
- Para controle de dados, o gerenciamento de estado nativo do React, a Context API, foi utilizada para controlar fluxo de autenticação e controle de dados das criptomoedas.
- Para validação de formulário, a lib Unform e a Yup, foram utilizadas em conjunto.
- A tabela das criptomoedas tem uma tela interna que leva aos dados mais detalhados da moeda. Nesta interna também há a possibilidade de compra. No entanto, essas funcionalidades não entraram nesta primeira entrega.
- Outro requisito desta aplicação é a Carteira, por onde o usuário pode realizar transações financeiras. Nesta primeira entrega a Carteira não entrou no escopo.

## Intruções
### Clone o projeto
```
git clone https://github.com/diogomondego/protoCoin.git
```

### Acesse a pasta do projeto
```
cd protoCoin
```

### Instale as dependências
```
yarn install
```
> ou
```
npm install
```

### Inicie o Metro Bundler
```
yarn start
```
> ou
```
npm start
```
> ou
```
expo start
```
