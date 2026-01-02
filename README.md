# MCP Client

Este repositório contém um **MCP Client**, um cliente em Node.js com TypeScript responsável por interagir com um **MCP Server (Model Context Protocol)** através de chamadas HTTP autenticadas.

O MCP Client não executa automações diretamente. Ele atua como uma **interface de entrada**, permitindo que comandos em linguagem natural ou estruturados sejam enviados para um MCP Server, que então decide quais ferramentas executar, respeitando permissões, escopos e regras de governança.

Este projeto faz parte do ecossistema MCP e foi projetado para funcionar de forma independente de IDE, sistema operacional ou ambiente de execução.

---

## Relação com o MCP Server

Este client foi desenvolvido para consumir o MCP Server disponível em:

https://github.com/Camiloruas/mcp-server

O MCP Server é o componente responsável por:

- Orquestrar ferramentas
- Aplicar regras de segurança
- Validar escopos
- Executar ações reais em serviços externos

O MCP Client apenas envia comandos e exibe respostas.

---

## Objetivo do Projeto

- Fornecer uma interface simples de linha de comando para o MCP Server
- Permitir o envio de comandos em linguagem natural
- Demonstrar consumo real de um MCP Server
- Facilitar integrações em IDEs, terminais e pipelines
- Servir como exemplo de client portátil para MCP

---

## Características

- Cliente CLI simples
- Baseado em Node.js e TypeScript
- Comunicação via HTTP
- Autenticação por API Key
- Totalmente independente de IDE
- Pode ser utilizado em ambientes locais ou remotos

---

## Onde o MCP Client pode ser usado

O MCP Client pode ser executado em qualquer ambiente que possua Node.js, incluindo:

- Cursor
- VS Code
- Neovim
- Terminal local
- Sessões SSH
- Ambientes Linux headless
- Pipelines CI/CD

A IDE não possui conhecimento do MCP. Ela apenas fornece um terminal para execução do client.

---

## Pré-requisitos

- Node.js versão 18 ou superior
- npm

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/Camiloruas/mcp-client
cd mcp-client
```

Instale as dependências:

```bash
npm install
```

---

## Configuração

Crie o arquivo de variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env`:

```env
MCP_BASE_URL=https://mcp.seudominio.dev
MCP_API_KEY=SUA_API_KEY_COM_ESCOPOS
```

A API key deve estar previamente configurada no MCP Server e possuir os escopos necessários para as ações solicitadas.

---

## Uso

Execute o client passando um comando como argumento:

```bash
node mcp.ts "crie um workflow no n8n com webhook POST /lead"
```

Exemplo de resposta:

```json
{
  "tool": "workflow-generate",
  "status": "ok",
  "workflowId": "abc123",
  "webhookUrl": "https://webhook.seudominio.dev/webhook/lead",
  "active": true
}
```

---

## Segurança

- Nunca versionar o arquivo `.env`
- Cada API key deve possuir apenas os escopos necessários
- O MCP Client não armazena credenciais além do ambiente local

---

## Estrutura do Projeto

```
mcp-client/
├── mcp.ts
├── package.json
├── tsconfig.json
├── .env.example
├── .gitignore
└── README.md
```

---

## Extensibilidade

O MCP Client pode ser facilmente adaptado para:

- Interfaces gráficas
- Extensões de IDE
- Integrações CI/CD
- Scripts de automação
- Ferramentas internas

Nenhuma modificação no MCP Server é necessária para criar novos clients.

---

## Autor

Camilo Ruas

GitHub: https://github.com/Camiloruas  
LinkedIn: https://www.linkedin.com/in/camilo-ruas-3a2a6425/  
Portfólio: https://www.camiloruas.dev/
