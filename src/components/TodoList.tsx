"use client";

import { Trash2Icon } from "lucide-react";
import React from "react";

const TodoList = ({
  setTodos,
  todos,
}: {
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        createdAt: Date;
      }[]
    >
  >;
  todos: {
    title: string;
    createdAt: Date;
  }[];
}) => {
  return (
    <ul className="space-y-4">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="group flex cursor-pointer items-center justify-between rounded-md bg-red-500 p-4 transition-all hover:scale-105 hover:bg-red-800"
          onClick={() => {
            setTodos(
              todos.filter((value, idx) => {
                return index !== idx;
              }),
            );
          }}
        >
          <span className="text-4xl font-bold text-white">
            {index + 1 + "- " + todo.title}
          </span>

          <span className="text-sm text-white group-hover:hidden">
            {todo.createdAt.toLocaleDateString()}
          </span>

          <span className="hidden group-hover:block">
            <Trash2Icon color="white" />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
