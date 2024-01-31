import { useRive } from "@rive-app/react-canvas";

export default function SmallRiveHouse() {
  const { rive, RiveComponent } = useRive({
    src: "/riv/house_loop_small.riv",
    stateMachines: "Small Loop",
    autoplay: true,
  });
  return (
    <div className="aspect-[34/14] sm:hidden">
      <RiveComponent />
    </div>
  );
}
