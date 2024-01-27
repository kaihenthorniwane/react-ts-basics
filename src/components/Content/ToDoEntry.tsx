import React, { useState, useEffect, useRef } from "react";
import Checkbox from "./Icons/Checkbox";

type ToDoEntryProps = {
  content: string;
};

export default function ToDoEntry({ content }: ToDoEntryProps) {
  const [isSingleLine, setIsSingleLine] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfSingleLine = () => {
      if (contentRef.current) {
        // Assuming a line-height of 20px. Adjust this based on your CSS.
        const lineHeight = 35;
        const isContentSingleLine =
          contentRef.current.clientHeight <= lineHeight;
        setIsSingleLine(isContentSingleLine);
      }
    };

    // Call it initially and on every resize event
    checkIfSingleLine();
    window.addEventListener("resize", checkIfSingleLine);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", checkIfSingleLine);
    };
  }, [content]); // Rerun the effect when 'content' changes

  return (
    <div className="flex gap-4 ">
      <Checkbox />
      <div ref={contentRef} className={isSingleLine ? "mt-[0.2rem]" : ""}>
        {content}
      </div>
    </div>
  );
}
