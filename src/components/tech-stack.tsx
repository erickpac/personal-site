import {
  Swift,
  JavaScript,
  TypeScript,
  React,
  Git,
  Nextjs,
} from "@/components/icons/icons";

export const TechStack = () => {
  return (
    <>
      <h2 className="mb-4 text-3xl font-bold">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <Swift className="h-16 w-16" />
        <JavaScript className="h-16 w-16" />
        <TypeScript className="h-16 w-16" />
        <React className="h-16 w-16" />
        <Nextjs className="h-16 w-16" />
        <Git className="h-16 w-16" />
      </div>
    </>
  );
};
