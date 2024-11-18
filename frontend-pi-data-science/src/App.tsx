import "./App.css";
import z from "zod";

const QueryPrevisionDataFormSchema = z.object({
  state: z.string(),
});

type QueryPrevisionData = z.infer<typeof QueryPrevisionDataFormSchema>;

function App() {
  return (
    <section className="h-screen w-full bg-gray-900 text-white flex justify-center items-center px-[10%]">
      <form className="h-1/2 border-2 rounded-md w-1/2 py-10 items-center flex flex-col space-y-12">
        <h1 className="text-2xl font-semibold">Previsão de radiação solar</h1>
        <div className="flex flex-col space-y-6">
          <div className="flex space-x-6">
            <h2>Selecione o estado Brasileiro:</h2>
            <select className="text-black rounded-md" name="estado">
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
          </div>

          <div className="flex space-x-6 rounded-md">
            <h2>Selecione o trimestre do ano que deseja ver:</h2>
            <select
              className="text-black rounded-md"
              name="trimestre"
              id="trimestre"
            >
              <option value="T1">1º Trimestre (Jan-Mar)</option>
              <option value="T2">2º Trimestre (Abr-Jun)</option>
              <option value="T3">3º Trimestre (Jul-Set)</option>
              <option value="T4">4º Trimestre (Out-Dez)</option>
            </select>
          </div>
          <div className="flex space-x-6">
            <h2>Selecione o ano do ano que deseja ver:</h2>
            <select
              className="text-black rounded-md"
              name="trimestre"
              id="trimestre"
            >
              <option value="T1">2025</option>
              <option value="T2">2026</option>
              <option value="T3">2027</option>
              <option value="T4">2028</option>
            </select>
          </div>
        </div>
        <button className="border px-6 py-2 text-lg font-semibold rounded-md bg-blue-800 hover:bg-green-800">
          Solicitar
        </button>
      </form>

      <div className="h-1/2 border-2 w-1/2 rounded-md flex justify-center py-10">
        <h1 className="text-2xl font-semibold">Resultado</h1>
      </div>
    </section>
  );
}

export default App;
