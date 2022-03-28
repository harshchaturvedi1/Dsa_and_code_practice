import { Link } from "react-router-dom";
import { CardDetails } from "./Card";

export const ShowData = ({ restData }) => {
  return (
    <>
      <Link to="/addNew">Add restaurant</Link>
      {restData.map((item) => (
        <CardDetails restaurant={item} key={item.id} />
      ))}
    </>
  );
};
