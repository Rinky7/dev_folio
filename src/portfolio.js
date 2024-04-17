/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shreeya Kankandula",
  title: "Hi all, I'm Shreeya",
  subTitle: emoji(
    "A passionate Business Analyst and Full Stack Java Developer 🚀 with a knack for enhancing user experiences and streamlining backend processes. Skilled in leveraging Agile methodologies to deliver cutting-edge web and mobile applications, from ideation to launch."
  ),
  resumeLink:
    "https://1drv.ms/w/s!AkNt8Cm9PVKUgZkOZWVLSrANDeU7MA?e=i1nYbh", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "shreeya.rao18@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A MULTI-FACETED SCRUM MASTER, BUSINESS ANALYST AND DEVELOPER WHO THRIVES ON CHALLENGE AND INNOVATION",
  skills: [
    emoji(
      "⚡ Enhance digital experiences by integrating seamless front and backend functionalities"
    ),
    emoji("⚡ Implement advanced data analysis techniques to drive decision-making and optimizations"),
    emoji(
      "⚡ Lead cross-functional teams to achieve product excellence and operational efficiency"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois Chicago",
      logo: require("./assets/images/uicLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - May 2022",
      desc: "GPA: 3.7/4. Delved into advanced computer science principles and hands-on project work.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Scrum Master / Business Analyst",
      company: "Molina Healthcare, Chicago",
      companylogo: require("./assets/images/molinahealthcareLogo.png"),
      date: "January 2023 - Present",
      desc: "As a Scrum Master and Business Analyst, I developed a responsive transaction flow portal using Kendo UI, MVVM, and Ajax, and managed daily tasks like regression testing and content management in AEM and Contentful. I was instrumental in gathering requirements, maintaining project documentation with tools like Airtable and Rally, and facilitating coordination between Agile, SAFe teams, and stakeholders to drive strategic alignment and project success"
    },
    {
      role: "Full Stack Java Developer",
      company: "Bectran Inc, Chicago",
      companylogo: require("./assets/images/bectranLogo.jpeg"),
      date: "July 2022 - December 2022",
      desc: "As a Full Stack Java Developer, I engineered and automated RESTful services using Spring Boot and Postman, improving API reliability and reducing manual testing by 25%. I delivered a complete front-end application using NodeJS, JavaScript, HTML5, CSS3, Bootstrap 4, and Angular 10. Additionally, I implemented RESTful services with Spring Boot to handle JSON data efficiently and optimized deployment using Kubernetes and Jenkins, achieving flawless deployments on AWS and providing round-the-clock application support"
    },
    {
      role: "Business Analyst",
      company: "UIC, Chicago",
      companylogo: require("./assets/images/uicLogo.png"),
      date: "May 2021 - May 2022",
      desc: "As a Business Analyst, I utilized Tableau and Power BI to support over 500 faculty, staff, and students, addressing diverse technology needs. I led software development using Agile methodologies, tailoring solutions to enhance operational efficiency. Additionally, I managed AWS services like EC2 and Lambda, focusing on deployment, troubleshooting, and performance monitoring to support web application functionality"
    },
    {
      role: "Business Analyst",
      company: "Realiable Software's, Michigan",
      companylogo: require("./assets/images/Reliable pic.jpeg"),
      date: "May 2020- June 2021",
      desc: "As a Business Analyst, I conducted detailed data analyses using SQL and Excel to enhance process efficiency, increasing project delivery speed by 20%. I spearheaded the creation of a customer management system using a RESTful API, improving data integration. I collaborated with teams to gather requirements and manage projects with JIRA and Confluence, ensuring alignment with business goals. Additionally, I developed an efficient admin interface with SharePoint and AEM to streamline customer service operations."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "SIGNIFICANT PROJECTS THAT MARKED MY JOURNEY",
  projects: [
    {
      image: require("./assets/images/telemedicineLogo.webp"),
      projectName: "Telemedicine Platform Development",
      projectDesc: "Spearheaded the development of a telemedicine platform, facilitating over 3 million remote consultations amid COVID-19",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "My Professional Certifications",

  achievementsCards: [
    {
      title: "Certified Product Manager from AIPMM",
      image: require("./assets/images/aipmmLogo.jpeg"),
    },
    {
      title: "Scrum Certified Product Owner",
      image: require("./assets/images/scrumAllianceLogo.jpeg"),
    },

    {
      title: "PEGA Certified System Architect",
      image: require("./assets/images/pegaLogo.png"),
    },
    {
      title: "PEGA Certified Senior System Architect",
      image: require("./assets/images/pegaLogo.png"),
    },
    {
      title: "Risk Management Certification",
      image: require("./assets/images/pmiLogo.png"),
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(475)439-3898",
  email_address: "shreeya.rao18@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
