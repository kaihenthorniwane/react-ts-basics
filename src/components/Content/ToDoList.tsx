import { ToDoEntryProps } from "@/app/page";
import ToDoEntry from "./ToDoEntry";

export default function ToDoList({
  toDoItems,
}: {
  toDoItems: Array<ToDoEntryProps>;
}) {
  return (
    <div className="flex flex-col gap-5">
      {toDoItems.map((toDoItem) => {
        return <ToDoEntry key={toDoItem.key} content={toDoItem.content} />;
      })}
    </div>
  );
}
