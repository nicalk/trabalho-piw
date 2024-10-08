# :checkered_flag: LOJA DE SUPLEMENTOS

Uma loja online de suplementos

## :technologist: Membros da equipe

- 514745, Gabriel Okidoi e DD
- 514496, Lázaro Freitas e DD
- 509529, Mônica Krieger e DD

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

Cliente não logado, cliente logado, cliente premium (sistema de ganho de pontos) e vendedor (cadastra produtos)

## :spiral_calendar: Entidades ou tabelas do sistema

Usuários e produtos (suplementos)

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

- Usuários poderão pesquisar por suplementos (acessével a todos os clientes)
- Usuários podem filtrar os produtos (acessével a todos os clientes)
- Usuários podem acresentar produtos a lista de desejos (acessével a clientes logados)
- Usuários podem acresentar produtos ao carinho (acessével a todos os clientes)
- ~~O vendedor da loja pode adicionar suplementos~~
- ~~Clientes premium podem conferir quantidade de pontos e progresso até o próximo brinde~~

----

:warning::warning::warning: As informações a seguir devem ser enviadas juntamente com a versão final do projeto. :warning::warning::warning:


----

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

Vue, Vuetify, Typescript

**Backend:**

Node, Express, TypeOrm, SqLite, Typescript


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Usuario | X |  X  | X | X |
| Produto | X |  X  |  X | X |
| Carrinho | X | X   |  X | X |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| GET | localhost:8000/usuarios
| POST | localhost:8000/usuarios
| PUT | localhost:8000/usuarios?id
| DELETE | localhost:8000/usuarios?id

| Método HTTP | URL |
| --- | --- |
| GET | localhost:8000/produtos
| POST | localhost:8000/produtos
| PUT | localhost:8000/produtos
| DELETE | localhost:8000/produtos

| Método HTTP | URL |
| --- | --- |
| GET | localhost:8000/carrinho
| POST | localhost:8000/carrinho
| PUT | localhost:8000/carrinho
| DELETE | localhost:8000/carrinho
