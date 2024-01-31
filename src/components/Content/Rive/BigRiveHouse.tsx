import { useRive } from "@rive-app/react-canvas";

export default function BigRiveHouse() {
  const { rive, RiveComponent } = useRive({
    src: "/riv/house_loop.riv",
    stateMachines: "Small Loop",
    autoplay: true,
  });
  return (
    <div className="aspect-[49/22] hidden sm:block">
      <RiveComponent />
    </div>
  );
}
