import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  fox,
  livspace,
  sapient
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiVuedotjs,
  SiNodedotjs,
  SiJest,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiTypescript,
  SiBabel,
  SiWebpack
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1LgkDQ_Ixs7Y2TMdM4VlsOLkQGSwCqjFG/view";
export const repoLink = "https://github.com/subhamNIT/subham.github.io";

export const callToAction = "https://www.linkedin.com/in/subham-gupta-53127a137/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "National Institute of Technology, Rourkela",
    degree: "Bachelor of Technology",
    duration: "June 2016 - May 2020",
  }
];

export const achievements = [
//   {
//     id: "a-1",
//     icon: ethglobal,
//     event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
//     position: "Winner",
//     content1: "Top 12 winners among 20k+ registrations",
//     content2: "One of Polygon's Best Public Goods",
//     content3: "Best Module on Biconomy SDK",
//     article: "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
//     project: "https://devfolio.co/projects/chargeswap-3527",
//     youtube: "https://youtu.be/9rieTya8Yds?t=3908",
//   },
//   {
//     id: "a-2",
//     icon: polkadot,
//     event: "Polkadot Hackathon: Europe Edition",
//     position: "2nd Runner Up in the ink! Smart Contract Category",
//     content1: "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
//     content2: "",
//     content3: "",
//     github: "https://github.com/pranav2305/GreenTrust",
//   },
//   {
//     id: "a-3",
//     icon: lightspeed,
//     event: "Warpspeed by Lightspeed",
//     position: "1st Runner Up",
//     content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
//     content2: "Top 3 projects using Replit",
//     content3: "1st Runner Up by Amazon Web Services (AWS)",
//     article: "https://shorturl.at/fhjsT",
//   },
//   {
//     id: "a-4",
//     icon: dennisivy,
//     event: "September Hackathon by Dennis Ivy",
//     position: "Winner",
//     content1: "Rated the best portfolio website among 450+ participants across the globe.",
//     content2: "",
//     content3: "",
//     youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
//     project: "https://parthmittal.netlify.app/",
//   },
//   {
//     id: "a-5",
//     icon: manipal,
//     event: "Manipal Hackathon'22",
//     position: "Consolation Prize",
//     content1: "Top 10 among 500+ teams across India",
//     content2: "Developed a cross-platform mobile application to address the problem of social cohesion.",
//     content3: "",
//     article: "https://shorturl.at/exEIQ",
//   },
//   {
//     id: "a-6",
//     icon: icon,
//     event: "ICON Hyperbuild Hackathon",
//     position: "Honorable Mention",
//     content1: "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
//     content2: "",
//     content3: "",
//     project: "https://devpost.com/software/green-trust-xj2w6g",
//   },
//   {
//     id: "a-7",
//     icon: ethforall,
//     event: "ETHForAll 2023",
//     position: "Top 3 Superfluid Projects",
//     content1: "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
//     content2: "",
//     content3: "",
//     project: "https://devfolio.co/projects/green-trust-ed14",
//   },
];


export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-6",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-7",
        icon: SiVuedotjs,
        name: "Vue.js",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-7",
        icon: SiGraphql,
        name: "GraphQL",
      },
      {
        id: "f-7",
        icon: SiJest,
        name: "Jest",
      },
      {
        id: "f-7",
        icon: SiNodedotjs,
        name: "Node",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: SiBabel,
        name: "Babel",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "t-9",
        icon: SiFigma,
        name: "Figma",
      },
      {
        id: "t-9",
        icon: SiWebpack,
        name: "Webpack",
      }
    ],
  },
];

export const experiences = [
  {
    organisation: "Fox Corporation",
    logo: fox,
    link: "https://www.foxcorporation.com/",
    positions: [
      {
        title: "Software Development Engineer - II",
        duration: "September 2024 - Present",
        content: [
          {
            text: "Working in the Fox AI team responsible for solutioning and developing the features in the application",
            link: "",
          },
          {
            text: "Wrote and maintained unit and integration tests for UI components using testing frameworks like Jest and Puppeteer, ensuring robust and error-free applications.",
            link: "",
          },
        ],
      }
    ],
  },
  {
    organisation: "Livspace",
    logo: livspace,
    link: "https://www.livspace.com/in",
    positions: [
      {
        title: "Software Development Engineer II",
        duration: "Sep 2023 - Sep 2024",
        content: [
          {
            text: "Developed a Parametric 3D tool Application using React, Vue, and TypeScript, to create realistic 3D visualisations of interior designs created within the Livspace 3D Tool.",
            link: ""
          },
          {
            text: "Allowed designers to define and control various aspects of their designs using parameters such as dimensions, angles, and other geometric properties.",
            link: ""
          },
          {
            text: "Utilized TypeScript to ensure code quality, maintainability, and type safety throughout the project development. ",
            link: ""
          }
        ],
      },
      {
        title: "Software Development Engineer I",
        duration: "May 2022 - Sep 2023",
        content: [
          {
            text: "Built the cloud-rendering system which skyrocketed product adoption by 70 percent and highly increased revenue.",
            link: ""
          },
          {
            text: "Achieved a significant improvement in the tool’s performance using various performance improvement techniques.",
            link: ""
          }
        ],
      }
    ],
  },
  {
    organisation: "Publicis Sapient",
    logo: sapient,
    link: "https://www.publicissapient.com/",
    positions: [
      {
        title: "Associate Software Development Engineer II",
        duration: "Nov 2021 - Apr 2022",
        content: [
          {
            text: "Developed a Model Comparator application using React, Vue, and Javascript that compares different vehicle models.",
            link: "",
          },
          {
            text: "Developed GraphQL APIs to optimize data retrieval, reducing response time by 40 percent.",
            link: "",
          },
        ],
      },
      {
        title: "Associate Software Development Engineer I",
        duration: "Sep 2020 - Nov 2021",
        content: [
          {
            text: "Built a responsive Build and Price Configurator application that allows potential customers to customize their vehicles according to their preferences, enables exploration of available options and provides accurate price estimates.",
            link: "",
          },
          {
            text: " Implemented finance calculator feature for users to input their signed down payment, loan term, and credit information to receive estimated monthly payment calculations.",
            link: "",
          },
        ],
      }
    ],
  }
];

export const openSourceContributions = [
  // {
  //   id: "os-1",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title:
  //     "Move _wiki to old table look, common template for email and settings digest only",
  //   link: "https://github.com/publiclab/plots2/pull/10731",
  //   number: "#10731",
  //   date: "Feb 24 2022",
  //   linesAdded: "101",
  //   linesDeleted: "48",
  // },
  // {
  //   id: "os-2",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "Combine templates for email digest and settings digest",
  //   link: "https://github.com/publiclab/plots2/pull/10681",
  //   number: "#10681",
  //   date: "Feb 9 2022",
  //   linesAdded: "86",
  //   linesDeleted: "106",
  // },
  // {
  //   id: "os-3",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "Fix reverse chronological sorting on inline grids",
  //   link: "https://github.com/publiclab/plots2/pull/11114",
  //   number: "#11114",
  //   date: "May 4 2022",
  //   linesAdded: "1",
  //   linesDeleted: "1",
  // },
  // {
  //   id: "os-4",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "style: Make post page footer responsive",
  //   link: "https://github.com/publiclab/plots2/pull/10634",
  //   number: "#10634",
  //   date: "Feb 24 2022",
  //   linesAdded: "64",
  //   linesDeleted: "8",
  // },
  // {
  //   id: "os-5",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Typos in Translation_System.md",
  //   link: "https://github.com/publiclab/plots2/issues/11120",
  //   number: "#11120",
  //   date: "May 6 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-6",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Missing translations on layouts/_header.html.erb",
  //   link: "https://github.com/publiclab/plots2/issues/11115",
  //   number: "#11115",
  //   date: "May 4 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-7",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Missing translation of 'This is part of' on _tagging.html.erb",
  //   link: "https://github.com/publiclab/plots2/issues/10986",
  //   number: "#10986",
  //   date: "Apr 8 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-8",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Wrong closing heading tag in _digest.html.erb",
  //   link: "https://github.com/publiclab/plots2/issues/10985",
  //   number: "#10985",
  //   date: "Apr 8 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-9",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Add class to center wiki.scraped_image in wikis template",
  //   link: "https://github.com/publiclab/plots2/issues/10797",
  //   number: "#10797",
  //   date: "Mar 18 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-10",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Images on /wiki are not center aligned",
  //   link: "https://github.com/publiclab/plots2/issues/10755",
  //   number: "#10755",
  //   date: "Mar 4 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-11",
  //   organisation: "Zulip",
  //   logo: zulip,
  //   repo: "zulip",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "invitations: Check invitation from a now-deactivated user.",
  //   link: "https://github.com/zulip/zulip/pull/20206",
  //   number: "#20206",
  //   date: "Dec 30 2021",
  //   linesAdded: "31",
  //   linesDeleted: "1",
  // },
  // {
  //   id: "os-12",
  //   organisation: "Zulip",
  //   logo: zulip,
  //   repo: "zulip",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "invitations: Check invitation from a now-deactivated user.",
  //   link: "https://github.com/zulip/zulip/pull/20206",
  //   number: "#20206",
  //   date: "Dec 30 2021",
  //   linesAdded: "31",
  //   linesDeleted: "1",
  // },
  // {
  //   id: "os-13",
  //   organisation: "Zulip",
  //   logo: zulip,
  //   repo: "zulip",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "authentication: Fix placeholder realms for redirects.",
  //   link: "https://github.com/zulip/zulip/pull/19689",
  //   number: "#19689",
  //   date: "Sep 9 2021",
  //   linesAdded: "1",
  //   linesDeleted: "1",
  // },
  // {
  //   id: "os-14",
  //   organisation: "Zulip",
  //   logo: zulip,
  //   repo: "zulip",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "message_editing : Fix topic edit propagate option cut-off",
  //   link: "https://github.com/zulip/zulip/pull/19760",
  //   number: "#19760",
  //   date: "Feb 10 2022",
  //   linesAdded: "9",
  //   linesDeleted: "8",
  // },
];

export const projects = [
  {
    id: "project-1",
    title: "Parametric 3D Tool",
    github: "https://github.com/ayush4345/Comicify.ai",
    link: "https://comicify-ai.vercel.app/",
    image: comicify_ai,
    content:
      "Create realistic 3D visualisations of interior designs created within the Livspace 3D Tool.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiVuedotjs,
        name: "Vue"
      },
      {
        id: "icon-3",
        icon: SiTypescript,
        name: "Typescript"
      },
      {
        id: "icon-4",
        icon: SiNodedotjs,
        name: "Node"
      }
    ],
  },
  {
    id: "project-2",
    title: "GreenTrust",
    github: "https://github.com/mittal-parth/GreenTrust",
    link: "https://green-trust-fantom.netlify.app/",
    image: greentrust,
    content:
      "Winning project at 3 hackathons, GreenTrust offers a novel solution for obtaining certification in organic farming by organizing credible and decentralized Participatory Guarantee Systems (PGSs).",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-4",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-5",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-6",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  }
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  // {
  //   organisation: "Devfolio",
  //   title: "UniDAO Lead",
  //   duration: "December 2021 - Present",
  //   content: [
  //     {
  //       text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
  //       link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
  //     },
  //     {
  //       text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
  //       link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
  //     },
  //   ],
  //   logo: devfolio,
  // },
  // {
  //   organisation: "Google Developer Student Club, NITK",
  //   title: "Co-Chair",
  //   duration: "December 2021 - Present",
  //   content: [
  //     {
  //       text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
  //       link: "",
  //     },
  //     {
  //       text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
  //       link: "https://incident.nitk.ac.in/",
  //     },
  //   ],
  //   logo: gdsc,
  // },
  // {
  //   organisation: "Genesis, NITK",
  //   title: "Competitions Head",
  //   duration: "Sep 2021 - Present",
  //   content: [
  //     {
  //       text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
  //       link: "",
  //     },
  //     {
  //       text: "Won 7 inter-college solo dance competitions",
  //       link: "",
  //     },
  //   ],
  //   logo: genesis,
  // },
  // {
  //   organisation: "IRIS, NITK",
  //   title: "Tutor",
  //   duration: "Jan 2022 - Jan 2022",
  //   content: [
  //     {
  //       text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
  //       link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
  //     },
  //   ],
  //   logo: iris,
  // },
  // {
  //   organisation: "E-Cell, NITK",
  //   title: "Executive Member",
  //   duration: "Sep 2021 - Apr 2022",
  //   content: [
  //     {
  //       text: "Organised the season 3 of the E-Cell NITK Podcast",
  //       link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
  //     },
  //     {
  //       text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
  //       link: "",
  //     },
  //   ],
  //   logo: ecell,
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/subham-gupta-53127a137/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/subhamNIT",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:subham.guptasg05@gmail.com",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/__subham.gupta__/",
  },
];

export const aboutMe = {
    name: "Subham Gupta",
    tagLine: "SDE-II @Fox Corporation | Ex-SDE-II @Livspace | Ex-ASDE-II @Publicis Sapient | NIT Rourkela",
    intro: "Innovative Software Engineer with 4+ years of experience specializing in building high-performance, user-centric interfaces. Skilled in modern web frameworks with a proven track record of developing scalable solutions and improving user experiences. Passionate about creating intuitive designs that drive user engagement and maximize product adoption."
}
