import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="mx-auto max-w-[1920px] overflow-hidden">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
