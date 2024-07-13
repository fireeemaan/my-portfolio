import { Project } from "@/types/project-types";

export const projects: Project[] = [
  {
    id: 1,
    details: {
      title: "Fishing Game",
      description:
        "Fishing Game is a simple game where you can catch fish and earn points. The game is built using Python.",
      image: "/images/fishing-game.png",
      github: "https://github.com/fireeemaan/",
      techStack: ["Python"],
    },
  },
  {
    id: 2,
    details: {
      title: "Fasilkom Prestasi",
      description:
        "Fasilkom Prestasi is a web application that provides information about achievements in the Faculty of Computer Science, University of Jember. The app is built using C#.",
      image: "/images/fasilkom-prestasi.png",
      github: "https://github.com/fireeemaan/",
      techStack: ["CS"],
    },
  },
  {
    id: 3,
    details: {
      title: "Uniplan",
      description:
        "Uniplan is a web application that helps UKM/Ormawa plan their academic schedules. The app is built using React.js.",
      image: "/images/uniplan.png",
      github: "https://github.com/fireeemaan/",
      techStack: ["React", "Tailwind", "PHP"],
    },
  },
  {
    id: 4,
    details: {
      title: "Portfolio Website",
      description:
        "Portfolio Website is a website that showcases my projects and skills. The website is built using Next.js.",
      image: "/images/portfolio.png",
      github: "https://github.com/fireeemaan/",
      techStack: ["NextJS", "Typescript", "Tailwind"],
    },
  },
];
