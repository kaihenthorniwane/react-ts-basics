import { motion } from "framer-motion";

export default function Header({
  topText,
  amount,
  disableIntro,
}: {
  topText: string;
  amount: number;
  disableIntro: boolean;
}) {
  return (
    <motion.div
      className="flex flex-col font-header font-extralight gap-2"
      layout
      initial={!disableIntro ? { x: -100 } : { x: 0 }}
      animate={{ x: 0 }}
      transition={{ ease: [0.08, 0.87, 0.24, 1] }}
    >
      <span className="text-3xl">{topText}</span>
      <span className="text-6xl">{amount} to-dos.</span>
    </motion.div>
  );
}
