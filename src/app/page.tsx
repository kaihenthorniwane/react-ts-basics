"use client";

import FloatingActionButton from "@/components/Button/FloatingActionButton";
import Header from "@/components/Content/Header";
import ToDoList from "@/components/Content/ToDoList";
import { useRef, useState } from "react";

export interface ToDoEntry {
  key: number;
  content: string;
}

export default function Home() {
  const [toDoEntries, setToDoEntries] = useState<Array<ToDoEntry>>([]);
  const [doneEntries, setDoneEntries] = useState<Array<ToDoEntry>>([]);
  const keyIncrement = useRef(1);

  function handleAddToDo() {
    const newEntry: ToDoEntry = {
      key: keyIncrement.current,
      content: "test",
    };
    keyIncrement.current++;
    console.log("add one");
    setToDoEntries((prevEntries) => {
      return [...prevEntries, newEntry];
    });
  }

  return (
    <main className="flex flex-col items-center p-5 pt-10 ">
      <FloatingActionButton handleAddToDo={handleAddToDo} />
      <div className="flex flex-col w-full max-w-screen-sm items-stretch gap-14">
        <div className="flex flex-col gap-5">
          <Header amount={toDoEntries.length} topText={"You've got"} />
          <ToDoList toDoItems={toDoEntries} />
        </div>
        <div className="flex flex-col gap-5">
          <Header amount={doneEntries.length} topText={"You finished"} />
        </div>
      </div>
    </main>
  );
}
