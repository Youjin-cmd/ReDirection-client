import { Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Main from "../components/Main";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
