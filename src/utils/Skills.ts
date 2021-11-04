import FlutterImg from "../assets/flutter.png";
import ReactImg from "../assets/react.png";
import JavascriptImg from "../assets/javascript.png";
import NodeImg from "../assets/node.png";
import HTMLImg from "../assets/html.png";
import CSSImg from "../assets/css.png";
import PythonImg from "../assets/python.png";
import SQLImg from "../assets/sql.png";
import TypescriptImg from "../assets/typescript.png";

import FlutterBg from "../assets/flutter-bg.png";
import JavascriptBg from "../assets/javascript-bg.png";
import TypescriptBg from "../assets/typescript-bg.png";
import ReactBg from "../assets/react-bg.jpg";
import HtmlBg from "../assets/html-bg.jpg";
import CssBg from "../assets/css-bg.png";
import NodeBg from "../assets/node-bg.png";
import PythonBg from "../assets/python-bg.png";
import SqlBg from "../assets/sql-bg.jpg";
import OrderWebBg from "../assets/order-web-bg.png";
import OrderMobileBg from "../assets/order-mobile-bg.png";
import BackendBg from "../assets/backend-bg.png";

import WebImg from "../assets/web.png";
import MobileImg from "../assets/mobile.png";
import CloudImg from "../assets/cloud.png";

const skills = {
  flutter: {
    img: FlutterImg,
    bg: FlutterBg,
    description: [
      "Objective programming",
      "Making of views and app logic",
      "BLoC architecture",
      "Implementation and modification of existing packages",
      "Animations",
    ],
  },
  react: {
    img: ReactImg,
    bg: ReactBg,
    description: [
      "React Hooks, Context API",
      "Functional programming",
      "Objective programming",
      "External libraries implementation",
      "Basics of Redux",
      "NextJS",
    ],
  },
  javascript: {
    img: JavascriptImg,
    bg: JavascriptBg,
    description: [
      "ES6+",
      "DOM Manipulation",
      "Functional programming",
      "Objective programming",
      "Async",
    ],
  },
  typescript: {
    img: TypescriptImg,
    bg: TypescriptBg,
    description: [
      "Javascript to Typescript conversion",
      "Semi-advanced syntax",
      "React implementation",
      "NextJS implementation",
    ],
  },
  node: {
    img: NodeImg,
    bg: NodeBg,
    description: [
      "Basics of ExpressJS",
      "REST API",
      "MVC",
      "Sequelize",
      "Prisma",
    ],
  },
  html: {
    img: HTMLImg,
    bg: HtmlBg,
    description: ["Semi-advanced syntax"],
  },
  css: {
    img: CSSImg,
    bg: CssBg,
    description: [
      "CSS Grid",
      "Flexbox",
      "SASS",
      "Animations",
      "Responsive web design",
    ],
  },
  // python: {
  //   img: PythonImg,
  //   bg: PythonBg,
  //   description: [
  //     "Basic syntax",
  //     "Basic functionalities",
  //     "Simple web apps implementation",
  //   ],
  // },
  sql: {
    img: SQLImg,
    bg: SqlBg,
    description: ["MySQL / PostgreSQL syntax", "Joins", "T-SQL"],
  },
};

const order = {
  web: {
    img: WebImg,
    bg: OrderWebBg,
    description: [
      "If you need a website, you've come to the right place. I am able to make a full-fledged web application based on your preferences.",
    ],
  },
  mobile: {
    img: MobileImg,
    bg: OrderMobileBg,
    description: [
      "There is mobile application on your mind? Don't hesitate and send me a message. Creating an eye-catching mobile application is not a problem for me, which is confirmed by my current professional experience.",
    ],
  },
  "backend/db": {
    img: CloudImg,
    bg: BackendBg,
    description: [
      "Connecting your application to the database is a struggle? I can help you with both database model and communication with already created one. Handling data storage is pleasure with me.",
    ],
  },
};

export { order, skills };
