import { Route, Routes } from "react-router-dom";
import { Form } from "../AddRestaurant/AddRestaurant";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </>
  );
};
