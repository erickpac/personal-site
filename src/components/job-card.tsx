import { ChevronRight } from "lucide-react";
import { Colors, Job } from "@/types/types";

type JobCardProps = {
  colors: Colors;
  job: Job;
};

export const JobCard = ({ colors, job }: JobCardProps) => {
  const { title, company, period, description } = job;

  return (
    <div className="flex items-start space-x-4 transition-all duration-300 hover:translate-x-2">
      <ChevronRight className={`mt-1 h-6 w-6 flex-shrink-0`} />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className={colors.secondaryText}>
          {company} | {period}
        </p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};
