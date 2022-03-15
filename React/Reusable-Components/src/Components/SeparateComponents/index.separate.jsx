import { ContactUS } from "./Contact";
import { Download } from "./Download";
import { Help } from "./Help";
import { Home } from "./Home";
import { JoinUs } from "./JoinUs";
import { Login } from "./Login";
import { Setting } from "./Setting";
import styles from "./index.separate.module.css";
const SeparateIndex = () => {
  return (
    <div className={styles.parentWrapper}>
      <ContactUS />
      <Download />
      <Help />
      <Home />
      <JoinUs />
      <Login />
      <Setting />
      <Setting />
    </div>
  );
};
export { SeparateIndex };
