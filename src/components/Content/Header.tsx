export default function Header({
  topText,
  amount,
}: {
  topText: string;
  amount: number;
}) {
  return (
    <div className="flex flex-col font-header font-extralight gap-2">
      <span className="text-3xl">{topText}</span>
      <span className="text-6xl">{amount} to-dos.</span>
    </div>
  );
}
