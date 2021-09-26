import FlutterBg from "./../public/flutter-bg.png";
import { FaGitSquare, FaGooglePlay } from "react-icons/fa";
import { CgEnter } from "react-icons/cg";
import { GrAppleAppStore } from "react-icons/gr";
import Meditate from "./../public/1m.png";
import FitTracker from "./../public/2m.png";
import Anima from "./../public/3m.png";

import Energe from "./../public/1w.png";
import ObbSys from "./../public/2w.png";
import Opqn from "./../public/3w.png";

const mobile = {
  meditate: {
    img: Meditate,
    description:
      "(Team Project) Project that supports user wellbeing through multiple exercises and by creating statistics that can be later used by user.",
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
  },
  fittracker: {
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
  },
  anima: {
    img: Anima,
    description:
      "My own project I'm currently working on (on hold). Application for wild animals that just cannot chill.",
    links: [
      {
        img: FaGitSquare,
        url: "https://github.com/wojciechkubiak/anima",
      },
    ],
  },
};

const web = {
  energe: {
    img: Energe,
    description:
      "Website for dutch renovating company created. It takes clients data, counts new usage values and sends them to the company through ZOHO CRM.",
    links: [
      {
        img: CgEnter,
        url: "https://distracted-booth-ae59fb.netlify.app/",
      },
    ],
  },
  obbsys: {
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
  },
  opqn: {
    img: Opqn,
    description:
      "Easy project that allows user to share health data with dietitians.",
    links: [
      {
        img: FaGitSquare,
        url: "https://github.com/wojciechkubiak/opqn-web",
      },
    ],
  },
  copysearcher: {
    img: FlutterBg,
    description: "(Team Project)",
    links: [
      {
        img: FaGitSquare,
        url: "test",
      },
      {
        img: FaGitSquare,
        url: "test",
      },
    ],
  },
  potg: {
    img: FlutterBg,
    description: "(Team Project)",
    links: [
      {
        img: FaGitSquare,
        url: "test",
      },
    ],
  },
};

export { mobile, web };
