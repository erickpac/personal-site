import { Colors, Technology } from "@/types/types";

type TechCardProps = {
  colors: Colors;
  tech: Technology;
};

export const TechCard = ({ colors, tech }: TechCardProps) => {
  const { name } = tech;
  return (
    <div
      className={`rounded-lg p-4 ${colors.subtle} ${colors.subtleHover} flex transform items-center justify-center transition-all duration-300 hover:scale-105`}
    >
      <span className="ml-2">{name}</span>
    </div>
  );
};
