import { Route, Routes } from "react-router-dom";
import { Home, Page1, Page2, Page3 } from "../Pages/Pages";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<Page1 />} />
        <Route path="/second" element={<Page2 />} />
        <Route path="/third" element={<Page3 />} />
      </Routes>
    </>
  );
};
