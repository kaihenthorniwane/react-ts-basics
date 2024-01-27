import { motion } from "framer-motion";

export default function Header({
  topText,
  amount,
}: {
  topText: string;
  amount: number;
}) {
  return (
    <motion.div
      className="flex flex-col font-header font-extralight gap-2"
      layout
    >
      <span className="text-3xl">{topText}</span>
      <span className="text-6xl">{amount} to-dos.</span>
    </motion.div>
  );
}
