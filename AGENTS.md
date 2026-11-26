# AGENTS.md

## Propósito

Clone do [TabNews](https://www.tabnews.com.br), plataforma brasileira de conteúdo sobre tecnologia. O projeto serve para estudo e usa IA como apoio.

## Stack

- Next.js (App Router) com React
- JavaScript puro, sem TypeScript
- npm como gerenciador de pacotes

## Comandos

- `npm run dev`: inicia o servidor de desenvolvimento em http://localhost:3000
- `npm run build`: gera o build de produção
- `npm start`: serve o build de produção
- `npm run lint`: roda o ESLint no projeto
- `npm run format`: formata os arquivos com o Prettier
- `npm run format:check`: verifica a formatação sem alterar arquivos

Ao executar qualquer tarefa que altere código, rode `npm run format`, depois `npm run lint` e `npm run format:check`. Corrija os problemas antes de dar a tarefa por concluída.

## Convenções

- Commits seguem o padrão conventional commits.
