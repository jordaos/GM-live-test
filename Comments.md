# Anotações

- Pensando na estrutura do projeto (baseando-se em outros projetos)
- Adicionar componente de interface (bootstrap v3)
- Adicionando REDUX
  - Baseando-se na arquitetura de outros projetos
  - Dificuldades iniciais para adicionar o redux
- Separando páginas e components
- Criando páginas estilizadas
- Adicionando lista para mostrar os repositórios
  - Componente não renderiza a lista que é retornada pela requisição via AXIOS
  - Buscando como resolver esse problema. Sem sucesso até agora
    - Motivo: a lista é atualizada no state, mas não atualiza no prop do outro component
- Adicionando Google Maps
- Mostrando informações do usuário
- Listar repositórios funcionou. Passei a armazenas a lista no Redux.

- Tantando fazer login com a API do github. Não deu certo, pois sempre exibia um erro de CORS, o qual não consegui resolver. Esse erro deu mesmo quando subi a aplicação para o github Pages.
- Fazendo testes. Nenhum problema aqui.