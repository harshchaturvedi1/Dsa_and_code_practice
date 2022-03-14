import { useState } from "react";
import GetPrime from "./components/GetPrime";
import "./styles.css";

export default function App() {
  const [prime, setPrime] = useState(1);
  const [prime2, setPrime2] = useState(1);

  const addBoth = () => {
    setPrime((prev) => prev + 15);
    setPrime2((prev) => prev + 15);
  };

  // const next1 = useCallback(() => setPrime((prev) => prev + 1), []);
  // const next2 = useCallback(() => setPrime2((prev) => prev + 1), []);
  const next1 = () => setPrime((prev) => prev + 1);
  const next2 = () => setPrime2((prev) => prev + 1);

  return (
    <div className="App">
      <button onClick={addBoth}>ADD BOTH BY 15</button>
      <GetPrime
        label="first"
        value={prime}
        // next={() => setPrime((prev) => prev + 1)}
        next={next1}
      />
      <GetPrime
        label="second"
        value={prime2}
        // next={() => setPrime((prev) => prev + 1)}
        next={next2}
      />
    </div>
  );
}
