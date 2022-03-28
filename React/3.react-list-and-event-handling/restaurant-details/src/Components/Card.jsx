/* 
{
        "id":,
        "name":"",
        "img":"",
        "pay":{
            "card":true,
            "cash":false,
            "upi":true
        },
        "votes":200,
        "reviews":100,
        "cost_for":{
            "one":150,
            "two":250
        },
        "rating":4.2,
        "time":"30 min",
        "min_price":50,
        "category":[
            "option",
            "option",
            "option"
        ]

    }
*/

export const CardDetails = ({ restaurant }) => {
  return (
    <div style={{ border: "1px solid", margin: "10px", padding: "10px" }}>
      <img src={restaurant.img} alt="" />
      <p>{restaurant.name}</p>
      <p>Payment Accepted : </p>
      {restaurant.pay.card && <li>acrd</li>}
      {restaurant.pay.cash && <li>cash</li>}
      {restaurant.pay.upi && <li>upi</li>}
      <p>rating : {restaurant.rating}</p>
      <p>votes : {restaurant.votes}</p>
      <p>reviews : {restaurant.reviews}</p>
      <p>min time : {restaurant.time}</p>
      <p>min Price : {restaurant.min_price}</p>
      <p>Cost for one : {restaurant.cost_for.one}</p>
      <div>
        Server :{" "}
        {restaurant.category.map((item) => (
          <p>{item}</p>
        ))}{" "}
      </div>
    </div>
  );
};
