# FormFacho

# Submissão Automática de Formulário Google

Este projecto usa JavaScript e a biblioteca Axios para submeter automaticamente um formulário Google. Foi criado como uma medida de resposta a um indivíduo que procura atormentar a comunidade LGBT.

## Funcionamento

O script gera dados aleatórios usando a biblioteca `faker` e preenche os campos do formulário Google. Em seguida, usa a biblioteca `axios` para submeter o formulário automaticamente. Este processo é repetido a cada 3 segundos.

## Dependências

Este projecto usa as seguintes bibliotecas:

- `faker`: para a geração de dados aleatórios.
- `axios`: para enviar pedidos HTTP.

## Utilização

1. Certifique-se de que tem [Node.js](https://nodejs.org/) instalado no seu computador.
2. Clone o repositório para o seu computador.
3. Navegue até à pasta do projecto e instale as dependências usando o comando `npm install`.
4. Execute o script com o comando `node index.js`.

## Aviso

Este script faz um pedido HTTP real ao Formulário Google no URL gerado, o que pode ser interpretado como spam se feito de forma excessiva.

