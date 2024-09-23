import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import HomePage from "./page/HomePage";
import CountryDetail from "./page/CountryDetail";
import NotFound from "./page/NotFound";
import { useContext } from "react";
import BtnContext from "./context/btnContext";

function App() {
  const { darkMode } = useContext(BtnContext);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path=":name" element={<CountryDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
