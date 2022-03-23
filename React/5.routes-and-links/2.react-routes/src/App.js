/* 
 <BrowserRouter>
  <Routes>
  <Route>
  <Link> <=> <a />
*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home, Page1, Page2, Page3 } from "./Components/Pages/Pages";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<Page1 />} />
          <Route path="/second" element={<Page2 />} />
          <Route path="/third" element={<Page3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
