# MovieFlix
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/santosediego/movieflix/blob/main/LICENSE) 

## Sobre o projeto

MovieFlix é uma aplicação avaliativa do curso Bootcamp [DevSuperior](http://devsuperior.com/ "Página principal da DevSuperior").

A correção do trabalho se dará pela conferência no projeto publicado no GitHub, a conferência da estrutura do código, boas práticas e testes automatizados fornecidos.


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
- Java
- Spring Boot
- JPA / Hibernate
- Maven
- Oauth2
- Swagger
### Front-end
- HTML, CSS, JS, TypeScript
- ReactJS
- Axios
- Bootstrap, Saas
- React Router
- React Hook Form
## Implantação em produção
- Back-end: Heroku
- Banco de dados: Postgresql

## Como executar o projeto

### Back-end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/santosediego/movieflix.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```
### Front-end
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/santosediego/movieflix.git

# entrar na pasta do projeto front web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

## Autor

[Diego Santos](https://www.linkedin.com/in/santosediego/ "Perfil Linkedin Diego Santos")
