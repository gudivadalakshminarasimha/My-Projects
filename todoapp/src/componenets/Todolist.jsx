import Items from "./Todoitems";
import styles from "./todolist.module.css";
export default function Todolist({ todos, settodo }) {
  const sorttodos = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
  console.log(sorttodos);
  return (
    <div className={styles.list}>
      {sorttodos.map((items) => (
        <Items key={items.name} items={items} todos={todos} settodo={settodo} />
      ))}
    </div>
  );
}
