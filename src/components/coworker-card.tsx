import { Colors, Person } from "@/types/types";

type PeopleCardProps = {
  colors: Colors;
  person: Person;
};

export const CoworkerCard = ({ colors, person }: PeopleCardProps) => {
  const { name, role, company } = person;

  return (
    <div
      className={`rounded-lg p-4 ${colors.subtle} flex items-center space-x-4`}
    >
      {/* <Image
                    src={`/placeholder.svg?height=64&width=64&text=${person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}`}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  /> */}
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  );
};
