export type AboutContentItem = {
  id: string;
  label: string;
  content: string;
  iconKey: string;
  color: string;
  resourceUrl?: string;
  showResource?: boolean;
};

export type AboutContentGroup = {
  id: string;
  label: string;
  items: AboutContentItem[];
};

export type AboutContentCategory = {
  id: string;
  label: string;
  groups: AboutContentGroup[];
};

export const aboutContent: AboutContentCategory[] = [
  {
    id: "professional-info",
    label: "professional-info",
    groups: [
      {
        id: "experience",
        label: "experience",
        items: [
          {
            id: "encoder-it",
            label: "encoder-it",
            iconKey: "briefcase",
            color: "blue",
            content:
              "Front-End Developer Intern | Encoder IT Solution (Remote)\nMarch 2025 - June 2025 | Paid Internship\nBuilt full-stack MERN modules with secure CRUD operations and authentication for Car-Rental, HQMotoServices, and Mithun-Chakra. Developed custom PHP plugins for the EISNews WordPress project and collaborated on production-ready applications.",
          },
          {
            id: "qwik-it",
            label: "qwik-it",
            iconKey: "briefcase",
            color: "amber",
            content:
              "Front-End Developer Intern | Qwik IT Services (Remote)\nFebruary 2025 - April 2025 | Unpaid Internship\nConverted static HTML/CSS designs into the Qwik-Bistro React website. Built a JavaScript construction calculator for Qwik Tools that was later adapted into an Android application.",
          },
        ],
      },
      {
        id: "skills",
        label: "skills",
        items: [
          {
            id: "programming-languages",
            label: "programming-languages",
            iconKey: "code",
            color: "blue",
            content: "Python, JavaScript (ES6+), TypeScript, and PHP.",
          },
          {
            id: "ai-data-science",
            label: "ai-data-science",
            iconKey: "research",
            color: "purple",
            content:
              "Machine Learning, Deep Learning (CNN, Neural Networks), PyTorch, Scikit-Learn, Pandas, NumPy, Matplotlib, and data preprocessing and analysis.",
          },
          {
            id: "web-development",
            label: "web-development",
            iconKey: "laptop",
            color: "green",
            content:
              "React, Next.js, Node.js, Express.js, MongoDB, Redux Toolkit, REST APIs, Tailwind CSS, and React Hook Form.",
          },
          {
            id: "tools-version-control",
            label: "tools-version-control",
            iconKey: "link",
            color: "cyan",
            content: "Git, GitHub, Postman, Netlify, JWT, and Firebase.",
          },
          {
            id: "core-competencies",
            label: "core-competencies",
            iconKey: "user",
            color: "orange",
            content:
              "Problem-solving, research methodology, data visualization, system design, adaptability, and technical communication.",
          },
        ],
      },
      {
        id: "certificates",
        label: "certificates",
        items: [
          {
            id: "web-development-course",
            label: "web-development-course",
            iconKey: "certificate",
            color: "purple",
            content:
              "Complete Web Development Course with Jhankar Mahbub\nCertificate period: January - June 2024",
            resourceUrl:
              "https://drive.google.com/file/d/1sRpxoBcT4rrCLymWiWURXmIigagG0Us-/view?usp=sharing",
            showResource: true,
          },
          {
            id: "communication-hacks",
            label: "communication-hacks",
            iconKey: "certificate",
            color: "blue",
            content: "Communication Hacks\nCertificate date: October 27, 2024",
            resourceUrl:
              "https://drive.google.com/file/d/1wnEDJs2Z1RyxjNUhDwklr9pYVxdvXjvT/view?usp=sharing",
            showResource: true,
          },
          {
            id: "communication-secrets",
            label: "communication-secrets",
            iconKey: "certificate",
            color: "cyan",
            content:
              "Communication Secrets\nCertificate date: November 21, 2024",
            resourceUrl:
              "https://drive.google.com/file/d/1b3DnFXRNYpwmI2SqUQ3FZQtFPj4Fpvxc/view?usp=sharing",
            showResource: true,
          },
        ],
      },
    ],
  },
  {
    id: "personal-info",
    label: "personal-info",
    groups: [
      {
        id: "bio",
        label: "bio",
        items: [
          {
            id: "bio-item",
            label: "bio",
            iconKey: "user",
            color: "blue",
            content:
              "Md. Abdullah Az-Zahur\nSoftware Engineer\nMongla Port, Khulna, Bangladesh\nSoftware Engineer with a strong foundation in MERN stack development and a dedicated focus on AI/ML research. Currently pursuing M.Sc. in ICT with research interest in applying Deep Learning to healthcare challenges.",
          },
        ],
      },
      {
        id: "contact",
        label: "contact",
        items: [
          {
            id: "contact-details",
            label: "contact-details",
            iconKey: "link",
            color: "cyan",
            content:
              "Phone: +88-01705-697897\nEmail: abdullah.az.zahur@gmail.com\nLinkedIn: linkedin.com/in/abdullahzahur\nGitHub: github.com/Abdullah-Az-Zahur\nPortfolio: abdullahzahur.vercel.app",
          },
        ],
      },
      {
        id: "education",
        label: "education",
        items: [
          {
            id: "msc-ict",
            label: "postgrad-path",
            iconKey: "graduation",
            color: "cyan",
            content:
              "M.Sc. Eng. in Information & Communication Technology (Running)\nInstitute: IICT\nUniversity: Khulna University of Engineering & Technology",
          },
          {
            id: "university",
            label: "undergrad-life",
            iconKey: "graduation",
            color: "purple",
            content:
              "B.Sc. in Computer Science & Engineering\nNorth Western University, Khulna | Graduated: September 2023\nCGPA: 3.23/4.00",
          },
          {
            id: "college",
            label: "college-journey",
            iconKey: "graduation",
            color: "blue",
            content:
              "Higher Secondary Certificate (Science)\nBangladesh Navy School & College, Mongla, Jessore Board | 2018\nGPA: 3.92/5.00",
          },
          {
            id: "high-school",
            label: "school-days",
            iconKey: "graduation",
            color: "amber",
            content:
              "Secondary School Certificate (SSC)\nMongla Bandar Secondary School, Mongla | 2016\nGPA: 4.11/5.00",
          },
          {
            id: "bachelor-thesis",
            label: "research-story",
            iconKey: "research",
            color: "orange",
            content:
              "Bachelor's Thesis\nPrediction of Parkinson Disease Using Genetic Algorithm and Machine Learning Technique\nNorth Western University, Khulna, Bangladesh\nCompletion date: September 2023",
          },
        ],
      },
      {
        id: "languages",
        label: "languages",
        items: [
          {
            id: "language-skills",
            label: "language-skills",
            iconKey: "language",
            color: "green",
            content:
              "Bengali: Native proficiency\nEnglish: Conversational proficiency",
          },
        ],
      },
      {
        id: "personal-details",
        label: "personal-details",
        items: [
          {
            id: "personal-details-item",
            label: "personal-details",
            iconKey: "user",
            color: "emerald",
            content:
              "Date of Birth: October 7, 1999\nNationality: Bangladeshi by birth\nMarital Status: Unmarried\nFather: Md. Ashaduzzaman (Purchase Officer - retired, Mongla Cement Factory)\nMother: Mrs. Nazmun Nahar",
          },
        ],
      },
    ],
  },
  {
    id: "hobbies",
    label: "hobbies",
    groups: [
      {
        id: "sports",
        label: "sports",
        items: [
          {
            id: "sports-enthusiast",
            label: "sports-enthusiast",
            iconKey: "running",
            color: "amber",
            content: "Active in football, cricket, and volleyball.",
          },
        ],
      },
      {
        id: "technology",
        label: "technology",
        items: [
          {
            id: "technology-explorer",
            label: "technology-explorer",
            iconKey: "globe",
            color: "blue",
            content:
              "Passionate about emerging web technologies and frameworks.",
          },
        ],
      },
      {
        id: "creative",
        label: "creative",
        items: [
          {
            id: "books",
            label: "books",
            iconKey: "book-open",
            color: "rose",
            content: "Reading technology, design, leadership, and biographies.",
          },
        ],
      },
      {
        id: "gaming",
        label: "gaming",
        items: [
          {
            id: "gaming-interactive-media",
            label: "gaming-interactive-media",
            iconKey: "gamepad",
            color: "orange",
            content:
              "Exploring interactive technology and user experience design through gaming and interactive media.",
          },
        ],
      },
      {
        id: "travel",
        label: "travel",
        items: [
          {
            id: "travel-culture",
            label: "travel-culture",
            iconKey: "plane",
            color: "emerald",
            content: "Enjoying diverse cultural experiences and perspectives.",
          },
        ],
      },
    ],
  },
];
