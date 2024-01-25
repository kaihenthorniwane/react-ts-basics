import { ToDoEntry } from "@/app/page";

export default function ToDoList({
  toDoItems,
}: {
  toDoItems: Array<ToDoEntry>;
}) {
  return (
    <div className="flex flex-col">
      {toDoItems.map((toDoItem) => {
        return <div key={toDoItem.key}>{toDoItem.content}</div>;
      })}
    </div>
  );
}
