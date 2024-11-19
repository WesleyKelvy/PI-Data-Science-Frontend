const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Simulação de modelo de previsão
function getPrediction(state, trimester, year) {
  // Lógica fictícia para retorno de previsão
  const predictions = ["Alta", "Normal", "Baixa"];
  const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];

  const quality = {
    Alta: "Boa para plantações que requerem alta exposição solar.",
    Normal: "Adequada para a maioria das plantações.",
    Baixa: "Desafiadora para cultivos que necessitam de mais luz solar.",
  };

  return {
    prediction: randomPrediction,
    info: quality[randomPrediction],
    state,
    trimester,
    year,
  };
}

// Inicializando o servidor Express
const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota principal para previsão
app.post("/predict", (req, res) => {
  const { state, trimester, year } = req.body;

  // Validação básica dos dados
  if (!state || !trimester || !year) {
    return res.status(400).json({ error: "Por favor, preencha todos os campos corretamente." });
  }

  // Gerar previsão
  const predictionResult = getPrediction(state, trimester, year);

  // Retornar resultado
  res.json(predictionResult);
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${PORT}`);
});
