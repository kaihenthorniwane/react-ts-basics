"use client";

import FloatingActionButton from "@/components/Button/FloatingActionButton";
import Header from "@/components/Content/Header";
import ToDoList from "@/components/Content/ToDoList";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface ToDoEntry {
  key: number;
  content: string;
  initialInstance: boolean;
}

export default function Home() {
  const [toDoEntries, setToDoEntries] = useState<Array<ToDoEntry>>([]);
  const [doneEntries, setDoneEntries] = useState<Array<ToDoEntry>>([]);
  const keyIncrement = useRef(1);

  function handleAddToDo() {
    const newEntry: ToDoEntry = {
      key: keyIncrement.current,
      content: "One line content",
      initialInstance: true,
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
      const instanceSetting = searchResult.initialInstance ? false : true;
      const curEntry: ToDoEntry = {
        ...searchResult,
        initialInstance: instanceSetting,
      };
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
          <Header
            amount={toDoEntries.length}
            topText={"You've got"}
            disableIntro={true}
          />
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
              transition={{ ease: [0.08, 0.87, 0.24, 1] }}
            >
              <Header
                amount={doneEntries.length}
                topText={"You finished"}
                disableIntro={false}
              />
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
