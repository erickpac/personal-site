import { useEffect, useState } from "react";
import { colors } from "@/constants";
import { mockJobs, mockCoworkers } from "@/mocks/mocks";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CoworkerCard } from "./components/coworker-card";
import { JobCard } from "./components/job-card";
import { Profile } from "@/components/profile";
import { TechStack } from "@/components/tech-stack";

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
            <Profile colors={colors} />
          </section>

          <section
            className={`mb-12 ${isLoaded ? "animate-fade-in animate-delay-3" : "opacity-0"}`}
          >
            <TechStack />
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
              {mockCoworkers.map((coworker, index) => (
                <CoworkerCard key={index} colors={colors} coworker={coworker} />
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
