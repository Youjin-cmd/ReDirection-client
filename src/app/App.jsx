import { Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Main from "../components/Main";
import SelectArea from "../components/SelectArea";
import Result from "../components/Result";
import Edit from "../components/Edit";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/selectArea" element={<SelectArea />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
