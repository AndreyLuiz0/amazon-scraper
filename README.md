Este projeto é uma aplicação de scraping simples que permite buscar produtos na Amazon e exibir informações sobre eles, como título, classificação, número de avaliações e imagem.

Utilizado
Backend: Node.js, Express, Axios, JSDOM

Frontend: Vite, HTML, CSS, JavaScript Vanilla

CORS: Permite que o frontend se comunique com o backend localmente

Para Rodar o Projeto
1. Clonar o Repositório

Copiar
Editar
git clone <link-do-repositorio>
cd amazon-scraper

2. Backend (Node.js)
2.1 Instalar Dependências

Copiar
Editar
cd backend
npm install
2.2 Rodar o Backend

Copiar
Editar
npm start
O servidor backend irá rodar na porta 3000. Você verá uma mensagem como:

Copiar
Editar
Server running at http://localhost:3000

3. Frontend (Vite)
3.1 Instalar Dependências

Copiar
Editar
cd frontend
npm install

3.2 Rodar o Frontend

Copiar
Editar
npm run dev
O servidor frontend irá rodar na porta 5173 (ou outra, caso essa já esteja em uso).

4. Como Usar
Acesse http://localhost:5173 no seu navegador.

Insira um termo de pesquisa no campo de texto.

Clique no botão "Search" para ver os resultados da pesquisa.

O frontend irá chamar o backend, que irá fazer o scraping da Amazon e exibir os produtos encontrados.

Proxy de API (Vite)
O frontend foi configurado para redirecionar automaticamente as requisições para a API do backend, utilizando um proxy no arquivo vite.config.js. Isso significa que você pode fazer requisições para /api/scrape?keyword=... sem precisar se preocupar com o localhost:3000.

Obs
Certifique-se de que o backend está rodando corretamente antes de fazer as requisições.

Se o frontend não conseguir se comunicar com o backend, verifique se o CORS está corretamente configurado no servidor.

Este projeto foi feito para fins educacionais e pode ser modificado conforme necessário.

Possíveis Erros:
Failed to Fetch: Verifique se ambos os servidores (frontend e backend) estão rodando corretamente. Certifique-se também de que o CORS está configurado.

CORS Policy Blocked: Isso ocorre quando o navegador bloqueia a requisição devido a uma política de segurança. Se isso ocorrer, verifique a configuração do proxy ou do CORS.
