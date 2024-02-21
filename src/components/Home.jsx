import DonationImage from "../assets/donation-1.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");

  const handleCidadeChange = (event) => {
    setCidadeSelecionada(event.target.value);
  };

  const handleSearch = () => {
    navigate("/donation-places");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // código para buscar no json server as cidades
    // usar cidadeSelecionada na chamada da API
    handleSearch();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-500 mb-2">DoeAqui</h1>
      <h2 className="border-[#FFC98B] bg-[#FFC98B] rounded-md px-2 py-1 text-xs mb-2">
        APLICATIVO SOLIDÁRIO
      </h2>
      <img src={DonationImage} alt="donation image" className="w-52 mb-6" />
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center relative">
        <select
          id="cidades"
          name="cidades"
          className="pl-3 py-2 pr-3 border rounded-md mb-5 text-gray-500"
          onChange={handleCidadeChange}
        >
          <option value="" disabled selected>
            Escolha uma cidade
          </option>
          <option value="Belo Horizonte">Belo Horizonte</option>
          <option value="Curitiba">Curitiba</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Salvador">Salvador</option>
          <option value="São Paulo">São Paulo</option>
        </select>
        <button
          type="submit"
          className="border-[#FFC98B] bg-[#FFC98B] hover:bg-[#FFB865] px-4 py-2 rounded-full text-xs"
        >
          PROCURAR
        </button>
      </form>
    </div>
  );
};

export default Home;
