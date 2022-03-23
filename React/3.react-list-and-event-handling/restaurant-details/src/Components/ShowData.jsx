import { CardDetails } from "./Card";

export const ShowData = ({ rest_details }) => {
  return (
    <>
      {rest_details.map((item) => (
        <CardDetails restaurant={item} key={item.id} />
      ))}
    </>
  );
};
