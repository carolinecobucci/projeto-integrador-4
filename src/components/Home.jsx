import { IoMdSearch } from "react-icons/io";
import DonationImage from "../assets/donation-1.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/donation-places");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://localhost:3001/instituicoes/${city}`);
    if (response.ok) {
      const data = await response.json()
    };

    handleSearch();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-500 mb-2">DoeAqui</h1>
      <h2 className="border-[#FFC98B] bg-[#FFC98B] rounded-md px-2 py-1 text-xs mb-2">
        APLICATIVO SOLIDÁRIO
      </h2>
      <img
        src={DonationImage}
        alt="donation image"
        className="w-52 mb-6"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center relative"
      >
        <input
          type="text"
          placeholder="Digite sua cidade"
          className="pl-7 py-1 border rounded-md mb-5"
        />
        <IoMdSearch className="absolute left-2 top-2 text-gray-500" />
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
