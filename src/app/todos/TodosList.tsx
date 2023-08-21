import React from "react";
import { Todo } from "../../../typings.d";
import Link from "next/link";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        <details key={todo.id} className="bg-red-200">
          <summary>
            <Link href={"/todos/todo.id"}>Todo: {todo.id}</Link>
          </summary>
          <p className="p-5">
            <span>
              <b>Title:</b> {todo.title}
            </span>
            <br />
            <span>
              <b>UserId:</b> {todo.userId}
            </span>
          </p>
        </details>
      ))}
    </>
  );
}

export default TodosList;
