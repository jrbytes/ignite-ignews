![Exemplo do App](/assets/example.png)

# ig.news

## Fundamentos do Next.js  
Na parte de *coding* para facilitar a programação foi incrementado o **TypeScript**, isto facilita a manutenibilidade do código futuramente, explicita quais as propriedades serão utilizadas dentro de um componente ou página.  
No estilos da página, optei por utilizar **SASS** porque ele deixa o código mais limpo sem precisar abrir chaves e usar o ponto e vírgula no final de cada propriedade *CSS*.  
Na integração com API Stripe, onde é possível fazer requisições, buscar dados de outro servidor. Foi apresentado o poder do Next:  
* SSR (Server Side Rendering), onde os dados são renderizados e mostrados em tela sempre de forma estática, junto com o restante dos dados. Isso o torna capaz de ser indexado no SEO. No caso desse APP, foi utilizado para retornar o valor do produto junto ao restante da página, senão os mecanismos de indexação não encontrariam o valor, por ser um dado dinâmico gerado pelo JavaScript após o carregamento da página.  
* SSG (Static Site Rendering), onde os dados são renderizados no servidor uma única vez, e armazenado como página estática, assim é possível criar uma regra de negócio que o atualizará quando necessário. No caso de uso desse APP, o SSG poderia melhorar a performance, porque não precisaria necessariamente fazer uma requisição a outro servidor para buscar o valor a cada acesso que a página receber.  
## Back-end no Front-end
Dentro da pasta `api` que fica dentro da pasta `pages` existe as funcionalidades de back-end, é possível criar as rotas e configurar conforme as regras de negócio.  
O banco de dados utilizado foi FaunaDB, não relacional.

## JAMStack

Headless CMS (Painel de administração + API HTTP, GraphQL, SDK)
Prismic CMS

Live long and prosper! 🖖  

## Guia de uso

1. Instalar dependências com `yarn` na linha de comando.
2. Duplicar arquivo `.env.local.example`, preencher as chaves dos serviços e renomear para `.env.local`.
3. Conferir a requisição do método *Stripe.PricesResource.retrieve()*. que pede o id do produto gerado pelo Stripe.
4. Executar o Stripe CLI em modo de desenvolvimento. Para ouvir o webhooks de pagamento. Em produção utiliza-se o link da rota.
5. Executar o servidor com `yarn dev`.
6. Acessar a página de debug `localhost:3000`.
