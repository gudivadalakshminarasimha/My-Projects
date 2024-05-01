import styles from "./todoitems.module.css";
export default function Items({ items, todos, settodo }) {
  function handledelete(item) {
    settodo(todos.filter((items) => items !== item));
  }
  function handlclick(item) {
    const newarray = todos.map((todo) =>
      todo.name === item ? {...todo,done :! todo.done} : todo
    );
    settodo(newarray);
  }
  const changeName=items.done ?styles.completed:""
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={changeName} onClick={() => handlclick(items.name)}>{items.name}</span>
        <button onClick={() => handledelete(items)} className={styles.button}>
          x
        </button>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
