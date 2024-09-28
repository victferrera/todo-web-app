'use client';

import Card from "@/components/card";
import CheckChecked from "@/components/checkChecked";
import CheckUnchecked from "@/components/checkUnchecked";
import Header from "@/components/header";
import Input from "@/components/input";
import TodoItem from "@/components/todoItem";
import { getAllTodos } from '@/services/todoService';
import { useState, useEffect } from 'react';

export default function Home() {

  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todosAux, setTodosAux] = useState<Array<Todo>>([]);
  const [onlyOpenTasks, setOnlyOpenTasks] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    setLoading(true)
    const response = await getAllTodos();
    setTodos(response);
    setTodosAux(response);
    setLoading(false)
  };

  const callback = async () => {
    await fetch();
  };

  const handleOnlyOpenTasksClick = () => {
    const onlyOpen = onlyOpenTasks === 0 ? 1 : 0;
    setOnlyOpenTasks(onlyOpen);
    const todosFilter = todos.filter(t => t.status === onlyOpen);
    setTodosAux(todosFilter);
  }

  return (
    <>
      <Header />
      <Input callback={callback} />
      <div className="flex flex-row items-center justify-center gap-x-2 text-xl ml-5 mt-10">
        <span onClick={handleOnlyOpenTasksClick}>
          {
            onlyOpenTasks ?
            <CheckChecked className="hover:text-[#DA852A] hover:cursor-pointer w-5 h-5" /> : 
            <CheckUnchecked className="hover:text-[#DA852A] hover:cursor-pointer w-5 h-5" />
          }
        </span>
        <span>
          Show only open tasks
        </span>
      </div>
      <Card isLoading={isLoading}>
        <div>
          {todosAux.length !== 0 ? todosAux.map(t => <TodoItem key={t.id} id={t.id} status={t.status} title={t.title} callback={callback} />) :
            <h2 className="flex items-center justify-center text-black text-5xl h-40">Nothing to show 😔</h2>}
        </div>
      </Card>
    </>
  );
}
