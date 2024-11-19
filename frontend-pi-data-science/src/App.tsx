import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

// Esquema de validação com Zod
const QueryPrevisionDataFormSchema = z.object({
  state: z.string().min(1, "Selecione um estado válido"),
  trimester: z.string().min(1, "Selecione um trimestre válido"),
  year: z.string().min(1, "Selecione um ano válido"),
});

type QueryPrevisionData = z.infer<typeof QueryPrevisionDataFormSchema>;

function App() {
  const [result, setResult] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QueryPrevisionData>({
    resolver: zodResolver(QueryPrevisionDataFormSchema),
  });

  const onSubmit = async (data: QueryPrevisionData) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", data);
      setResult(
        `Previsão: ${response.data.prediction}. Informações: ${response.data.info}`
      );
    } catch (error) {
      console.error(error);
      setResult("Erro ao processar a solicitação.");
    }
  };

  return (
    <section className="h-screen w-full bg-gray-900 text-white flex justify-center items-center px-[10%]">
      <form
        className="h-1/2 border-2 rounded-md w-1/2 py-10 items-center flex flex-col space-y-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl font-semibold">Previsão de radiação solar</h1>
        <div className="flex flex-col space-y-6">
          {/* Estado */}
          <div className="flex space-x-6">
            <h2>Selecione o estado Brasileiro:</h2>
            <select className="text-black rounded-md" {...register("state")}>
              <option value="">Selecione</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
            {errors.state && (
              <p className="text-red-500">{errors.state.message}</p>
            )}
          </div>

          {/* Trimestre */}
          <div className="flex space-x-6 rounded-md">
            <h2>Selecione o trimestre do ano que deseja ver:</h2>
            <select
              className="text-black rounded-md"
              {...register("trimester")}
            >
              <option value="">Selecione</option>
              <option value="T1">1º Trimestre (Jan-Mar)</option>
              <option value="T2">2º Trimestre (Abr-Jun)</option>
              <option value="T3">3º Trimestre (Jul-Set)</option>
              <option value="T4">4º Trimestre (Out-Dez)</option>
            </select>
            {errors.trimester && (
              <p className="text-red-500">{errors.trimester.message}</p>
            )}
          </div>

          {/* Ano */}
          <div className="flex space-x-6">
            <h2>Selecione o ano que deseja ver:</h2>
            <select className="text-black rounded-md" {...register("year")}>
              <option value="">Selecione</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
            </select>
            {errors.year && (
              <p className="text-red-500">{errors.year.message}</p>
            )}
          </div>
        </div>

        {/* Botão de Solicitação */}
        <button
          type="submit"
          className="border px-6 py-2 text-lg font-semibold rounded-md bg-blue-800 hover:bg-green-800"
        >
          Solicitar
        </button>
      </form>

      {/* Resultado */}
      <div className="h-1/2 border-2 w-1/2 rounded-md flex justify-center py-10 items-center">
        {result ? (
          <h1 className="text-2xl font-semibold text-center px-4">{result}</h1>
        ) : (
          <h1 className="text-2xl font-semibold">Resultado aparecerá aqui</h1>
        )}
      </div>
    </section>
  );
}

export default App;
