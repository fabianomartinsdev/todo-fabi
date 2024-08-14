Projeto para treino do fetch api, ao clicar no botão de adicionar tarefa, uma função é disparada acionando o método Fetch API enviando sua task para o banco de dados. Ao clicar em no ícone de lixeira, a tarefa é removida do banco.

## Pra testar o projeto:

Inicie o servidor de desenvolvimento com:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu browser.

Inicie o fake backend com json-server com:

```bash
npm run backend
```

Pronto. Basta adicionar e remover suas tarefas da maneira que desejar!

## Falta:

- Limpar o input quando a tarefa é enviada.
- Ao clicar na tarefa, alterar a cor do texto para sinalizar que tarefa foi concluída.
- Adicionar um modal para preenchimento de tarefa, adicionar data/hora e outras opções para personalização.
