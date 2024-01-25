import { ReactNode } from "react";

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}
export default function Header({ image, children }: HeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <img className="rounded-2xl" src={image.src} alt={image.alt} />
      {children}
    </div>
  );
}
