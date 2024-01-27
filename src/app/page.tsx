"use client";

import FloatingActionButton from "@/components/Button/FloatingActionButton";
import Header from "@/components/Content/Header";
import ToDoList from "@/components/Content/ToDoList";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TestRive from "@/components/Content/Icons/TestRive";

export interface ToDoEntry {
  key: number;
  content: string;
  initialInstance: boolean;
  selected: boolean;
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
      selected: false,
    };
    keyIncrement.current++;
    setToDoEntries((prevEntries) => {
      return [...prevEntries, newEntry];
    });
  }

  function handleMarkAsDone(key: number) {
    const searchResult: ToDoEntry | undefined = [
      ...toDoEntries,
      ...doneEntries,
    ].find((entry) => {
      return entry.key === key;
    });
    if (typeof searchResult !== "undefined") {
      if (!searchResult.selected) {
        const instanceSetting = searchResult.initialInstance ? false : true;
        const curEntry: ToDoEntry = {
          ...searchResult,
          initialInstance: instanceSetting,
          selected: true,
        };
        setToDoEntries((prevEntries) =>
          prevEntries.filter((entry) => entry.key !== key)
        );
        setDoneEntries((prevEntries) => [...prevEntries, curEntry]);
      } else {
        const curEntry: ToDoEntry = {
          ...searchResult,
          selected: false,
        };
        setDoneEntries((prevEntries) =>
          prevEntries.filter((entry) => entry.key !== key)
        );
        setToDoEntries((prevEntries) => [...prevEntries, curEntry]);
      }
    }
  }

  return (
    <main className="flex flex-col items-center p-5 pt-10 ">
      {/* <TestRive selected={true} /> */}
      <FloatingActionButton handleAddToDo={handleAddToDo} />
      <div className="flex flex-col w-full max-w-screen-sm items-stretch gap-14">
        <motion.div className="flex flex-col gap-7" layout>
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
              className="flex flex-col gap-7"
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
