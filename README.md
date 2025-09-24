![Cypress](https://github.com/diegoindio/govcnpj-insights/actions/workflows/cypress.yml/badge.svg)

# govcnpj-insights

 🏛️  Projeto de automação de testes com **Cypress** para validar a **API pública BrasilAPI (dados Gov.br)**.  
O objetivo é criar uma base sólida de testes automatizados (API-first) utilizando **Service Objects**, **fixtures** e **schema validation** com Ajv.  

---

## :clipboard: Objetivos da Fase 1

- Criar uma estrutura limpa de testes Cypress com **padrões de mercado**.  
- Implementar **Service Objects** para chamadas de API (Clean Code).  
- Validar respostas com **schemas JSON** (Ajv).  
- Usar **fixtures** para massa de dados (CNPJs válidos e inválidos).  
- Preparar o projeto para evoluir para **front-end + e2e** em fases futuras.  

---

## 🛠️ Tecnologias

- [Cypress](https://www.cypress.io/) – Testes E2E e API  
- [Ajv](https://ajv.js.org/) – Validação de schemas JSON  
- [BrasilAPI](https://brasilapi.com.br/) – API pública (dados oficiais Gov.br)  

---

## 📂 Estrutura

cypress-tests/  
├── e2e/ # Testes  
│ └── consultaCnpj.cy.js  
├── fixtures/ # Massa de dados  
│ └── cnpjs.json  
├── services/ # Service Objects (API)  
│ ├── cnpjService.js  
│ └── index.js  
├── utils/ # Schemas e helpers  
│ └── schemaCnpj.json  
└── cypress.config.js # Configuração Cypress

---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/<SEU_USUARIO>/govcnpj-insights.git
cd govcnpj-insights
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar Cypress em modo interativo

```bash
npx cypress open
```

### 4. Rodar Cypress em modo headless

```bash
npx cypress run
```

## ✅ Cenários implementados

- Consulta de CNPJ válido → valida **status 200** e schema.

- Consulta de CNPJ inválido → valida **status 404** e mensagem de erro.

---

## 🚦 Roadmap

- [x] Fase 1 – Automação de API (Cypress + Service Objects + Schema Validation).

- [ ] Fase 2 – Criação de API intermediária (Next.js API Routes).

- [ ] Fase 3 – Criação de interface web (Next.js + React).

- [ ] Fase 4 – Automação de UI com Cypress (Page Objects).

- [ ] Fase 5 – Integração CI/CD (GitHub Actions + Allure Reports).

---

👨‍💻 Autor: **Diego Gomes** – QA Engineer  
🔗 Fonte de dados: BrasilAPI
