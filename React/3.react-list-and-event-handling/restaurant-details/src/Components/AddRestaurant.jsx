// /*
// {
//     "id":,
//     "name":"",
//     "img":"",
//     "pay":{
//         "card":true,
//         "cash":false,
//         "upi":true
//     },
//     "votes":200,
//     "reviews":100,
//     "cost_for":{
//         "one":150,
//         "two":250
//     },
//     "rating":4.2,
//     "time":"30 min",
//     "min_price":50,
//     "category":[
//         "option",
//         "option",
//         "option"
//     ]

// }
// */

import { useState } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
const init = {
  id: "",
  name: "",
  img: "",
  votes: 0,
  reviews: 0,
  rating: 0,
  time: "",
  min_price: 0,
  category: [],
  pay: {
    card: false,
    cash: false,
    upi: false,
  },
  cost_for_one: 0,
};

export const Form = ({ setRestDetails }) => {
  const [formData, setFormData] = useState(init);

  const handleFormData = ({ name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCategory = ({ name, value }) => {
    setFormData({ ...formData, [name]: value.split(",") });
  };

  const handlePay = ({ name, checked }) => {
    setFormData({ ...formData, ["pay"]: { ...formData.pay, [name]: checked } });
  };

  const handlehange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      handleCategory(e.target);
    } else if (name === "pay") {
      handlePay(e.target);
    } else if (name === "cash" || name === "card" || name === "upi") {
      handlePay(e.target);
    } else {
      handleFormData(e.target);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <Link to="/">Show restaurants</Link>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={handlehange}
        />
        <input
          name="img"
          type="text"
          placeholder="image url"
          onChange={handlehange}
        />
        <input
          name="votes"
          type="number"
          placeholder="votes"
          onChange={handlehange}
        />
        <input
          name="reviews"
          type="number"
          placeholder="reviews"
          onChange={handlehange}
        />
        <input
          name="rating"
          type="number"
          placeholder="rating"
          onChange={handlehange}
        />
        <input
          name="time"
          type="number"
          placeholder="min time for one order in minutes"
          onChange={handlehange}
        />
        <input
          name="min_price"
          type="number"
          placeholder="minimum price"
          onChange={handlehange}
        />
        <input
          name="cost_for_one"
          type="number"
          placeholder="minimum cost for one"
          onChange={handlehange}
        />
        <input
          name="category"
          type="text"
          placeholder="enter categories served separated by commas"
          onChange={handlehange}
        />
        <label>payment methods accepted</label>
        <div>
          <label>card</label>
          <input type="checkbox" name="card" onChange={handlehange} />
        </div>
        <div>
          <label name="cash">cash</label>
          <input type="checkbox" name="cash" onChange={handlehange} />
        </div>
        <div>
          <label>upi</label>
          <input type="checkbox" name="upi" onChange={handlehange} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

// export const Form = () => {
//   const handleSubmit = (e) => {
//     console.log(e.target.checked);
//   };

//   return (
//     <>
//       <form>
//         <input
//           type="checkbox"
//           id="subscribeNews"
//           name="subscribe"
//           value="newsletter"
//           onChange={handleSubmit}
//         />
//         <input type="submit" />
//       </form>
//     </>
//   );
// };
