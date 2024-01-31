import { useRive } from "@rive-app/react-canvas";
import BigRiveHouse from "./Rive/BigRiveHouse";
import SmallRiveHouse from "./Rive/SmallRiveHouse";

export type InfoBoxLiteral = "empty" | "too much" | "do not show";

export type InfoBoxProps = {
  variant: InfoBoxLiteral;
};

export default function InfoBox({ variant }: InfoBoxProps) {
  const variantContent = {
    empty: (
      <>
        <BigRiveHouse />
        <SmallRiveHouse />
      </>
    ),
    "too much": <div className="border-2 rounded-2xl p-5">way too much</div>,
    "do not show": <>Do not show</>,
  };

  return variantContent[variant];
}
