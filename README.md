# MovieFlix

[![Licença](https://img.shields.io/github/license/santosediego/movieflix?style=for-the-badge)](https://github.com/santosediego/movieflix/blob/main/LICENSE)

![Java](https://img.shields.io/badge/java_11-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/spring_boot_2.4-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white)
![Spring Security](https://img.shields.io/badge/spring_security-%236DB33F.svg?style=for-the-badge&logo=springsecurity&logoColor=white)
![Maven](https://img.shields.io/badge/maven-%23C71A36.svg?style=for-the-badge&logo=apachemaven&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgresql-%234169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![JUnit5](https://img.shields.io/badge/junit5-%2325A162.svg?style=for-the-badge&logo=junit5&logoColor=white)

![React](https://img.shields.io/badge/react_18-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap_5-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Sass](https://img.shields.io/badge/sass-hotpink.svg?style=for-the-badge&logo=sass&logoColor=white)

## Sobre o projeto

MovieFlix é uma aplicação avaliativa do curso Bootcamp [DevSuperior](http://devsuperior.com/ "Página principal da DevSuperior"). Back-end e front-end foram desenvolvidos por mim do início ao fim, e o back-end é validado por uma suíte de testes de integração fornecida pelo curso.

O layout segue o [protótipo no Figma](https://www.figma.com/design/cOjZ9zvM7U9hrZrL3AReSA/Desafio-MovieFlix?node-id=0-1&p=f) fornecido pelo curso, e o back-end não está mais publicado online. Para ver o sistema funcionando, execute-o localmente (veja [Como executar o projeto](#como-executar-o-projeto)).

> **Nota:** a autenticação usa o Spring Security OAuth legado (`spring-security-oauth2-autoconfigure`), padrão da época do curso. Para uma implementação moderna de autenticação com JWT, veja o [spring-security-jwt-flat](https://github.com/santosediego/spring-security-jwt-flat).

## Telas

![Listagem de filmes](https://github.com/santosediego/assets/blob/main/movieFlix/movieflix_login.png)
![Listagem de filmes](https://github.com/santosediego/assets/blob/main/movieFlix/movieflix_listagem.png)
![Detalhes do filme e avaliações](https://github.com/santosediego/assets/blob/main/movieFlix/movieflix_detalhes.png)

## Visão geral do sistema

O sistema MovieFlix consiste em um banco de filmes, os quais podem ser listados e avaliados pelos usuários. Usuários podem ser visitantes (VISITOR) e membros (MEMBER). Apenas usuários membros podem inserir avaliações no sistema.

Ao acessar o sistema, o usuário deve fazer seu login. Apenas usuários logados podem navegar nos filmes. Logo após fazer o login, o usuário vai para a listagem de filmes, que mostra os filmes de forma paginada, ordenados alfabeticamente por título. O usuário pode filtrar os filmes por gênero.

Ao selecionar um filme da listagem, é mostrada uma página de detalhes, onde é possível ver todas informações do filme, e também suas avaliações. Se o usuário for usuário membro, ele pode ainda registrar uma avaliação nessa tela.

Um usuário possui nome, email e senha, sendo que o email é seu nome de usuário. Cada filme possui um título, subtítulo, uma imagem, ano de lançamento, sinopse, e um gênero. Os usuários membros podem registrar avaliações para os filmes. Um mesmo usuário membro pode deixar mais de uma avaliação para o mesmo filme.

### Modelo conceitual
![Modelo Conceitual](https://github.com/santosediego/assets/blob/main/movieFlix/movieFlix_modelo_conceitual.png)

## Casos de uso

```
Efetuar login
    1. [IN] O usuário anônimo informa seu email e senha
    2. [OUT] O sistema informa um token válido
Listar filmes
    1. [OUT] O sistema apresenta uma listagem dos nomes de todos gêneros, bem como uma listagem paginada com título, subtítulo, ano e imagem dos filmes, ordenada alfabeticamente por título.
    2. [IN] O usuário visitante ou membro seleciona, opcionalmente, um gênero.
    3. [OUT] O sistema apresenta a listagem atualizada, restringindo somente ao gênero selecionado.
Visualizar detalhes do filme
    1. [IN] O usuário visitante ou membro seleciona um filme
    2. [OUT] O sistema informa título, subtítulo, ano, imagem e sinopse do filme, e também uma listagem dos textos das avaliações daquele filme juntamente com nome do usuário que fez cada avaliação.
    3. [IN] O usuário membro informa, opcionalmente, um texto para avaliação do filme.
    4. [OUT] O sistema apresenta os dados atualizados, já aparecendo também a avaliação feita pelo usuário.

Exceção 3.1 - Texto vazio
3.1.1. O sistema apresenta uma mensagem de que não é permitido texto vazio na avaliação
```

## Tecnologias utilizadas
### Back-end
- Java 11
- Spring Boot 2.4
- Spring Data JPA / Hibernate
- Spring Security + OAuth2
- Bean Validation
- Maven
- Swagger (Springfox 2.9.2)
- PostgreSQL (e H2 para execução local/testes)
- JUnit 5, Spring Boot Test e MockMvc (testes de integração)
### Front-end
- HTML, CSS, JS, TypeScript
- ReactJS 18
- Axios
- Bootstrap 5, Sass
- React Router
- React Hook Form
- React Select
- React Paginate
- React Toastify
- JWT Decode
- Testing Library

## Como executar o projeto

O back-end tem três perfis, escolhidos pela variável de ambiente `APP_PROFILE`:

| Perfil | Banco | Uso |
|--------|-------|-----|
| `test` (padrão) | H2 em memória, já populado pelo `data.sql` | Experimentar o sistema localmente, sem instalar nada além do Java |
| `dev` | PostgreSQL local (`bd_movieflix`) | Desenvolvimento com banco real |
| `prod` | Definido por variáveis de ambiente | Produção (`DATABASE_URL`, `CLIENT_ID`, `CLIENT_SECRET`, `JWT_SECRET`, `JWT_DURATION`) |

Os perfis `test` e `dev` usam credenciais de desenvolvimento. No `prod`, nenhum segredo fica no código: tudo vem de variáveis de ambiente.

No perfil padrão, o console do H2 fica disponível em `/h2-console` (JDBC URL `jdbc:h2:mem:testdb`, usuário `sa`, sem senha).

### Usuários de teste

| Nome | E-mail | Senha | Perfil |
|------|--------|-------|--------|
| Ana | ana@gmail.com | 123456 | MEMBER (pode avaliar) |
| Bob | bob@gmail.com | 123456 | VISITOR (apenas consulta) |

### Back-end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/santosediego/movieflix.git

# entrar na pasta do projeto back end
cd movieflix/backend

# executar o projeto (perfil test, com H2)
./mvnw spring-boot:run
```

#### Usando o PostgreSQL (perfil dev)

O projeto não traz o script de criação das tabelas (`ddl-auto=none`), então é preciso gerá-lo:

1. Crie o banco `bd_movieflix` no PostgreSQL local (usuário e senha `postgres`, conforme o `application-dev.properties`).
2. No `application-dev.properties`, descomente as quatro linhas `schema-generation` / `hbm2ddl.delimiter` e execute o projeto uma vez. Ele gera o arquivo `create.sql`.
3. Execute o `create.sql` no banco e depois o `data.sql` do projeto para popular os dados. Depois, comente as linhas novamente.
4. Execute com o perfil `dev`:

```bash
# Linux / macOS
APP_PROFILE=dev ./mvnw spring-boot:run

# Windows (PowerShell)
$env:APP_PROFILE="dev"; ./mvnw spring-boot:run
```

### Front-end
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/santosediego/movieflix.git

# entrar na pasta do projeto front web
cd movieflix/front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

## Testes

O back-end é validado por testes de integração (JUnit 5, Spring Boot Test e MockMvc), que cobrem:

- **Autenticação:** obtenção de token OAuth2 e retorno 401 para requisições sem token.
- **Autorização por perfil:** visitantes (VISITOR) apenas consultam, e membros (MEMBER) podem avaliar. O visitante recebe 403 ao tentar avaliar.
- **Filmes:** listagem paginada, ordenação por título, filtro por gênero, detalhes do filme com avaliações e 404 para filme inexistente.
- **Avaliações:** criação por membro autenticado (201, com os dados do usuário na resposta) e validação de texto vazio (422).

Para executá-los (usam o banco H2):

```bash
cd movieflix/backend
./mvnw test
```

## Autor

[Diego Santos](https://www.linkedin.com/in/santosediego/ "Perfil Linkedin Diego Santos")
