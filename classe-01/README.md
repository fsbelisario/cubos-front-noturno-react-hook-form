![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Criando posts

Utilizando a biblioteca `react-hook-form`:

**1)** Crie um formulário que contenha os seguintes campos: 
- Título (title)
- Corpo (body)
- ID do Usuário (userId)

**2)** Controle os campos do formulário seguindo os requisitos abaixo:
- Todos os campos são obrigatórios;
- O título tem tamanho mínimo de 5 caracteres;
- O corpo tem tamanho máximo de 30 caracteres;
- O ID do Usuário deverá ser um número;

**3)** Na submissão deste formulário, envie os dados para o seguinte recurso da API JSONPlaceholder:
[https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

Caso necessário, consulte a [documentação da API](http://jsonplaceholder.typicode.com/guide/)

**4)** Crie um componente chamado `<Input>` e troque os `<input>`s do seu formulários por este componente. Dito isso, será necessário controlar esse componente com o `react-hook-form`. Utilize qualquer uma das duas maneiras vistas em aula para controlar este componente.

**Extra**

**5)** Crie uma rota na sua aplicação (página) para cada rota da API JSONPlaceholder (GET, POST, PUT, DELETE). Cada página deverá ter seu próprio formulário. A página de GET pesquisará um recurso (por ID), a de POST criará um recurso, a de PUT atualizará um recurso e a dde DELETE deletará um recurso (por ID).

Caso necessário, consulte a [documentação da API](http://jsonplaceholder.typicode.com/guide/)

---

Preencha a checklist para finalizar o exercício:

- [X] Resolver o exercício
- [X] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [X] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [X] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `módulo 3` `React` `front-end`