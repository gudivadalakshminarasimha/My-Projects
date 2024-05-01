import styles from './footer.module.css'
export default function Footer({ finshedtodos, totaltodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}> completed todos :{finshedtodos}</span>
      <span className={styles.item}> Total todos :{totaltodos}</span>
    </div>
  );
}
