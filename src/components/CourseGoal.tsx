import { type ReactNode } from "react";

interface CourseGoalProps {
  titleText: string;
  children: ReactNode;
}

export default function CourseGoal({ titleText, children }: CourseGoalProps) {
  return (
    <article className="flex flex-col gap-4 border-Brand-White border-2 rounded-[2rem] p-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{titleText}</h2>
        <p>{children}</p>
      </div>
      <button className="bg-BrandWhite rounded-2xl px-5 py-3 text-BrandBlack">
        Delete
      </button>
    </article>
  );
}
