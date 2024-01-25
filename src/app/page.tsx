import CourseGoal from "@/components/CourseGoal";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-5 pt-10 ">
      <div className="flex flex-col w-full max-w-screen-sm items-stretch gap-5">
        <Header
          image={{
            src: "/Minimalist Composition with Glass and Colorful Geometric Background.png",
            alt: "An image",
          }}
        >
          <h1 className="text-3xl font-bold">Your Course Goals</h1>
        </Header>
        <CourseGoal titleText="Goal number one">
          Description number one
        </CourseGoal>
      </div>
    </main>
  );
}
