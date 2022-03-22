/*
1.input will take user input and store in state
2.on submit input will get added to task array with default status as false
3.task status will get change as the "toggle" button is clicked
*/

import React from "react";
import { Input } from "./Input";
import { TodoList } from "./TodoList";
export const TodoMain = () => {
  const [todoList, setTodoList] = React.useState([]);
  return (
    <div>
      <Input setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};
