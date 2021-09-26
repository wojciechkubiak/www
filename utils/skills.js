import FlutterImg from "./../public/flutter.png";
import ReactImg from "./../public/react.png";
import JavascriptImg from "./../public/javascript.png";
import NodeImg from "./../public/node.png";
import HTMLImg from "./../public/html.png";
import CSSImg from "./../public/css.png";
import PythonImg from "./../public/python.png";
import SQLImg from "./../public/sql.png";

import FlutterBg from "./../public/flutter-bg.png";
import JavascriptBg from "./../public/javascript-bg.png";
import ReactBg from "./../public/react-bg.jpg";
import HtmlBg from "./../public/html-bg.jpg";
import CssBg from "./../public/css-bg.png";
import NodeBg from "./../public/node-bg.png";
import PythonBg from "./../public/python-bg.png";
import SqlBg from "./../public/sql-bg.jpg";
import OrderWebBg from "./../public/order-web-bg.png";
import OrderMobileBg from "./../public/order-mobile-bg.png";
import BackendBg from "./../public/backend-bg.png";

import WebImg from "./../public/web.png";
import MobileImg from "./../public/mobile.png";
import CloudImg from "./../public/cloud.png";

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
    ],
  },
  javasript: {
    img: JavascriptImg,
    bg: JavascriptBg,
    description: [
      "ES6+",
      "DOM Manipulation",
      "Functional programming",
      "Objective programming",
      "Async",
      "Basics of TypeScript",
    ],
  },
  node: {
    img: NodeImg,
    bg: NodeBg,
    description: ["Basics of ExpressJS", "REST API", "MVC", "Sequelize"],
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
  python: {
    img: PythonImg,
    bg: PythonBg,
    description: [
      "Basic syntax",
      "Basic functionalities",
      "Simple web apps implementation",
    ],
  },
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
