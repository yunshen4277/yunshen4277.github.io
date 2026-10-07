/* YOUR EDITING DESK
 * Keep unconfirmed information empty. Missing links stay visibly unavailable.
 * Paths are relative to index.html so both kinds of GitHub Pages URLs work.
 */
window.PORTFOLIO = {
  links: {
    email: "", // [Email] — an address only, without mailto:
    github: "https://github.com/yunshen4277",
    linkedin: "", // [LinkedIn URL]
    website: "https://yunshen4277.github.io/", // Keep the metadata in index.html in sync.
    phcWebsite: "", // [PHC Website URL]
    phcDiscord: "", // [PHC Discord URL]
    phcInstagram: "", // [PHC Instagram URL]
    phcOther: "", // [Other PHC Social URL]
  },
  profile: {
    image: "assets/images/profile-placeholder.svg",
    alt: "Professional photo placeholder for Junkai Mai",
  },
  phc: {
    logo: "assets/images/phc-logo-placeholder.svg",
    logoAlt: "PHC logo placeholder",
    workshopImage: "", // Example: 'assets/images/phc-workshop.jpg'
    workshopAlt: "", // Describe the actual photo when added.
    projectImage: "",
    projectAlt: "",
  },
  education: {
    graduation: "", // [Expected Graduation Date]
    gpa: "", // [GPA - Optional]
    coursework: "", // [Relevant Coursework] — real completed/current classes only
    honors: "", // [Honors - Optional]
    certifications: "", // [Certifications - Optional]
  },
  resume: { path: "assets/resume/Junkai-Mai-Resume.pdf", ready: false },
  // Add or remove an entire object to add or remove a project.
  // Status must reflect reality. These thumbnails are diagrams, not project photos.
  projects: [
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      description:
        "A responsive home for technical projects, hardware interests, and student leadership—built to grow with me.",
      category: "WEB DEVELOPMENT",
      status: "Published",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      image: "assets/images/project-portfolio.svg",
      imageAlt: "Abstract browser layout diagram for this portfolio",
      github: "https://github.com/yunshen4277/yunshen4277.github.io",
      demo: "https://yunshen4277.github.io/",
      details: [
        {
          heading: "The project",
          text: "This static portfolio brings together my Computer Science studies, interest in hardware, and leadership of Phoenix Hardware Club.",
        },
        {
          heading: "Design & implementation",
          text: "Responsive layouts, light and dark themes, keyboard-friendly navigation, and reusable project data. Built with plain HTML, CSS, and JavaScript; no backend or build step.",
        },
        {
          heading: "Next steps",
          text: "Replace the labeled personal details and continue documenting projects and club activities.",
        },
      ],
    },
    {
      id: "phc",
      title: "Phoenix Hardware Club",
      description:
        "A student organization centered on approachable hardware education, practical projects, and learning together.",
      category: "LEADERSHIP / HARDWARE / COMMUNITY",
      status: "Current initiative",
      technologies: ["Leadership", "Hardware", "Community"],
      image: "assets/images/project-community.svg",
      imageAlt:
        "Connected-node diagram representing hardware learning and community",
      github: "",
      demo: "#phc",
      details: [
        {
          heading: "My role",
          text: "Founder & President of Phoenix Hardware Club at Florida Polytechnic University.",
        },
        {
          heading: "The focus",
          text: "Beginner-friendly, hands-on computer hardware education through technical workshops, collaborative projects, and practical activities.",
        },
        {
          heading: "Documentation to add",
          text: "[Workshop summaries], [Project photos], and [Confirmed outcomes]. Specific events, partnerships, and results have not been supplied.",
        },
      ],
    },
    {
      id: "case-design",
      title: "PC Case Design",
      description:
        "A future project space for CAD, component layout, airflow planning, and 3D printed prototyping.",
      category: "ENGINEERING / DESIGN",
      status: "Placeholder · Future project",
      technologies: ["CAD", "3D Printing", "Hardware Design"],
      image: "assets/images/project-case.svg",
      imageAlt:
        "Conceptual dimensioned enclosure diagram; not a completed case design",
      github: "",
      demo: "",
      details: [
        {
          heading: "Future project placeholder",
          text: "No completed design or prototype is being claimed. Replace this entry when there is a real project to share.",
        },
        {
          heading: "What to document",
          text: "[Design goal], [Component constraints], [CAD process], [Airflow considerations], [Prototype photos], and [Lessons learned].",
        },
      ],
    },
    {
      id: "hardware-build",
      title: "Hardware Build & Troubleshooting",
      description:
        "A future record of a computer build, repair, upgrade, or diagnostic process, from problem to resolution.",
      category: "COMPUTER HARDWARE",
      status: "Placeholder · Future project",
      technologies: ["PC Hardware", "Diagnostics", "System Assembly"],
      image: "assets/images/project-hardware.svg",
      imageAlt: "Conceptual hardware diagnostic flow diagram",
      github: "",
      demo: "",
      details: [
        {
          heading: "Future project placeholder",
          text: "This entry reserves space for real hardware work. No build, repair, or outcome has been provided yet.",
        },
        {
          heading: "What to document",
          text: "[Initial symptoms or build goal], [Components], [Diagnostic steps], [Photos], [Verified result], and [Lessons learned].",
        },
      ],
    },
    {
      id: "coursework",
      title: "Programming Coursework",
      description:
        "A place for selected Computer Science assignments and programming projects, once ready to share.",
      category: "COMPUTER SCIENCE",
      status: "Placeholder · Details to add",
      technologies: ["Python · to confirm", "C · to confirm"],
      image: "assets/images/project-code.svg",
      imageAlt: "Abstract code structure diagram for future coursework",
      github: "",
      demo: "",
      details: [
        {
          heading: "Coursework placeholder",
          text: "Specific courses, languages used, and completed assignments have not been confirmed. Python and C are suggested labels to review.",
        },
        {
          heading: "What to document",
          text: "[Course name], [Project objective], [Your contribution], [Actual technologies], and [What you learned]. Check course sharing rules before publishing assignment solutions.",
        },
      ],
    },
  ],
  // These are grouped interests and suggested skills, not proficiency claims.
  // Change the note only when the listed experience is accurate for you.
  skills: [
    {
      title: "Programming",
      note: "Suggested skills · to confirm",
      items: ["Python", "C", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Hardware",
      note: "Areas of focus",
      items: [
        "Computer Hardware",
        "PC Assembly",
        "PC Troubleshooting",
        "Component Installation",
        "Hardware Diagnostics",
        "System Upgrades",
      ],
    },
    {
      title: "Engineering & Design",
      note: "Areas of interest",
      items: [
        "CAD",
        "3D Printing",
        "Hardware Design",
        "Airflow / Thermal Design",
        "Embedded Systems",
        "Electronics",
        "AI",
      ],
    },
    {
      title: "Tools",
      note: "Suggested tools · to confirm",
      items: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "Leadership",
      note: "Role & areas of focus",
      items: [
        "Student Organization Leadership",
        "Workshop Planning",
        "Project Coordination",
        "Technical Communication",
      ],
    },
  ],
};
