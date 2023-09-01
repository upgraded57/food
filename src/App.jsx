import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Onboarding from "./Pages/Onboarding/Onboarding";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
