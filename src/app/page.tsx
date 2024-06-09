"use client";

import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import React, { useState } from "react";

const Page = () => {
  const [todos, setTodos] = useState<
    {
      title: string;
      createdAt: Date;
    }[]
  >([]);

  return (
    <div className="p-10">
      <p>
        Todo uygulamasina hosgeldiniz buradan istediginiz notu alabilir ve
        todolara ekleyebilirsiniz!
      </p>

      <br />

      <TodoInput todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Page;
