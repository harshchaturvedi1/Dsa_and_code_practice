import React from "react";
import styled from "styled-components";

const TodoContainer = styled.div`
  border: 1px solid;
  border-radius: 5px;
  background-color: ${(props) =>
    props.status === false ? "#ff7878" : "#c4dfc5"};
  width: 50%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  .togglePart {
    padding: 10px 0px;
  }
  button {
    background-color: #453535;
    color: wheat;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

export const TodoItem = ({ todo, handleToggle }) => {
  return (
    <TodoContainer status={todo.status}>
      <div className="title">{todo.title}</div>
      <div>
        <div className="togglePart">
          {todo.status === false ? "Incomplete" : "Done"}
        </div>
        <div className="togglePart">
          <button onClick={() => handleToggle(todo.key)}>Toggle Status</button>
        </div>
      </div>
    </TodoContainer>
  );
};
