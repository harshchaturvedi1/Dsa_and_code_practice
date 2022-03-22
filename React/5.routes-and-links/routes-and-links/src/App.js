/* 
 <BrowserRouter>
  <Routes>
  <Route>
  <Link> <=> <a />
*/
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routers } from "./Components/Routers/Routers";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routers />
    </div>
  );
}

export default App;
