import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, settodo }) {
  const [todo, todoname] = useState({ name: "", done: false });
  function handlesubmit(e) {
    e.preventDefault();
    settodo([...todos, todo]);
    todoname({ name: "", done: false });
  }
  return (
    <form onSubmit={handlesubmit} className={styles.form}>
      <div className={styles.div}>
        <input
          className={styles.input}
          onChange={(e) => todoname({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter todo item..."
        />
        <button className={styles.button} type="submit">
          {" "}
          Add
        </button>
      </div>
    </form>
  );
}
