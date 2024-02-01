import { ReactNode } from "react";
import BigRiveHouse from "./Rive/BigRiveHouse";
import SmallRiveHouse from "./Rive/SmallRiveHouse";

export type InfoBoxSeverity = "low" | "medium" | "high";
export type InfoBoxLiteral = "empty" | "too much" | "do not show";

type WarningBoxProps = {
  variant: "too much";
  severity: InfoBoxSeverity;
};

type EmptyBoxProps = {
  variant: "empty";
};
type HideBoxProps = {
  variant: "do not show";
};

export type InfoBoxProps = WarningBoxProps | EmptyBoxProps | HideBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { variant } = props;

  if (variant === "do not show") {
    return <></>;
  }

  if (variant === "empty") {
    return (
      <>
        <BigRiveHouse />
        <SmallRiveHouse />
      </>
    );
  }

  const { severity } = props;
  const severityMessage = {
    low: "You have a bit too much on your plate.",
    medium: "Slow down bucko, that is a lot.",
    high: "I do not think this list is realistic.",
  };
  return (
    <div className="border-2 rounded-2xl p-5">{severityMessage[severity]}</div>
  );
}
