const textConstant = {
  name: "Irfan Sk",
}

const spotlightList = [
  {
    title: 'Home',
    // icon: <Home2 />,
    url: '/',
    text: 'I am Irfan Sk',
  },
  {
    title: 'About',
    //   icon: <AppWindow />,
    url: '/about',
    text: 'Check out who AM I',
  },
  {
    title: 'Experience',
    //   icon: <AppWindow />,
    url: '/experience',
    text: 'Check out what is I DO',
  },
  {
    title: 'Skills',
    //   icon: <Bookmarks />,
    url: '/skills',
    text: 'Check out what is MY Expertness',
  },
  {
    title: 'Projects',
    //   icon: <Bookmarks />,
    url: '/projects',
    text: 'Check out who AM I',
  },
  {
    title: 'Education',
    //   icon: <Bookmarks />,
    url: '/education',
    text: 'Check out what is MY Qualification',
  },
  {
    title: 'Contact',
    //   icon: <Bookmarks />,
    url: '/contact',
    text: 'Contact with ME',
  },
  {
    title: 'Resume',
    //   icon: <Pacman />,
    url: '/resume',
    text: 'Download resume in your Device',
  },
  {
    title: 'More',
    //   icon: ,
    url: '/',
    text: '',
  },
  {
    title: 'LinkedIn',
    //   icon: <Pacman />,
    url: 'https://www.linkedin.com/in/irfanskh/',
    text: 'Connect me on LinkedIn',
  },
  {
    title: 'GitHub',
    //   icon: <Pacman />,
    url: 'https://github.com/irfansk',
    text: 'Connect me on GitHub',
  },
  {
    title: 'Twitter',
    //   icon: <Pacman />,
    url: 'https://x.com/irrfanskh',
    text: 'Connect me on Twitter',
  },
]

const educationList = [

  {
      cardTitle: "Jalpaiguri Government Engineering College",
      cardSubtitle: "Bachelor of Technology in Computer Science & Engineering",
      location: "Jalpaiguri, West Bengal, INDIA",
      cardDetailedText: "DGPA: 6.85/10",
      date: "2014 - 2018",
  },

  {
      cardTitle: "Raghudevbati Sadharaner Vidyalaya (HS)",
      cardSubtitle: "High Secondary 10 + 2",
      location: "Howrah, West Bengal, INDIA",
      date: "2006-2014",
  },
  {
      cardTitle: "Raghudevbati Sadharaner Vidyalaya (HS)",
      cardSubtitle: "Secondary 10th ",
      location: "Howrah, West Bengal, INDIA",
      date: "2012",
  },
  
];

const experienceList = [
  
  {
    date: "january 2019 – december 2022",
    cardTitle: "Ktoon Animation pvt ltd",
    cardSubtitle: "Director",
    cardDetailedText: [
      "Experienced Founder & Director of Ktoon Animation Pvt. Ltd. with a background in engineering and a passion for technology. Currently transitioning to a career in frontend development, leveraging creativity and technical skills to build engaging, user-friendly web applications. Excited to bring innovative ideas and a fresh perspective to the world of web development.",
    ].map(function (text) {
      return <p key={text}>{text}</p>;
    }),
  },
  
];

const projectList = [
  {
    cardTitle: "Chat Bot App",
    cardDetailedText: [
      "Designed robust user-friendly user interface to engage user interactions, and used different answers for a one input",
      "Utilized user input and provided multiple types of feedback responses such as text, YouTube videos, and links",
    ].map(function (text) {
      return <p key={text}>{"● " + text}</p>;
    }),
    technologies: ["HTML", "CSS", "React Js", ],
    links: [
      {
        url: "https://github.com/irfansk",
        text: "View Source Code",
      },
    ],
  },
 
  {
    cardTitle: "E-commerce Website",
    cardDetailedText: [
      "Food ordering website with Restaurants & Customers users.",
      "Develop add to cart and manage cart items.",
    ].map(function (text) {
      return <p key={text}>{"● " + text}</p>;
    }),
    technologies: ["HTML", "Css", "Javascript", "React Js","Bootstrap"],
    links: [
      {
        url: "https://github.com/irfansk",
        text: "View Demo",
      },
    ],
  },
  
];

const skillList = [
  {
    id: 1,
    title: 'HTML',
    img: '/skills/html.svg',
    color: '#fc4503'
  },
  {
    id: 2,
    title: 'CSS',
    img: '/skills/css.svg',
    color: '#0328fc'
  },
  {
    id: 3,
    title: 'JavaScript',
    img: '/skills/javascript.svg',
    color: '#9F70B8'
  },
  {
    id: 4,
    title: 'React JS',
    img: '/skills/react.svg',
    color: '#007FFF'
  },
  {
    id: 5,
    title: 'Bootstrap',
    img: '/skills/bootstrap.svg',
    color: '#18B8B9'
  },
  {
    id: 6,
    title: 'Figma',
    img: '/skills/figma.svg',
    color: '#fefe01'
  },
  {
    id: 7,
    title: 'Photoshop',
    img: '/skills/photoshop.svg',
    color: '#007ACC'
  },
  {
    id: 8,
    title: 'MUI',
    img: '/skills/mui.svg',
    color: '#61DAFB'
  },
  {
    id: 9,
    title: 'C Programing',
    img: '/skills/c.svg',
    color: '#fff'
  },
  {
    id: 10,
    title: 'Python',
    img: '/skills/python.svg',
    color: '#E76F00'
  },
  {
    id: 11,
    title: 'Front End Development',
    img: '/skills/web_development.svg',
    color: '#77BC1F'
  },  
]

const navLinks = [
    { href: '/about', title: 'About' },
    { href: '/experience', title: 'Experience' },
    { href: '/skills', title: 'Skills' },
    { href: '/projects', title: 'Projects' },
    { href: '/education', title: 'Education' },
    { href: '/contact', title: 'Contact' },
    { href: '/resume', title: 'Resume' },
  ]
  
  export {
    spotlightList,
    textConstant, 
    navLinks,
    educationList,
    experienceList,
    projectList,
    skillList,
  };
