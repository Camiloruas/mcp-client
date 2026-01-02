import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

// ==============================
// Validação de ambiente
// ==============================
const MCP_BASE_URL = process.env.MCP_BASE_URL;
const MCP_API_KEY = process.env.MCP_API_KEY;

if (!MCP_BASE_URL) {
  console.error("MCP_BASE_URL não definido no .env");
  process.exit(1);
}

if (!MCP_API_KEY) {
  console.error("MCP_API_KEY não definido no .env");
  process.exit(1);
}

// ==============================
// Leitura do texto do terminal
// ==============================
const text = process.argv.slice(2).join(" ");

if (!text) {
  console.error('Uso: mcp "texto em linguagem natural"');
  process.exit(1);
}

// ==============================
// Chamada ao MCP Server (agent)
// ==============================
async function run() {
  try {
    const response = await fetch(`${MCP_BASE_URL}/tools/ai/agent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": MCP_API_KEY,
      },
      body: JSON.stringify({
        input: { text },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro do MCP Server:");
      console.error(errorText);
      process.exit(1);
    }

    const result = await response.json();

    // ==============================
    // Output amigável no terminal
    // ==============================
    if (result.url) {
      console.log("✔ Ação executada com sucesso:");
      console.log(result.url);
    } else {
      console.log("✔ Resposta do MCP:");
      console.log(JSON.stringify(result, null, 2));
    }
  } catch (err) {
    console.error("Erro ao executar MCP Client:");
    console.error(err.message || err);
    process.exit(1);
  }
}

run();
