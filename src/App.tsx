import { useEffect, useState } from "react";
import { colors } from "@/constants";
import { mockJobs, mockPeople } from "@/mocks/mocks";
import { Github, Linkedin } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CoworkerCard } from "./components/coworker-card";
import { JobCard } from "./components/job-card";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div
        className={`min-h-screen bg-gradient-to-b ${colors.background} ${colors.text}`}
      >
        <Header isLoaded={isLoaded} colors={colors} />

        <main className="container mx-auto px-4 py-8">
          <section
            className={`mb-12 ${isLoaded ? "animate-fade-in animate-delay-2" : "opacity-0"}`}
          >
            <h2 className="mb-4 text-3xl font-bold">Profile</h2>
            <div className={`${colors.subtle} overflow-hidden rounded-lg`}>
              <div className="p-6">
                <div className="flex flex-col items-center gap-6 md:flex-row">
                  {/* <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className="rounded-full transition-transform duration-300 hover:scale-105"
                  /> */}
                  <div>
                    <p className="mb-4">
                      Hi, I'm John Doe, a passionate software engineer with 5
                      years of experience in building scalable web applications.
                      I specialize in JavaScript, React, and Node.js, and I'm
                      always eager to learn new technologies.
                    </p>
                    <div className="flex gap-4">
                      {/* <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      > */}
                      <Button
                        variant="outline"
                        size="icon"
                        className={`${colors.subtle} ${colors.subtleHover} text-gray-700 transition-all duration-300 hover:scale-105`}
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                      {/* </Link>
                      <Link
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      > */}
                      <Button
                        variant="outline"
                        size="icon"
                        className={`${colors.subtle} ${colors.subtleHover} text-gray-700 transition-all duration-300 hover:scale-105`}
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`mb-12 ${isLoaded ? "animate-fade-in animate-delay-3" : "opacity-0"}`}
          >
            <h2 className="mb-4 text-3xl font-bold">Tech Stack</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "Python",
                "Docker",
              ].map((tech) => (
                <div
                  key={tech}
                  className={`rounded-lg p-4 ${colors.subtle} ${colors.subtleHover} flex transform items-center justify-center transition-all duration-300 hover:scale-105`}
                >
                  {/* <Image
                    src={`/placeholder.svg?height=64&width=64&text=${tech}`}
                    alt={tech}
                    width={64}
                    height={64}
                  /> */}
                </div>
              ))}
            </div>
          </section>

          <section
            className={`mb-12 ${isLoaded ? "animate-fade-in animate-delay-3" : "opacity-0"}`}
          >
            <h2 className="mb-4 text-3xl font-bold">Professional Career</h2>
            <div className="space-y-6">
              {mockJobs.map((job, index) => (
                <JobCard key={index} colors={colors} job={job} />
              ))}
            </div>
          </section>

          <section
            className={`mb-12 ${isLoaded ? "animate-fade-in animate-delay-3" : "opacity-0"}`}
          >
            <h2 className="mb-4 text-3xl font-bold">People I've Worked With</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockPeople.map((person, index) => (
                <CoworkerCard key={index} colors={colors} person={person} />
              ))}
            </div>
          </section>
        </main>

        <Footer colors={colors} />
      </div>
    </>
  );
}

export default App;
