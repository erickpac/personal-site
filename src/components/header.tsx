import { Colors } from "@/types/types";

type HeaderProps = {
  isLoaded: boolean;
  colors: Colors;
};

export const Header = ({ isLoaded, colors }: HeaderProps) => {
  return (
    <header className={`${colors.background} border-b border-gray-200`}>
      <div className="container mx-auto px-4 py-6">
        <h1
          className={`text-3xl font-bold ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
        >
          Erick Pac
        </h1>
        <p
          className={`${colors.secondaryText} ${isLoaded ? "animate-fade-in animate-delay-1" : "opacity-0"}`}
        >
          Software Engineer | iOS Developer | Web Developer (React, Node.js)
        </p>
      </div>
    </header>
  );
};
