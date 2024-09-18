import { Colors } from "@/types/types";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

type ProfileProps = {
  colors: Colors;
};

export const Profile = ({ colors }: ProfileProps) => {
  return (
    <>
      <h2 className="mb-4 text-3xl font-bold">Profile</h2>
      <div className={`${colors.subtle} overflow-hidden rounded-lg`}>
        <div className="p-6">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <img
              src="https://media.licdn.com/dms/image/v2/C5603AQGgHgXFXeev1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1658981393786?e=1732147200&v=beta&t=TNWeP17OT0vqMtZ72HYIorxtOd8MAHQKU5_8JttXLTA"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full transition-transform duration-300 hover:scale-105"
            />

            <div>
              <p className="mb-4">
                Hi, I'm Erick, highly skilled software engineer with over 8
                years of experience in developing and optimizing a wide range of
                software applications. Recognized for being diligent, possessing
                strong critical thinking abilities, and excelling in
                communication. Continuously enhances technical skills and
                knowledge through proactive learning, demonstrating a dedication
                to personal and professional growth. Proficient in collaborating
                effectively within teams, consistently contributing to project
                success with a blend of deep technical expertise and strong
                interpersonal skills. Experienced in all phases of the software
                development lifecycle, including design, coding, testing, and
                deployment across multiple platforms and technologies.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/erickpac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className={`${colors.subtle} ${colors.subtleHover} text-gray-700 transition-all duration-300 hover:scale-105`}
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/erick-pac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className={`${colors.subtle} ${colors.subtleHover} text-gray-700 transition-all duration-300 hover:scale-105`}
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
