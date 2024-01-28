import React, { useState, useEffect, useRef } from "react";
import Checkbox from "./Icons/Checkbox";
import { AnimatePresence, motion } from "framer-motion";

type ToDoEntryProps = {
  id: number;
  content: string;
  selected: boolean;
  handleMarkAsDone: (key: number) => void;
};

export default function ToDoEntry({
  id,
  content,
  selected,
  handleMarkAsDone,
}: ToDoEntryProps) {
  const [isSingleLine, setIsSingleLine] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfSingleLine = () => {
      if (contentRef.current) {
        // Fetching the root font-size
        const root = document.documentElement;
        const rootFontSize = parseFloat(getComputedStyle(root).fontSize);

        // Calculating the line height based on the root font size
        // Assuming a line-height of 1.5 times the root font size
        const lineHeight = 2 * rootFontSize;
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
    <AnimatePresence>
      <motion.div
        className="flex gap-4 "
        layout
        layoutId={id.toString()}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ ease: [0.08, 0.87, 0.24, 1] }}
      >
        <div
          onClick={() => {
            handleMarkAsDone(id);
          }}
        >
          <Checkbox selected={selected} />
        </div>
        <div className={isSingleLine ? "mt-[0.2rem]" : "mt-[-0.2rem]"}>
          <div ref={contentRef}>{content}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
