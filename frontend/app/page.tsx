'use client';

import Card from "@/components/card";
import Header from "@/components/header";
import Input from "@/components/input";
import TodoItem from "@/components/todoItem";

export default function Home() {
  return (
    <>
      <Header />
      <Input />
      <Card>
        <div>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
        </div>
      </Card>
    </>
  );
}
