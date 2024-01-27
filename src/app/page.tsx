"use client";

import FloatingActionButton from "@/components/Button/FloatingActionButton";
import Header from "@/components/Content/Header";
import ToDoList from "@/components/Content/ToDoList";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      content: "One line content",
    };
    keyIncrement.current++;
    setToDoEntries((prevEntries) => {
      return [...prevEntries, newEntry];
    });
  }

  function handleMarkAsDone(key: number) {
    const searchResult: ToDoEntry | undefined = toDoEntries.find((entry) => {
      return entry.key === key;
    });
    if (typeof searchResult !== "undefined") {
      const curEntry: ToDoEntry = searchResult;
      setToDoEntries((prevEntries) =>
        prevEntries.filter((entry) => entry.key !== key)
      );
      setDoneEntries((prevEntries) => [...prevEntries, curEntry]);
    }
  }

  return (
    <main className="flex flex-col items-center p-5 pt-10 ">
      <FloatingActionButton handleAddToDo={handleAddToDo} />
      <div className="flex flex-col w-full max-w-screen-sm items-stretch gap-14">
        <motion.div className="flex flex-col gap-6" layout>
          <Header amount={toDoEntries.length} topText={"You've got"} />
          <ToDoList
            toDoItems={toDoEntries}
            handleMarkAsDone={handleMarkAsDone}
          />
        </motion.div>
        <AnimatePresence>
          {doneEntries.length > 0 && (
            <motion.div
              className="flex flex-col gap-5"
              layout
              initial={{ x: -100 }}
              animate={{ x: 0 }}
            >
              <Header amount={doneEntries.length} topText={"You finished"} />
              <ToDoList
                toDoItems={doneEntries}
                handleMarkAsDone={handleMarkAsDone}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
