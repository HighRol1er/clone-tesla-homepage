
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ModelsPage from "./components/modelPage/ModelsPage";
import Model3Page from "./components/modelPage/Model3Page";
import ModelxPage from "./components/modelPage/ModelxPage";
import ModelyPage from "./components/modelPage/ModelyPage";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/model3" element={<Model3Page />} />
        <Route path="/modelx" element={<ModelxPage />} />
        <Route path="/modely"element={<ModelyPage />} />
      </Routes>
    </div>
  );
}

export default App;
