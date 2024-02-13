import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DonationPlaces from "./components/DonationPlaces";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation-places" element={<DonationPlaces />}></Route>
      </Routes>
    </div>
  );
}

export default App;
