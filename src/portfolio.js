/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Naseer's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Naseer Ullah Portfolio",
    type: "website",
    url: "#",
  },
};

//Home Page
const greeting = {
  title: "NASEER ULLAH",
  logo_name: "NASEER",
  nickname: "naseer_khan",
  subTitle:
    "A dedicated person who consistently excels at working on comprehensive projects that build sustainable and scalable social and technical systems to make a difference.",
  resumeLink:
    "https://drive.google.com/file/d/14UJtBCWXKR0OLPRr61KzSjCVd3yPcj4J/view",
  portfolio_repository: "https://github.com/naseer909/NPMProject",
  githubProfile: "https://github.com/naseer909",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/naseer909",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/naseer-ullah-965a7a213/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "#",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:naseerullah4041@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "#",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "#",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "#",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "WEB DEVELOPMENT IN MERN",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable, production-ready applications for various deep learning and statistical use cases using MongoDB, Express.js, React, and Node.js.",
        "⚡ Experience of developing and deploying computer vision and NLP applications using MongoDB, Express.js, React, and Node.js.",
        "⚡ Implementing complex quantitative modeling for dynamic forecasting and time series analysis using MongoDB, Express.js, React, and Node.js.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building a responsive website front end using React and Redux within the MERN stack.",
        "⚡ Developing mobile applications using React Native, and integrating them within the MERN stack, alongside solo Android apps using Kotlin",
        "⚡ Creating application backend using Node.js and Express within the MERN stack",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience deploying and managing MERN stack applications on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances, including database integration, within the MERN stack",
        "⚡ Deploying deep learning models on the cloud for use on mobile devices within the MERN stack",
        "⚡ Setting up streaming jobs between databases and servers on GCP and AWS within the MERN stack",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
       
  ],
};

const degrees = {
  degrees: [
    {
      title: "HEAVY INDUSTRIES TAXILA EDUCATION CITY",
      subtitle: "EDUCATION TILL MIDDLE 8th Grade",
      logo_path: "HITEC_University_Logo.png",
      alt_name: "HITEC TAXILA CANTT",
      duration: "2012 - 2013",
      descriptions: [
        "⚡ I have studied basic concepts related to DS, Algorithms, DBMS, OS etc.",
        "⚡ Apart from this, I did courses on Deep Learning, Data Science, and Full Stack Development.",
        "⚡ I was selected for USA exchange program which is given to top 10% of students in school.",
      ],
      website_link: "https://hitecuni.edu.pk/",
    },
    {
      title: "HITEC CAMBRIDGE SCHOOL",
      subtitle: "COMPLETED MY O-LEVELS",
      logo_path: "HITEC_University_Logo.png",
      alt_name: "HITEC TAXILA CANTT",
      duration: "2013 - 2016",
      descriptions: [
        "⚡ I completed my O levels from HITEC Cambridge School, where I acquired a wide range of challenging and valuable skills.",
        "⚡ This academic environment equipped me with a strong foundation in various subjects, critical thinking, problem-solving abilities, and a dedication to academic excellence.",
        "⚡ My time at HITEC Cambridge School was instrumental in shaping my educational journey and preparing me for future academic and professional endeavors.",
      ],
      website_link: "https://hitec.edu.pk/institutions/cambridge/", 
},
{
  title: "PUNJAB COLLEGE OF SCIENCES",
  subtitle: "COMPLETED PRE-ENGINEERING",
  logo_path: "punjabCollege.png",
  alt_name: "Punjab College of Science",
  duration: "2017 - 2019",
  descriptions: [
    "⚡ I completed my FSC Pre-Engineering from Punjab College of Science, Lahore, achieving excellent grades.",
    "⚡ During my time there, I honed my analytical and technical skills, laying a strong foundation in mathematics, physics, and chemistry.",
    "⚡ The rigorous curriculum and supportive environment at Punjab College of Science prepared me well for future academic and professional challenges in engineering and related fields.",
  ],
  website_link: "https://pgc.edu/",
},
{
  title: "COMSATS UNIVERSITY ISLAMABAD (LAHORE CAMPUS)",
  subtitle: "SOFTWARE ENGINEERING",
  logo_path: "COMSATS.png",
  alt_name: "Punjab College of Science",
  duration: "2020 - 2024",
  descriptions: [
    "⚡ I completed my Software Engineering degree from COMSATS Lahore, where I gained a wealth of new skills and knowledge.",
    "⚡ My education equipped me with a strong foundation in software development, algorithms, and system design.",
    "⚡ Now, as a web developer, I leverage these skills to create dynamic, scalable, and user-friendly web applications. My journey at COMSATS Lahore has been instrumental in shaping my career and passion for technology.",
  ],
  website_link: "https://lahore.comsats.edu.pk/default.aspx",
},
],  
};
const certifications = {
  certifications: [
       {
      title: "Fullstack Development",
      subtitle: "- Naseer Khan Masood",
      logo_path: "coursera_logo.png",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "ESSAY WRITING COMPETITION",
      subtitle: "- Writer",
      logo_path: "essay.png",
      alt_name: "ESSAY",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Cryptographer",
      logo_path: "nptel_logo.png",
      alt_name: "Crypto",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Cloud Computing",
      logo_path: "gcp_logo.png",
      alt_name: "Cloud",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as a Laravel Developer and MERN Stack Developer, Designer, and Software Architect. Additionally, I have collaborated with well-established companies, primarily in the role of a Full-Stack Developer. My passion for organizing events has led me to actively participate in various open-source communities as a representative, where I enjoy contributing to and fostering innovation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "LARAVEL DEVELOPER",
          company: "Einnovetion PVT LTD",
          company_url: "https://einnovention.us/",
          logo_path: "einnovention.png",
          duration: "June 2023 - Present",
          location: "LAHORE, PAKISTAN",
          description:
            "I am a Laravel Developer at Einnovention Software House, where I specialize in building robust and scalable web applications. My role involves designing and implementing efficient backend solutions, ensuring seamless integration with front-end technologies, and optimizing application performance. At Einnovention, I leverage my expertise in Laravel to deliver high-quality software solutions that meet our clients' diverse needs.",
          color: "#000000",
        },
        {
          title: "CERTIFIED ETHICAL HACKER",
          company: "CORVIT LAHORE EDUCATIONAL FIRM",
          company_url: "https://www.corvit.com/systems/about-us/introduction/",
          logo_path: "corvit.png",
          duration: "May 2024 - June 2024",
          location: "LAHORE, PAKISTAN",
          description:
            "I completed my Certified Ethical Hacker (CEH) course in Cyber Security from Corvit Lahore, where I gained in-depth knowledge of network security, vulnerability assessment, and penetration testing. During this course, I also worked on several projects, applying my skills to real-world scenarios to enhance system security and protect against cyber threats. This experience has strengthened my expertise in the field of cyber security.",
          color: "#9b1578",
        },
        {
          title: "MERN STACK DEVELOPER",
          company: "COMSATS LAHORE.",
          company_url: "https://lahore.comsats.edu.pk/about/introduction.aspx",
          logo_path: "COMSATS.png",
          duration: "April 2020 - April 2024",
          location: "LAHORE, PUNJAB",
          description:
            "During my time at university, I worked as a MERN Stack Developer on various projects. This experience allowed me to gain hands-on proficiency in MongoDB, Express.js, React, and Node.js, enabling me to build full-stack web applications. I successfully developed and deployed several projects, honing my skills in front-end and back-end development, database management, and API integration. These projects provided a solid foundation for my career as a full-stack developer.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "LARAVEL DEVELOPER",
          company: "Einnovetion PVT LTD",
          company_url: "https://einnovention.us/",
          logo_path: "einnovention.png",
          duration: "June 2023 - Present",
          location: "LAHORE, PAKISTAN",
          description:
            "I am a Laravel Developer at Einnovention Software House, where I specialize in building robust and scalable web applications. My role involves designing and implementing efficient backend solutions, ensuring seamless integration with front-end technologies, and optimizing application performance. At Einnovention, I leverage my expertise in Laravel to deliver high-quality software solutions that meet our clients' diverse needs.",
          color: "#000000",
        },
        {
          title: "CERTIFIED ETHICAL HACKER",
          company: "CORVIT LAHORE EDUCATIONAL FIRM",
          company_url: "https://www.corvit.com/systems/about-us/introduction/",
          logo_path: "corvit.png",
          duration: "May 2024 - June 2024",
          location: "LAHORE, PAKISTAN",
          description:
            "I completed my Certified Ethical Hacker (CEH) course in Cyber Security from Corvit Lahore, where I gained in-depth knowledge of network security, vulnerability assessment, and penetration testing. During this course, I also worked on several projects, applying my skills to real-world scenarios to enhance system security and protect against cyber threats. This experience has strengthened my expertise in the field of cyber security.",
          color: "#9b1578",
        },
        {
          title: "MERN STACK DEVELOPER",
          company: "COMSATS LAHORE.",
          company_url: "https://lahore.comsats.edu.pk/about/introduction.aspx",
          logo_path: "COMSATS.png",
          duration: "April 2020 - April 2024",
          location: "LAHORE, PUNJAB",
          description:
            "During my time at university, I worked as a MERN Stack Developer on various projects. This experience allowed me to gain hands-on proficiency in MongoDB, Express.js, React, and Node.js, enabling me to build full-stack web applications. I successfully developed and deployed several projects, honing my skills in front-end and back-end development, database management, and API integration. These projects provided a solid foundation for my career as a full-stack developer.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Microsoft Student Ambassador Program",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2016 - May 2017",
          location: "Lahore, Punjab",
          description:
            "I was part of the Microsoft Student Ambassador Program, where I gained valuable insights into the latest Microsoft technologies and tools. This program provided me with opportunities to enhance my technical skills, participate in workshops, and collaborate with other student developers on innovative projects. My involvement in the program significantly contributed to my growth as a developer and expanded my network within the tech community.",
          color: "#D83B01",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2024 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "naseer_image.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "House 8-A Mansoorah Multan Road Lahore",
    locality: "Lahore, Pakistan",
    country: "Pakistan",
    region: "Lahore",
    postalCode: "45000",
    streetAddress: "Mansoorah Multan Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Mansoorah,+Lahore,+Punjab,+Pakistan/@31.4927607,74.2612186,16z/data=!3m1!4b1!4m6!3m5!1s0x391903b367f6df37:0xcb6f005a8176db35!8m2!3d31.4927121!4d74.2656164!16s%2Fm%2F0h3vlw_?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
