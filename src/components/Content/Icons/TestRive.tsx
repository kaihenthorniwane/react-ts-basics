import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

export default function TestRive({ selected }: { selected: boolean }) {
  const { rive, RiveComponent } = useRive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    stateMachines: "bumpy",
    autoplay: true,
  });

  const bumpInput = useStateMachineInput(rive, "bumpy", "bump");

  useEffect(() => {
    console.log(bumpInput);
  }, [bumpInput]);

  return (
    <RiveComponent
      style={{ height: "1000px", width: "1000px" }}
      onClick={() => bumpInput && bumpInput.fire()}
    />
  );
}
