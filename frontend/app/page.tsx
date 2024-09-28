'use client';

import Card from "@/components/card";
import Header from "@/components/header";
import Input from "@/components/input";
import TodoItem from "@/components/todoItem";
import { getAllTodos } from '@/services/todoService';
import { useState, useEffect } from 'react';

export default function Home() {

  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    setLoading(true)
    let response = await getAllTodos();
    setTodos(response);
    setLoading(false)
  };

  const callback = async () => {
    await fetch();
  };

  return (
    <>
      <Header />
      <Input callback={callback} />
      <Card isLoading={isLoading}>
        <div>
          {todos.length !== 0 ? todos.map(t => <TodoItem key={t.id} id={t.id} status={t.status} title={t.title} callback={callback} />) :
            <h2 className="flex items-center justify-center text-black text-5xl h-40">Nothing to show 😔</h2>}
        </div>
      </Card>
    </>
  );
}
