import React from "react";
import { TodoItem } from "./TodoItem";
export const TodoList = ({ todoList, setTodoList }) => {
  // to toggle status of a task
  const handleToggle = (key) => {
    let temp = [];
    todoList.forEach((item) => {
      if (item.key === key) {
        const newItem = {
          key: item.key,
          title: item.title,
          status: !item.status,
        };
        temp.push(newItem);
      } else {
        temp.push(item);
      }
    });
    setTodoList(temp);
  };

  return (
    <div>
      {todoList.map((item) => (
        <div key={item.key}>
          <TodoItem todo={item} handleToggle={handleToggle} />
        </div>
      ))}
    </div>
  );
};
