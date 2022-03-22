import { Input } from "./Input";
import { useState } from "react";
import { ShowValue } from "./ShowValue";
export const Counter = () => {
  const [val, setValue] = useState(0);

  return (
    <>
      <Input setValue={setValue} val={val} />
      <ShowValue setValue={setValue} val={val} />
    </>
  );
};
