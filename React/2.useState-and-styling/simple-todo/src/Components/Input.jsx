import { useState } from "react";
import { nanoid } from "nanoid";
export const Input = ({ setTodoList }) => {
  // to store user input
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // add user input to task array on submit
  // default status is false
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      key: nanoid(),
      title: todo,
      status: false,
    };
    setTodoList((prev) => [...prev, item]);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="Add Item"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
