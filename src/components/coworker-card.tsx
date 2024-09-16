import { Colors, Coworker } from "@/types/types";

type PeopleCardProps = {
  colors: Colors;
  coworker: Coworker;
};

export const CoworkerCard = ({ colors, coworker }: PeopleCardProps) => {
  const { name, profilePicture, role, company, linkedin } = coworker;

  return (
    <a href={linkedin} target="_blank" rel="noopener noreferrer">
      <div
        className={`rounded-lg p-4 ${colors.subtle} flex items-center space-x-4`}
      >
        <img
          src={profilePicture}
          alt={name}
          width={64}
          height={64}
          className="rounded-full"
        />

        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </a>
  );
};
