## Spotify Wrapper
Um wrapper para trabalhar com a API Web do Spotify.

### Rodando testes:
````
yarn test:tdd
````

#### Obtendo o token do spotify 
- crie uma conta no dev.spotify e um app.
Tendo acesso aos dados do app, copie o client_id e o client_secret
- copie e cole no terminal o codigo abaixo 
```
curl -X POST "https://accounts.spotify.com/api/token" -H "Content-Type: application/x-www-form-urlencoded" -d "grant_type=client_credentials&client_id=CODIGOAQUI&client_secret=CODIGOAQUI"

```
Retorná o token, crie um arquivo ```.env``` na raiz e adicione a chave TOKEN=CODIGOAQUI

#### Rodando um exemplo
- Entre na pasta examples e rode no terminal:
````
npx babel-node examples/albuns.js
````



### Criando um lib do tipo UMD
````
yarn clean && yarn build:umd --stats-error-details
```````