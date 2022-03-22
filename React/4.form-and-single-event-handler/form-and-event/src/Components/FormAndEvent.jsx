/* 
have an initial state for the form fields 
onchange of form fields , extract "name and value" from e.target
update the values in state

*/

import { useState } from "react";

const initState = {
  firstName: "",
  lastName: "",
  pinCode: "",
  address: "",
};

export const Form = () => {
  const [formData, setFormData] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="pinCode"
          placeholder="pin code"
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="address"
          placeholder="address"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
};
