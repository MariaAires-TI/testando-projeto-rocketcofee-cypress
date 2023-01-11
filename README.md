
# Testando a homepage criada para marca de café - RocketCoffe - Cypress

Nesse projeto testo de forma independente a homepage que criei para marca de café, utilizando a ferramenta cypress. 


## Documentação do Projeto

#DESCRIÇÃO

O projeto rocketcoffe é uma página desenvolvida para uma marca de café, em que é possível
realizar pedidos dos produtos fornecidos pela amrca.

#PRÉ-REQUISITOS

Para realização dos testes é necessário ter instalado na máquina as seguintes ferramnentas:

- GIT 
- CYPRESS  
- VSCode
- Node.JS

#INSTALANDO AS FERRAMENTAS
- No terminal, dentro da página que irá trabalhar digite o comando: npm init –y
- Para instalar o cypress digite o comando: npm install cypress
- Para iniciar o cypress digite o comando npm run cypress:open

#CENÁRIOS ANALISADOS NOS TESTES
- Acesso a página principal - Central de Atendimento ao Cliente Great Coffe
- Verificar o título da aplicação
- Verificar se o formulário de pedidos abre em outra aba sem a necessidade de um clique
- Acesso a página de formulário de pedidos
- Verificar se ao clicar no botão home, o usuário é redirecionado para página inicial sem a necessidade de um clique
- Verificar o título da aplicação
- Preenche os campos obrigatórios e envia
- Exibe mensagem de sucesso quando o pedido é realizado
- Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios
- Exibe mensagem de erro quando a quantidade de café chocolatto não é selecionada
- Exibe mensagem de erro quando a quantidade de café chocolatto é selecionada, mas o café não está selecionado
- Exibe mensagem de erro quando a quantidade de café capuccino avelã não é selecionada
- Exibe mensagem de erro quando a quantidade de café capuccino avelã é selecionada, mas o café não está selecionado
- Exibe mensagem de erro quando a quantidade de café espresso não é selecionada
- Exibe mensagem de erro quando a quantidade de café espresso é selecionada, mas o café não está selecionado
- Exibe mensagem de erro quando a quantidade de café latte macchiato não é selecionada
- Exibe mensagem de erro quando a quantidade de café latte macchiato é selecionada, mas o café não está selecionado
- exibe mensagem de erro quando um email inválido é inserido


## Demonstração

![Demo](https://media.giphy.com/media/9vzs5xrVXW9EBD6QCp/giphy.gif "Demo")
