import { type FormEvent, useRef, useEffect, useState } from "react";
import NewToDoArrow from "../Content/Icons/NewToDoArrow";
import SaveButtonBack from "./SaveButtonBack";

export default function NewToDoScreen({
  handleOverlayToggle,
  handleAddToDo,
}: {
  handleOverlayToggle: () => void;
  handleAddToDo: (content: string) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textContent, setTextContent] = useState<string>("");

  const updateSavedText = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      setTextContent(textarea.value);
    }
  };

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "1px";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
    window.addEventListener("resize", adjustHeight);
    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, []);

  function handleSubmit(event: FormEvent) {
    event?.preventDefault();
    handleAddToDo(textContent);
    handleOverlayToggle();
  }
  function handleCancel(event: FormEvent) {
    event?.preventDefault();
    handleOverlayToggle();
  }
  return (
    <div
      className="flex justify-center items-start fixed w-full h-full p-5  bg-BrandBlack/75"
      onClick={handleOverlayToggle}
    >
      <div
        className="max-w-lg w-full flex flex-col mt-32"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <form className="flex flex-col gap-6">
          <label
            htmlFor="todo"
            className="flex items-end text-4xl font-header font-extralight gap-2"
          >
            New to-do
            <NewToDoArrow />
          </label>
          <textarea
            ref={textareaRef}
            autoFocus
            className="bg-BrandGrey text-2xl p-6 py-5 rounded-3xl"
            id="todo"
            onInput={() => {
              adjustHeight();
              updateSavedText();
            }}
          ></textarea>
          <div className="flex gap-5 font-header">
            <button onClick={handleCancel}>Cancel</button>
            <button
              onClick={
                textContent.length > 0
                  ? handleSubmit
                  : (event) => {
                      event?.preventDefault();
                    }
              }
              className={
                "w-full relative transition-opacity " +
                (textContent.length == 0 ? "opacity-25" : "")
              }
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-BrandBlack">
                Save
              </div>
              <SaveButtonBack />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
