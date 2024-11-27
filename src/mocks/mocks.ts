import { Coworker, Job, Technology } from "@/types/types";

export const mockJobs: Job[] = [
  {
    title: "iOS Engineer",
    company: "VML Apps",
    period: "2021 - Present",
    description:
      "Responsible for building new features, fixing bugs, and addressing tech debt while continuously improving the app using the latest technologies. Dedicated to leveraging top tech to enhance app performance and ensure a high-quality user experience.",
  },
  {
    title: "Software Engineer",
    company: "Cognits Guatemala",
    period: "2020 - 2021",
    description:
      "Contributed to a high-profile bank app product by creating new features and resolving bugs to ensure a seamless user experience. Utilized strong problem-solving skills and technical expertise to enhance app functionality and reliability, significantly improving overall performance and user satisfaction.",
  },
  {
    title: "iOS Engineer",
    company: "Walt Disney Direct-to-Consumer & International",
    period: "2019 - 2020",
    description:
      "Contributed to the rebranding of the FX Now iOS app, replacing the previous FOX iOS app in 2019. Developed new features to meet legal requirements for the Latin American market, showcasing adaptability and proficiency in international regulations and compliance.",
  },
  {
    title: "iOS Engineer",
    company: "FOX International Channels",
    period: "2017 - 2019",
    description:
      "Led the development and maintenance of new features for the FOX Sports app on iOS and tvOS devices.",
  },
];

export const mockCoworkers: Coworker[] = [
  {
    name: "Scott Mehus",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/C5603AQH1jsPERUKCWg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1642680466865?e=1738195200&v=beta&t=xNv3t3M5F11z2wcealI3DhGsyIuS2jWlbXBxTJk6TOw",
    role: "Senior iOS Developer",
    company: "VML Apps",
    linkedin: "https://www.linkedin.com/in/scott-mehus-4508a9122/",
  },
  {
    name: "Jimmy Morales",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/C4E03AQGFpvCbc2PfyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1584638455829?e=1738195200&v=beta&t=sTK3P-3PuZjLwS-KgjxeUOHLjSfsz5H_h-5uXbQ77aI",
    role: "Senior Software Engineer",
    company: "Sky Peak Technologies",
    linkedin: "https://www.linkedin.com/in/jimmydev/",
  },
  {
    name: "Pablo Grajeda",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/C4E03AQHbh8fjxkSm4A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1607634405885?e=1738195200&v=beta&t=np-4GDN9L317ZevggmxHYl-ykcAZw6uxhO3tq6snQyE",
    role: "Sr. Full Stack Developer",
    company: "Telus International Digital Solutions",
    linkedin: "https://www.linkedin.com/in/grajedapablo/",
  },
  // {
  //   name: "Juan Rodríguez",
  //   profilePicture:
  //     "https://media.licdn.com/dms/image/v2/C4D03AQFxH0tNmYtVbw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1551229812244?e=1732147200&v=beta&t=QyUMaVVPdaPybYoI4uo0qguyG_-e9Pg3YObTL5v-0Qw",
  //   role: "Tech Lead | DevOps Specialist | Certified Scrum Master",
  //   company: "Bantrab",
  //   linkedin: "https://www.linkedin.com/in/jrodgt/",
  // },
  // {
  //   name: "Alex Mejicanos",
  //   profilePicture:
  //     "https://media.licdn.com/dms/image/v2/C5603AQHywXT-Y5Xrtw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1613235513565?e=1732147200&v=beta&t=UD7aHfA70LSJegIL0whN1d1eAFv5F8RqCPZxTpbS0jo",
  //   role: "Sr Software Engineer | Cloud Developer | FullStack",
  //   company: "MangoChango",
  //   linkedin: "https://www.linkedin.com/in/alexmejicanos/",
  // },
];

export const mockTechnologies: Technology[] = [
  {
    name: "Swift",
    icon: "swift.svg",
  },
  {
    name: "SwiftUI",
    icon: "swiftui.svg",
  },
  {
    name: "Node.js",
    icon: "nodejs.svg",
  },
  {
    name: "React.js",
    icon: "nodejs.svg",
  },
  {
    name: "JavaScript",
    icon: "nodejs.svg",
  },
  {
    name: "TypeScript",
    icon: "nodejs.svg",
  },
];
