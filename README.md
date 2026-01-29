# MCP Client

This repository contains an **MCP Client**, a Node.js client with TypeScript responsible for interacting with an **MCP Server (Model Context Protocol)** through authenticated HTTP calls.

The MCP Client does not execute automations directly. It acts as an **entry interface**, allowing natural language or structured commands to be sent to an MCP Server, which then decides which tools to execute, respecting permissions, scopes, and governance rules.

This project is part of the MCP ecosystem and was designed to work independently of IDE, operating system, or execution environment.

## Relationship with the MCP Server

This client was developed to consume the MCP Server available at:

https://github.com/Camiloruas/mcp-server

The MCP Server is the component responsible for:

- Orchestrating tools
- Applying security rules
- Validating scopes
- Executing real actions in external services

The MCP Client only sends commands and displays responses.

## Project Goal

- Provide a simple command-line interface for the MCP Server
- Allow sending commands in natural language
- Demonstrate real consumption of an MCP Server
- Facilitate integrations in IDEs, terminals, and pipelines
- Serve as an example of a portable client for MCP

## Features

- Simple CLI client
- Based on Node.js and TypeScript
- Communication via HTTP
- Authentication via API Key
- Completely IDE independent
- Can be used in local or remote environments

## Where the MCP Client can be used

The MCP Client can be run in any environment that has Node.js, including:

- Cursor
- VS Code
- Neovim
- Local terminal
- SSH sessions
- Headless Linux environments
- CI/CD Pipelines

The IDE has no knowledge of the MCP. It only provides a terminal for running the client.

## Prerequisites

- Node.js version 18 or higher
- npm

## Installation

Clone the repository:

```bash
git clone https://github.com/Camiloruas/mcp-client
cd mcp-client
```

Install dependencies:

```bash
npm install
```

## Configuration

Create the environment variables file:

```bash
cp .env.example .env
```

Edit the `.env` file:

```env
MCP_BASE_URL=https://mcp.yourdomain.dev
MCP_API_KEY=YOUR_API_KEY_WITH_SCOPES
```

The API key must be previously configured in the MCP Server and have the necessary scopes for the requested actions.

## Usage

Run the client by passing a command as an argument:

```bash
node mcp.ts "create a workflow in n8n with a POST /lead webhook"
```

Response example:

```json
{
  "tool": "workflow-generate",
  "status": "ok",
  "workflowId": "abc123",
  "webhookUrl": "https://webhook.yourdomain.dev/webhook/lead",
  "active": true
}
```

## Security

- Never version the `.env` file
- Each API key must have only the necessary scopes
- The MCP Client does not store credentials beyond the local environment

## Project Structure

```
mcp-client/
├── mcp.ts
├── package.json
├── tsconfig.json
├── .env.example
├── .gitignore
└── README.md
```

## Extensibility

The MCP Client can be easily adapted for:

- Graphical interfaces
- IDE extensions
- CI/CD integrations
- Automation scripts
- Internal tools

No modification to the MCP Server is necessary to create new clients.

## Author

Camilo Ruas

GitHub: https://github.com/Camiloruas  
LinkedIn: https://www.linkedin.com/in/camilo-ruas-3a2a6425/  
Portfolio: https://www.camiloruas.dev/  


---


# MCP Client (Português)

Este repositório contém um **MCP Client**, um cliente em Node.js com TypeScript responsável por interagir com um **MCP Server (Model Context Protocol)** através de chamadas HTTP autenticadas.

O MCP Client não executa automações diretamente. Ele atua como uma **interface de entrada**, permitindo que comandos em linguagem natural ou estruturados sejam enviados para um MCP Server, que então decide quais ferramentas executar, respeitando permissões, escopos e regras de governança.

Este projeto faz parte do ecossistema MCP e foi projetado para funcionar de forma independente de IDE, sistema operacional ou ambiente de execução.

## Relação com o MCP Server

Este client foi desenvolvido para consumir o MCP Server disponível em:

https://github.com/Camiloruas/mcp-server

O MCP Server é o componente responsável por:

- Orquestrar ferramentas
- Aplicar regras de segurança
- Validar escopos
- Executar ações reais em serviços externos

O MCP Client apenas envia comandos e exibe respostas.

## Objetivo do Projeto

- Fornecer uma interface simples de linha de comando para o MCP Server
- Permitir o envio de comandos em linguagem natural
- Demonstrar consumo real de um MCP Server
- Facilitar integrações em IDEs, terminais e pipelines
- Servir como exemplo de client portátil para MCP

## Características

- Cliente CLI simples
- Baseado em Node.js e TypeScript
- Comunicação via HTTP
- Autenticação por API Key
- Totalmente independente de IDE
- Pode ser utilizado em ambientes locais ou remotos

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

## Pré-requisitos

- Node.js versão 18 ou superior
- npm

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

## Segurança

- Nunca versionar o arquivo `.env`
- Cada API key deve possuir apenas os escopos necessários
- O MCP Client não armazena credenciais além do ambiente local

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

## Extensibilidade

O MCP Client pode ser facilmente adaptado para:

- Interfaces gráficas
- Extensões de IDE
- Integrações CI/CD
- Scripts de automação
- Ferramentas internas

Nenhuma modificação no MCP Server é necessária para criar novos clients.

## Autor

Camilo Ruas

GitHub: https://github.com/Camiloruas
LinkedIn: https://www.linkedin.com/in/camilo-ruas-3a2a6425/
Portfólio: https://www.camiloruas.dev/
