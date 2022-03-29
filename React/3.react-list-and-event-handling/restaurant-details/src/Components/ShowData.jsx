import { Link } from "react-router-dom";
import { CardDetails } from "./Card";

export const ShowData = ({ restData }) => {
  return (
    <>
      <Link to="/addNew">Add restaurant</Link>
      <div
        style={{
          border: "1px solid",
          margin: "10px",
          padding: "10px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {restData.map((item) => (
          <CardDetails restaurant={item} key={item.id} />
        ))}
      </div>
    </>
  );
};
