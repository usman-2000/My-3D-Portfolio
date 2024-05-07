import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  teciz,
  technyx,
  qsols,
  solidity,
  hardhat,
  eth,
  project1,
  project2,
  Project4,
  project5,
  Project6,
  Project8,
  t3,
  next,
  Project7,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Smart Contract Developer",
    icon: mobile,
  },
  {
    title: "Blockchain Developer",
    icon: backend,
  },
  {
    title: "Smart Contract Auditor",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Next js",
    icon: next,
  },
  {
    name: "Ethereum",
    icon: eth,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "t3 stack",
    icon: t3,
  },
];

const experiences = [
  {
    title: "Blockchain Developer",
    company_name: "Q-Solutions",
    icon: qsols,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "As a Blockchain developer i develop decentralized websites.",
      "Writing smart contract for different NFT Marketplaces.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "I also develop website using T3 stack.",
      "Here in our company we mainly not focus on single domain. I worked on frontend, backend, web optimization, unit testing, flow testing etc."
    ],
  },
  {
    title: "Blockchain Developer Internship",
    company_name: "Teciz Everything",
    icon: teciz,
    iconBg: "#383E56",
    date: "March 2023 - May 2023",
    points: [
      "Creating NFT's and writing smart contracts for decentralized web applications.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer Internship",
    company_name: "Technyx System",
    icon: technyx,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Learned new techniques of buildind websites.",
      "Working with APIs",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Q-Calender",
    description: `This is the internal task-management and user-management system of our company Q-solutions. For Attendance of a user, there is a QR-code generator as well as scanner to mark his attendance. Employee can also mark attendance by detecting face. User can see his pending tasks, completed tasks, in progress tasks etc. User can also generate report at the end of the month. `,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "prime-react",
        color: "pink-text-gradient",
      },
      {
        name: "material-ui",
        color: "red-text-gradient",
      }
    ],
    image: Project8,
    source_code_link: "Private Repo",
    project_link: "https://calendar.q-qsols.com/"
  },
  {
    name: "NFT Marketplace",
    description: `In this marketplace you can mint nfts, buy nfts and also resell your nfts. You can show list of your nfts. You can add metadata.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Project7,
    source_code_link: "https://github.com/usman-qsols/nftmarketdemo",
    project_link: ""
  },
  {
    name: "Spotify Clone / Lyriks",
    description: `This is the spotify clone website where you can listen latest songs.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Project6,
    source_code_link: "https://github.com/usman-2000/Spotify-Clone",
    project_link: ""
  },
  {
    name: "3D Portfolio",
    description: `3D portfolio with a unique design and graphics.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/usman-2000/My-3D-Portfolio",
    project_link: ""
  },
  {
    name: "Portfolio",
    description: `This was my first portfolio. It has unique design with eye-catching styles. Want to visit : usman-rahim-portfolio.netlify.app`,
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/usman-2000/Portfolio",
    project_link: ""
  },
  {
    name: "Saphlink",
    description:
      "A comprehensive agency website for a client. It has amazing 3D graphics and has a beautiful design. Want to visit this site? just copy this link : https://saphlink-test.netlify.app/",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "particlejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Project4,
    source_code_link: "https://github.com/usman-2000/saphlink-project",
    project_link: ""
  },
  {
    name: "Saas Website",
    description:
      "A comprehensive agency website for a client.Want to visit this site? just copy this link : https://saas-project-website.netlify.app/",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "reacticons",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/usman-2000/saas-project",
    project_link: ""
  },
];

export { services, technologies, experiences, testimonials, projects };
