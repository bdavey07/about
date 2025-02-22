import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Benjamin Davey",
  author: "Benjamin Davey",
  description:
    "A well rounded Design Engineering Staff Specialist with a passion for learning new things and getting my hands dirty trying things out.",
  lang: "en",
  siteLogo: "/ben.jpg",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
    { text: "Testimonials", href: "#testimonials" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/daveyb/" },
    { text: "Github", href: "https://github.com/bdavey07" },
    { text: "Email Me", href: "mailto:ben@ben-cloud.net" },
    { text: "Call Me", href: "tel:+15192726883" },
  ],
  canonicalURL: "https://about.ben-cloud.net",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ben Davey",
    title: "Design Engineering Staff Specialist",
    summary:
      "A well rounded Design Engineering Staff Specialist with a passion for learning new things and getting my hands dirty trying things out.",
  },
  projects: [
    {
      name: "Homelab",
      summary: "I buult a collection of servers and networking equipment that I use to learn and experiment with new technologies and to host services for my friends and family.",
      image: "/homelab.jpg",
      linkMore: "",
    },
    {
      name: "Stock Car Racing Career",
      summary: "Throughout high school and university, I built, raced and repaired many iterations of the #07 Bonestock Racecar that I drove at Deleware and Grand Bend Speedways under the Brandy Point Racing Team's umbrella",
      image: "/racing.jpg",
      linkMore: "",
    },
    {
      name: "Guitar Build and Repair",
      summary: "A collection of guitars that I have built and repaired over the years.",
      image: "/guitars.jpg",
      linkMore: "",
    },
    {
      name: "Electronics Projects",
      summary: "As a hobby, I have tinkered with a variety of electroinics projects in my spare time to gain experience with electronics components and learn to repair electronic devices",
      image: "/electronics.jpg",
      linkMore: "",
    },
    {
      name: "3D Printing Projects",
      summary: "I have recently begun to experiment with 3D printing to sharpen my CAD skills and deepend my manufacturing understanding.",
      image: "/print.jpg",
      linkMore: "",
    },
    {
      name: "Woodworking Projects",
      summary: "A selection of woodworking projects I have undertaken.",
      image: "/woodworking.jpg",
      linkMore: "",
    },
  ],
  experience: [
    {
      company: "GDLS-C",
      position: "C4 Systems Design Engineering Staff Specialist",
      startDate: "Jan 2023",
      endDate: "Present",
      summary: [
        "Designing the various C4 subsystems that go into GDLS-C Light Armoured Vehicles from concept development and selection to design release.",
        "Primary areas of focus in vehicle networking, communication systems and counter-UAS systems.",
        "Hands on experience working with test and integration teams to ensure the functionality and quality of the systems.",
      ],
    },
    {
      company: "GDMS-C",
      position: "Systems Engineering Analyst",
      startDate: "May 2022",
      endDate: "Jan 2023",
      summary: [
        "Designed and intgrated C4ISR systems in the next generation of the Canadian Army's Headquarters environment.",
        "Worked directly with customer leadership and end users to define, build and test the solution to best meet Canadian Army's needs.",
      ],
    },
    {
      company: "GDMS-C",
      position: "Systems Integration and Test Engineering Analyst",
      startDate: "May 2019",
      endDate: "May 2022",
      summary: [
        "Worked on the integration and test team for the Canadian Army's next generation of vehicle based C4ISR systems.",
        "Integrated and tested C4ISR components in a Systems Integration Lab and in the field on Canadian Forces Bases.",
        "Supported test events, field trials and demonstrations to Canadian Army leadership and end users.",
      ],
    },
    {
      company: "Various Companies",
      position: "Co-op Positions",
      startDate: "2015",
      endDate: "2019",
      summary: [
        "Worked in a variety of Co-op poitions in wide ranging industries including Agriculture Technology, Web Development and Military Helicopter Software Development.",
        "Responsibilities included automated testing development, robotic systems troubleshooting and maintenance and web development.",
      ],
    },
  ],
  about: {
    description: `
      Hi, I'm Ben Davey, My interest in military vehicles and military technologies began in 2008, the year that my dad started working at GDLS-C as an FSR.
      Since then, I have held this passion that drove me to pursue a degree in Engineering and seek employment in the inustry. I have a wide breadth of experience working with military technology and directly with the end users through my positions with GDMS-C and GDLS-C but I think what really sets me apart is my personal hobbies and interests.
      In the projects section, you will find a selection of my personal projects and expereinces that I believe shows my hands on experience in mechanics and technology areas that I believe are relevant to the Innovation Cell team.
      I love to learn by trying new things, researching all that I can find about them and getting my hands dirty building and breaking things. I believe that this is what makes me the ideal candidate for the Innovation Cell team.
    `,
    image: "/ben.jpg",
  },
};

// #5755ff
