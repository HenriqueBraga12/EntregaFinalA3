# Sotero Games - API

- API REST desenvolvida em Node.js com o Express e o SQLite.

## Instalando

### 1. Clone

```sh
git clone git@github.com:HenriqueBraga12/EntregaP1A3.git
```

### 2. Baixando dependências

```sh
npm install

yarn
```

## Iniciando o Projeto

### 1. Configurando variaveis de ambiente

```env
JWT_SECRET="8b20a05a5c63fc495616095087ac74f2"
BCRYPT_SALT=10
```

### 2. Iniciando projeto

```sh
npm start

yarn start
```

## Consultando Documentação Com Os Endpoints

- Para consultar a documentação da API é necessário instalar no Insomnia e importar o arquivo sotero-api-docs.json, ou instalar o Postman e importar o arquivo sotero-api-docs.postman_collection.json.

## Technologias utilizadas

- [Node.js](https://nodejs.org/en)
- [BCrypt](https://www.npmjs.com/package/bcryptjs)
- [JWT](https://jwt.io/)
- [SQLite](https://www.npmjs.com/package/sqlite3)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Cors](https://www.npmjs.com/package/cors)
