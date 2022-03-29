/* 
have an initial state for the form fields 
onchange of form fields , extract "name and value" from e.target
update the values in state

*/

import { useState } from "react";

const initState = {
  firstName: "",
  pinCode: "",
  address: "",
  category: [],
  pay: {
    card: false,
    cash: false,
    upi: false,
  },
};

export const Form = () => {
  const [formData, setFormData] = useState(initState);

  // handling check box
  const handlePay = ({ name, checked }) => {
    setFormData({ ...formData, ["pay"]: { ...formData.pay, [name]: checked } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setFormData({ ...formData, [name]: value.split(",") });
    } else if (name === "cash" || name === "card" || name === "upi") {
      handlePay(e.target);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
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
          type="number"
          name="pinCode"
          placeholder="pin code"
          onChange={handleChange}
        />
        <input
          type="tet"
          name="category"
          placeholder="category separated by ','"
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="address"
          placeholder="address"
          onChange={handleChange}
        />
        <label>payment method</label>
        <div>
          <label> card</label>
          <input type="checkbox" name="card" onChange={handleChange} />
        </div>
        <div>
          <label> cash</label>
          <input type="checkbox" name="cash" onChange={handleChange} />
        </div>
        <div>
          <label> upi</label>
          <input type="checkbox" name="upi" onChange={handleChange} />
        </div>
        <input type="submit" />
      </form>
    </>
  );
};
