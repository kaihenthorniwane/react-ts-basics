import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header({
  topText,
  amount,
  disableIntro,
}: {
  topText: string;
  amount: number;
  disableIntro: boolean;
}) {
  const [isZero, setIsZero] = useState<boolean>(false);

  useEffect(() => {
    if (amount == 0) {
      setIsZero(true);
    } else {
      setIsZero(false);
    }
  }, [amount]);

  return (
    <motion.div
      className="flex flex-col font-header font-extralight gap-2 "
      layout
      initial={!disableIntro ? { x: -100 } : { x: 0 }}
      animate={{ x: 0 }}
      transition={{ ease: [0.08, 0.87, 0.24, 1] }}
    >
      {isZero ? (
        <>
          <span className="text-3xl leading-none">{"No to-dos."}</span>
          <span className="text-3xl leading-none">
            {"Relax, you deserve it!"}
          </span>
        </>
      ) : (
        <>
          <span className="text-3xl">{topText}</span>
          <span className="text-6xl">{amount} to-dos.</span>
        </>
      )}
    </motion.div>
  );
}
