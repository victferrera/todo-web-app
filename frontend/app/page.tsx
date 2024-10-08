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
  const [onlyOpenTasks, setOnlyOpenTasks] = useState(2);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    setTodosAux(todos.sort((a, b) => a.id - b.id));
  }, [todos])

  const fetch = async () => {
    setLoading(true)
    const response = (await getAllTodos()).sort((a, b) => a.id - b.id);
    setTodos(response);
    setTodosAux(response);
    setOnlyOpenTasks(2);
    setLoading(false)
  };

  const handleUpdateTodos = async () => {
    const response = await getAllTodos();
    setTodos(response);
  }

  const handleOnlyOpenTasksClick = async () => {
    const onlyOpen = onlyOpenTasks === 2 ? 0 : 2;
    setOnlyOpenTasks(onlyOpen);
    setTodosAux(onlyOpen === 2 ? todos.filter(t => t.status !== 2) : todos.filter(t => t.status === onlyOpen));
  }

  return (
    <div>
      <Header />
      <Input callback={handleUpdateTodos} />
      <div className="flex flex-row items-center justify-center gap-x-2 text-xl ml-5 mt-10">
        <span onClick={handleOnlyOpenTasksClick}>
          {
            onlyOpenTasks === 0 ?
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
          {todosAux.length !== 0 ? todosAux.map(t => <TodoItem key={t.id} id={t.id} status={t.status} title={t.title} description={t.description} callback={handleUpdateTodos} comments={t.comments} />) :
            <h2 className="flex items-center justify-center text-black text-5xl h-40">Nothing to show 😔</h2>}
        </div>
      </Card>
    </div>
  );
}
