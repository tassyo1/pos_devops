# Define a imagem base do Node.js
FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

#Define o diretório de trabalho dentro do conteiner
WORKDIR /home/node/app

#Copia os arquivos de código-fonte para o diretório de trabalho
COPY package*.json ./


USER node

# Instala as dependências do Node.js
RUN npm install

#Copia o resto dos arquivos do servidor
#COPY . .
COPY --chown=node:node . .

# Expõe a porta 8080
EXPOSE 8080

# Executa o comando para iniciar o servidor Express
CMD ["node", "server.js"]