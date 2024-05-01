import { useEffect, useState } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";

export default function Todo() {
  const [todos, settodo] = useState([]);
  const finshedtodos = todos.filter((todo) => todo.done).length;
  const totaltodos = todos.length;
  return (
    <div>
      <Form todos={todos} settodo={settodo} />
      <Todolist key={todos} todos={todos} settodo={settodo} />
      <Footer finshedtodos={finshedtodos} totaltodos={totaltodos} />
    </div>
  );
}
