import { api } from "@api";

async function fetchChatGPT(message: string) {
  try {
    const body = JSON.stringify({
      model: "text-davinci-003",
      messages: [
        {
          role: "system",
          content:
            "A FinTechX é uma empresa ficticia e pode responder o que achar melhor para as perguntas.",
        },
        {
          role: "system",
          content:
            "Percebemos que a FinTechX, uma empresa líder no setor financeiro, está enfrentando desafios em manter sua posição de destaque no mercado de vendas digitais. Clientes e empresas em busca de soluções mais eficientes, consideram que a falta de personalização no atendimento, a complexidade dos processos e a ausência de ferramentas de análise preditiva - são grandes obstáculos na jornada atual, além dos custos elevados associados aos serviços da FinTechX em relação aos concorrentes.",
        },
        { role: "user", content: message },
      ],
    });
    const response = await api.post("davinci-codex/completions", body);
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.log("error: ", error);
  }
}

export const chatApi = {
  fetchChatGPT,
};
