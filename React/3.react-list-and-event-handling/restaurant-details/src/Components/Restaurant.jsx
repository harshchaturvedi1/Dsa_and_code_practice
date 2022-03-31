import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import data from "../assets/data.json";
import { FormData } from "./AddRestaurant";
import { ShowData } from "./ShowData";

export const RestaurantDetails = () => {
  const [restData, setRestData] = useState(data);

  return (
    <>
      <Routes>
        <Route path="/" element={<ShowData restData={restData} />} />
        <Route
          path="/addNew"
          element={<FormData setRestData={setRestData} />}
        />
      </Routes>
    </>
  );
};
