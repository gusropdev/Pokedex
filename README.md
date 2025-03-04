# Pokédex
Um projeto de Pokédex desenvolvido em React que consome a [PokeAPI](https://pokeapi.co/) para exibir informações sobre Pokémon. O projeto inclui uma interface responsiva com cards para cada Pokémon, exibindo seu nome, imagem e tipos.

## Funcionalidades

- Listagem dos primeiros 50 Pokémon.
- Carregamento dinâmico de mais Pokémons ao rolar a página (infinite scroll).
- Filtro de Pokémon por nome.
- Cards responsivos com informações dos tipos e nome.

## Tecnologias utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Material-UI**: Biblioteca de componentes estilizados para React.
- **Axios**: Cliente HTTP para fazer requisições à PokeAPI.


## Próximos passos

- Verificar se o método axios.all é o ideal para a aplicação (FEITO)

- Adicionar funcionalidade de pesquisa de modo que funcione pra todos os Pokémons, não só os presentes na lista/página (possibilidade de refatoração de código)
      - Possibilidade de busca por Id
      - Sugestões de busca

- Arrumar chamadas múltiplas de getPokemons pois foi resolvido na gambiarra usando o Set para não aparecerem Pokemons duplicados - (FEITO)

- Home button no ícone do Pokemon

- Melhorar estilo da search bar

- Redirecionamento para uma nova página de cada Pokemon com especificações dele

- Integração com Backend próprio usando .NET(+++)