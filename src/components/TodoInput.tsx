"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const TodoInput = ({
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
  const [input, setInput] = useState("");

  return (
    <>
      <Input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="mb-4"
      />
      <Button
        onClick={() => {
          if (input !== "") {
            setTodos([...todos, { title: input, createdAt: new Date() }]);
            setInput("");
          }
        }}
        className="mb-4"
      >
        Send
      </Button>
    </>
  );
};

export default TodoInput;
