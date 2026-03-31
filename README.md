# 📚 Sistema de Matrícula de Cursos

Este projeto é uma aplicação web simples que permite realizar matrículas em cursos online. O usuário pode selecionar um curso, preencher seus dados e enviar a matrícula, que é processada por uma API backend.

---

## 🚀 Tecnologias utilizadas

### Frontend

* Vue.js
* Vite
* TypeScript

### Backend

* Node.js
* Express.js
* TypeScript

---

## 📂 Estrutura do projeto

```
vue-project
│
├── backend
│   ├── src
│   │   ├── routes
│   │   │   ├── cursos.ts
│   │   │   └── matricula.ts
│   │   └── server.ts
│   └── package.json
│
├── src
│   ├── components
│   │   └── FormularioMatricula.vue
│   └── App.vue
│
└── package.json
```

---

## ⚙️ Funcionalidades

* Listar cursos disponíveis
* Realizar matrícula
* Validação de campos obrigatórios
* Comunicação entre frontend e backend via API
* Exibição de mensagem de sucesso ou erro

---

## 🔌 Rotas da API

### 📥 Listar cursos

```
GET /cursos
```

### 📝 Criar matrícula

```
POST /matricula
```

### 📄 Listar matrículas

```
GET /matriculas
```

---

## ▶️ Como executar o projeto

### 1️⃣ Clonar o repositório

```
git clone https://github.com/seu-usuario/vue-project.git
```

---

### 2️⃣ Instalar dependências

#### Frontend

```
npm install
```

#### Backend

```
cd backend
npm install
```

---

### 3️⃣ Rodar o backend

```
cd backend
npm run dev
```

Servidor disponível em:

```
http://localhost:3000
```

---

### 4️⃣ Rodar o frontend

```
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

## 🧪 Exemplo de uso

1. Acesse a aplicação no navegador
2. Preencha o formulário de matrícula
3. Envie os dados
4. O backend processa a requisição
5. Uma mensagem de sucesso será exibida

---

## 📌 Observações

* A pasta `node_modules` não está incluída no projeto
* Para instalar as dependências, utilize `npm install`
* O projeto utiliza TypeScript tanto no frontend quanto no backend

---

## 📚 Aprendizados

Este projeto demonstra:

* Integração entre frontend e backend
* Criação de APIs com Express
* Uso de Vue.js para interfaces reativas
* Envio de requisições HTTP com `fetch`
* Estrutura básica de um projeto fullstack

---

## 👨‍💻 Autor

Desenvolvido por Davi Rafá Spinello Moreno 🚀

---


