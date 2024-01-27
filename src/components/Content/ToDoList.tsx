import { ToDoEntry as ToDoEntryProps } from "@/app/page";
import ToDoEntry from "./ToDoEntry";
import { motion } from "framer-motion";

export default function ToDoList({
  toDoItems,
  handleMarkAsDone,
}: {
  toDoItems: Array<ToDoEntryProps>;
  handleMarkAsDone: (key: number) => void;
}) {
  return (
    <motion.div className="flex flex-col gap-5" layout>
      {toDoItems.map((toDoItem) => {
        return (
          <ToDoEntry
            key={toDoItem.key}
            id={toDoItem.key}
            content={toDoItem.content}
            selected={toDoItem.selected}
            initialInstance={toDoItem.initialInstance}
            handleMarkAsDone={handleMarkAsDone}
          />
        );
      })}
    </motion.div>
  );
}
