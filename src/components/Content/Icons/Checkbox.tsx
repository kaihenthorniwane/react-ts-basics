import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

export default function Checkbox({ selected }: { selected: boolean }) {
  const { rive, RiveComponent } = useRive({
    src: "/riv/checkbox.riv",
    stateMachines: "Checkbox",
    autoplay: true,
  });
  const checkedInput = useStateMachineInput(rive, "Checkbox", "Checked");

  useEffect(() => {
    console.log(checkedInput);
    if (checkedInput !== null) {
      checkedInput.value = selected;
    }
  }, [selected, checkedInput]);

  return (
    <div className="flex flex-col justify-center items-center min-w-8 max-w-8 min-h-8 max-h-8">
      <div className="w-[3.25rem] h-[3.25rem] min-w-[3.25rem] min-h-[3.25rem]">
        <RiveComponent />
      </div>
    </div>
  );
}
