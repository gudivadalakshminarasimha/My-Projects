import styles from "./innercontainer.module.css";
export default function Innercontainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
