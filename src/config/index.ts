import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Benjamin Davey",
  author: "Benjamin Davey",
  description:
    "A well rounded Design Engineering Staff Specialist with a passion for learning new things, trying things out, breaking and re-building things.",
  lang: "en",
  siteLogo: "/ben.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
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
    specialty: "Design Engineering Staff Specialist",
    summary:
      "A well rounded Design Engineering Staff Specialist with a passion for learning new things, trying things out, breaking and re-building things.",
    email: "ben@ben-cloud.net",
  },
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
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/ben.jpg",
  },
};

// #5755ff
