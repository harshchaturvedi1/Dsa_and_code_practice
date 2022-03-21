import styles from "./Single-Component.module.css";

const CardContainer = (value) => {
  return <div>{value}</div>;
};

const valueList = [
  "Contact Us",
  "Download",
  "Help",
  "Home",
  "Join",
  "Login",
  "Setting",
  "Search",
];

const SingleComponent = () => {
  return (
    <div className={styles.parentWrapper}>
      {valueList.map((e) => CardContainer(e))}
    </div>
  );
};

export { SingleComponent };
