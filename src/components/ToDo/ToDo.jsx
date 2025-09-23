import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../../store/todoSlice";

const TodoComponent = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.list);

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <h1>My Todos</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((index) => (
          <li key={index.id}>
            <span
              onClick={() => dispatch(toggleTodo(index.id))}
              style={{ textDecoration: index.done ? "line-through" : "none", cursor: "pointer" }}
            >
              {index.text}
            </span>
            <button onClick={() => dispatch(removeTodo(index.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;