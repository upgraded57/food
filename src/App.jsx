import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Onboarding from "./Pages/Onboarding/Onboarding";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import Arrivables from "./Pages/Arrivables/Arrivables";
import Restaurant from "./Pages/Restaurant/Restaurant";
import History from "./Pages/History/History";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/arrivables" element={<Arrivables />} />
        <Route path="/history" element={<History />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
