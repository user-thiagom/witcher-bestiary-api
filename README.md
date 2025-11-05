# 🐺 Witcher Bestiary API

API minimalista em Fastify que fornece um bestiário de monstros inspirado em The Witcher. Permite listar e consultar monstros armazenados em MongoDB.

## 📝 Descrição
API REST somente leitura (GET) para consultar monstros por nome, tipo e nível de perigo. Projetada para ser simples, leve e fácil de integrar em front-ends ou testes.

## 💻 Tecnologias
- Node.js (ESM)
- Fastify
- Mongoose
- MongoDB
- dotenv

## ⚙️ Funcionalidades
- Listar todos os monstros
- Buscar monstro por nome
- Filtrar monstros por tipo
- Filtrar monstros por nível de perigo
- Seeds para popular o banco (script incluído)

## ✅ Pré-requisitos
- Node.js (versão compatível com ESM)
- MongoDB acessível (local ou remoto)
- Arquivo `.env` com variáveis de ambiente

Exemplo .env:
```
DB_STRING_CONEXAO=mongodb://user:pass@host:port/dbname
PORT=3000
```

## 💾 Instalação
No diretório do projeto:
```powershell
npm install
```

## 🚀 Executar
```powershell
npm run start
# ou
node src/server.js
```

## 🗃️ Popular banco (seed)
```powershell
node src/seeds/seedMonsters.js
```

## 🔗 Endpoints (GET)
- GET /monstros  
  Retorna todos os monstros.

- GET /monstros/:nome  
  Busca um monstro pelo campo `nome`. Ex.: /monstros/leshen

- GET /monstros/tipo/:tipo  
  Retorna monstros do tipo especificado. Ex.: /monstros/tipo/espírito

- GET /monstros/perigo/:nivel  
  Retorna monstros pelo `nivelDePerigo`. Ex.: /monstros/perigo/alto

Observação: o Mongoose adiciona o campo `__v` (versionKey). Para não expor esse campo, remova com `{ versionKey: false }` no schema ou use `.select('-__v')` nas consultas.

## 📄 Licença
Consulte `package.json` para informações sobre licença.
