#!/usr/bin/env node
import fetch from "node-fetch";
import "dotenv/config";

const text = process.argv.slice(2).join(" ");

if (!text) {
  console.error("Uso: mcp \"seu comando aqui\"");
  process.exit(1);
}

const MCP_BASE_URL = process.env.MCP_BASE_URL!;
const MCP_API_KEY = process.env.MCP_API_KEY!;

async function run() {
  const response = await fetch(
    `${MCP_BASE_URL}/agent/workflow/from-text`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": MCP_API_KEY,
      },
      body: JSON.stringify({
        input: {
          text
        }
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Erro:", data);
    process.exit(1);
  }

  console.log("✅ Resultado:");
  console.log(JSON.stringify(data, null, 2));
}

run().catch(err => {
  console.error("Erro fatal:", err);
});
