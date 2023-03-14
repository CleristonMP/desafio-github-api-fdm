import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
