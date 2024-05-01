import styles from "./fooditem.module.css";
export default function Fooditem({ item,setfoodid }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={item.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{item.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={()=>setfoodid(item.id)} className={styles.itemButton}>view recipe</button>
      </div>
    </div>
  );
}
