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
    "A passionate Product Manager and Full Stack Developer 🚀 with a knack for enhancing user experiences and streamlining backend processes. Skilled in leveraging Agile methodologies to deliver cutting-edge web and mobile applications, from ideation to launch."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1gWB8jKHws9_dgN2z_VMLJqDE8qfQhXPs/edit?usp=drive_link&ouid=115628144120075725407&rtpof=true&sd=true", // Set to empty to hide the button
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
  subTitle: "A MULTI-FACETED PRODUCT MANAGER AND DEVELOPER WHO THRIVES ON CHALLENGE AND INNOVATION",
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
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product Manager",
      company: "Cognizant, Chicago",
      companylogo: require("./assets/images/cognizantLogo.jpeg"),
      date: "January 2023 - Present",
      desc: "Spearheaded the enhancement of Molina Healthcare's Medicare Advantage application, achieving a 25% increase in efficiency and user satisfaction by integrating front and back-end components seamlessly. Led the development of a user-friendly transaction flow portal utilizing Kendo UI MVVM and Ajax, delivering a responsive UI. Collaborated closely with Agile teams to define sprint goals, prioritize backlogs, and release MVPs, focusing on continuous improvement in delivery processes and product success."
    },
    {
      role: "Full Stack Software Developer",
      company: "Bectran Inc, Chicago",
      companylogo: require("./assets/images/bectranLogo.jpeg"),
      date: "July 2022 - December 2022",
      desc: "Engineered and automated RESTful services using Spring-boot and Postman, enhancing API reliability and reducing manual testing efforts by 25%. Delivered a complete front-end application in NodeJS, JavaScript, HTML5, CSS3, Bootstrap 4, Angular 10. Optimized application deployment using Kubernetes and Jenkins, achieving 100% successful deployments on AWS."
    },
    {
      role: "Computer Specialist",
      company: "UIC, Chicago",
      companylogo: require("./assets/images/uicLogo.png"),
      date: "May 2021 - May 2022",
      desc: "Served as the primary technical liaison for a diverse user base of 500+ faculty, staff, and students, addressing various technology-related inquiries. Led the design and modification of software applications, leveraging AWS services to deploy, debug, and monitor web applications. Spearheaded the documentation of 10+ REST API endpoints using Swagger2."
    },
    {
      role: "Web Application Developer",
      company: "Epic, Wisconsin",
      companylogo: require("./assets/images/epicLogo.jpg"),
      date: "May 2020- January 2021",
      desc: "Employed SQL, Python, and Excel for data analysis, enhancing process efficiency and accelerating project delivery by 20%. Developed Restful API with Django, interacting with external APIs for customer information management. Built Admin User Interface using ReactJS."
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
