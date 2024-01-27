import { ToDoEntry as ToDoEntryProps } from "@/app/page";
import ToDoEntry from "./ToDoEntry";

export default function ToDoList({
  toDoItems,
  handleMarkAsDone,
}: {
  toDoItems: Array<ToDoEntryProps>;
  handleMarkAsDone: (key: number) => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      {toDoItems.map((toDoItem) => {
        return (
          <ToDoEntry
            key={toDoItem.key}
            id={toDoItem.key}
            content={toDoItem.content}
            handleMarkAsDone={handleMarkAsDone}
          />
        );
      })}
    </div>
  );
}
