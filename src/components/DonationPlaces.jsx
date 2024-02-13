import { useNavigate } from "react-router-dom";
import Places from "./Places";
import DonationImage2 from "../assets/donation-2.jpg";

const DonationPlaces = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="border-[#4E8163] bg-[#4E8163] hover:bg-[#356D4C] px-4 py-2 rounded-full text-xs text-white mb-6"
      >
        VOLTAR
      </button>
      <h1 className="text-xl mb-4 font-semibold">Faça sua doação aqui:</h1>
      <div>
        <Places />
        <Places />
        <Places />
      </div>
      <img src={DonationImage2} alt="donation image 2" className="w-52 mt-7" />
    </div>
  );
};

export default DonationPlaces;
