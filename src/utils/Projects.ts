import { FaGitSquare, FaGooglePlay } from "react-icons/fa";
import { CgEnter } from "react-icons/cg";
import { GrAppleAppStore } from "react-icons/gr";
import Meditate from "./../assets/1m.png";
import FitTracker from "./../assets/2m.png";
import Anima from "./../assets/3m.png";
import Energe from "./../assets/1w.png";
import ObbSys from "./../assets/2w.png";
import Opqn from "./../assets/3w.png";
import CopySearcher from "./../assets/4w.png";
import Acare from "./../assets/5w.png";
import POTG from "./../assets/6w.png";

import { IProjectCard } from "../components/ProjectCard";
const projects: IProjectCard[] = [
  {
    header: "Acare",
    img: Acare,
    description:
      "Website that allows pet shops and private users to store their loved ones data. Stack: NextJS, Prisma, PostgreSQL.",
    links: [
      {
        img: FaGitSquare,
        url: "https://github.com/wojciechkubiak/acare/",
      },
    ],
    isMobile: false,
  },
  {
    header: "Energe",
    img: Energe,
    description:
      "Website for dutch renovating company which takes clients data, counts new usage values and sends them to the company through ZOHO CRM.",
    links: [
      {
        img: CgEnter,
        url: "https://distracted-booth-ae59fb.netlify.app/",
      },
    ],
    isMobile: false,
  },
  {
    header: "Acare-m",
    img: Anima,
    description:
      "My own project I'm currently working on (on hold). Application for wild animals that just cannot chill.",
    links: [
      {
        img: FaGitSquare,
        url: "https://github.com/wojciechkubiak/anima",
      },
    ],
    isMobile: true,
  },
  {
    header: "CopySearcher",
    img: CopySearcher,
    description:
      "(Team Project) Application that allows user to check for plagiarism.",
    links: [],
    isMobile: false,
  },
  {
    header: "PotG",
    img: POTG,
    description:
      "(Team Project) Website that looks for available taxis and allows user to book them.",
    links: [],
    isMobile: false,
  },
  {
    header: "Meditate",
    img: Meditate,
    description:
      "(Team Project) App that supports user with multiple wellbeing exercises and statistics.",
    links: [
      {
        img: FaGooglePlay,
        url: "https://google.com",
      },
      {
        img: GrAppleAppStore,
        url: "https://google.com",
      },
    ],
    isMobile: true,
  },
  {
    header: "ObbSys",
    img: ObbSys,
    description:
      "My engineering project for Centre of Biomedical Research. It allows user to collect data and statistics that later shows if there are any symptoms of being sick, of animal.",
    links: [
      {
        img: FaGitSquare,
        url: "https://github.com/wojciechkubiak/obb-web",
      },
      {
        img: FaGitSquare,
        url: "https://github.com/wojciechkubiak/obb-api",
      },
    ],
    isMobile: false,
  },
  {
    header: "FitTracker",
    img: FitTracker,
    description:
      "Study project that allows user to share health data with dietitians.",
    links: [
      {
        img: FaGitSquare,
        url: "https://github.com/wojciechkubiak/opqn-mobile",
      },
      {
        img: FaGitSquare,
        url: "https://github.com/wojciechkubiak/opqn-mobile",
      },
    ],
    isMobile: true,
  },
  {
    header: "Opqn",
    img: Opqn,
    description:
      "Easy project that allows user to share health data with dietitians.",
    links: [
      {
        img: FaGitSquare,
        url: "https://github.com/wojciechkubiak/opqn-web",
      },
    ],
    isMobile: false,
  },
];

export default projects;
