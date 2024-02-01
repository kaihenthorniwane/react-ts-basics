"use client";

import FloatingActionButton from "@/components/Button/FloatingActionButton";
import Header from "@/components/Content/Header";
import ToDoList from "@/components/Content/ToDoList";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewToDoScreen from "@/components/Input/NewToDoScreen";
import InfoBox, {
  InfoBoxLiteral,
  InfoBoxSeverity,
} from "@/components/Content/InfoBox";

export interface ToDoEntry {
  key: number;
  content: string;
  selected: boolean;
}

export default function Home() {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [toDoEntries, setToDoEntries] = useState<Array<ToDoEntry>>([]);
  const [doneEntries, setDoneEntries] = useState<Array<ToDoEntry>>([]);
  const [renderOn, setRenderOn] = useState<boolean>(true);
  const [infoBoxState, setInfoBoxState] = useState<InfoBoxLiteral>("empty");
  const [severity, setSeverity] = useState<InfoBoxSeverity>("low");
  const keyIncrement = useRef(1);

  function handleReRender() {
    setRenderOn(false);
    setTimeout(() => {
      setRenderOn(true);
    }, 100);
  }

  useEffect(() => {
    setInfoBoxState(() => {
      const amountOfEntries = toDoEntries.length;
      if (amountOfEntries == 0) {
        return "empty";
      } else if (amountOfEntries > 8) {
        return "too much";
      } else {
        return "do not show";
      }
    });
    setSeverity(() => {
      const amountOfEntries = toDoEntries.length;
      if (amountOfEntries <= 10) {
        return "low";
      } else if (amountOfEntries <= 12) {
        return "medium";
      } else {
        return "high";
      }
    });
  }, [toDoEntries]);

  const RefreshButton = () => {
    return (
      <div
        className="absolute z-[1] top-5 right-5"
        onClick={() => {
          handleReRender();
        }}
      >
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12C1 12 1.12132 12.8492 4.63604 16.364C8.15076 19.8787 13.8492 19.8787 17.364 16.364C18.6092 15.1187 19.4133 13.5993 19.7762 12M1 12V18M1 12H7M21 8C21 8 20.8787 7.15076 17.364 3.63604C13.8492 0.12132 8.15076 0.12132 4.63604 3.63604C3.39076 4.88131 2.58669 6.40072 2.22383 8M21 8V2M21 8H15"
            stroke="rgb(var(--Brand-White))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  };

  function handleOverlayToggle() {
    setShowOverlay((prevValue) => !prevValue);
  }

  function handleAddToDo(content: string) {
    const newEntry: ToDoEntry = {
      key: keyIncrement.current,
      content: content,
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
        const curEntry: ToDoEntry = {
          ...searchResult,
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
    <main className="flex flex-col items-center">
      <FloatingActionButton handleOverlayToggle={handleOverlayToggle} />
      {showOverlay && (
        <NewToDoScreen
          handleOverlayToggle={handleOverlayToggle}
          handleAddToDo={handleAddToDo}
        />
      )}
      <RefreshButton />
      {renderOn && (
        <div
          className={
            " flex flex-col w-full max-w-screen-sm p-5 pt-10 items-stretch gap-14 transition-transform " +
            (showOverlay ? "scale-90" : "")
          }
        >
          <motion.div className="flex flex-col gap-7" layout>
            <Header
              amount={toDoEntries.length}
              topText={"You've got"}
              disableIntro={true}
            />

            {infoBoxState === "too much" && (
              <InfoBox variant={infoBoxState} severity={severity} />
            )}
            <ToDoList
              toDoItems={toDoEntries}
              handleMarkAsDone={handleMarkAsDone}
            />
            {infoBoxState === "empty" && <InfoBox variant={infoBoxState} />}
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
      )}
    </main>
  );
}
