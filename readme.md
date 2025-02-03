#Hair day

Projeto realizado através do curso de Javascript (Formação FullStack) da [Rocketseat](https://app.rocketseat.com.br/).

O objetivo desse projeto é aplicar todos os **conceitos de Javascript** antes de trabalhar com um framework ou biblioteca como o React.

Dessa forma, foi trabalhado com vários conceitos avançados do Javascript, e também com a inclusão de pacotes para manter o projeto ainda mais completo.

##Pacotes instalados
* json-server
```
npm install json-server@1.0.0-alpha.21
npm run server
```
* Webpack
```
npm install webpack@5.89.0 webpack-cli@5.1.4 --save-dev
npm run build
```
* Webpack Server
```
npm install webpack-dev-server@4.15.1 --save-dev
npm install html-webpack-plugin@5.6.0 --save-dev
npm install style-loader@3.3.3 css-loader@6.8.1
--save-dev
```
* Babel
```
npm install babel-loader@9.1.3 @babel/core@7.23.7 @babel/preset-env@7.23.7 --save-dev
```
* Day.js
`npm install dayjs@1.11.10`

##Resumo do projeto
Esse projeto é uma simulação de agendamentos de serviço de corte de cabelo em um salão de beleza Hair Day.
O usuário tem a possibilidade de visualizar os horários disponíveis no salão para poder agendar um corte de cabelo. Caso o horário já esteja agendado, ele deve escolher outro.
Além disso, ele pode cancelar seus agendamentos.

##Conceitos utilizados
Foi realizado várias manipulações dentro do formulário junto com o pacote day.js para disponibilizar as datas no presente momento (e não do passado), e também para verificar agendamentos que já estão registrados para que o cliente não marque no mesmo que outro.

Todos os dados de agendamentos são jogados para a API para realizar consultas e retornar para a tela as disponibilidades. Assim como, realizar exclusões (cancelamentos) de horários.