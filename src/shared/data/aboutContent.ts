export type AboutContentItem = {
  id: string;
  label: string;
  content: string;
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
            id: "qwik-it",
            label: "qwik-it",
            content:
              "Qwik IT Services (Remote) | Front-End Developer Intern\nFebruary 2025 - April 2025 (Unpaid Internship)\nFocus: rapid prototyping and client-focused iteration. Converted static designs into a polished React site (Qwik-Bistro) and built a reusable JavaScript tool that later became an Android utility.",
          },
          {
            id: "encoder-it",
            label: "encoder-it",
            content:
              "Encoder IT Solution (Remote) | Front-End Developer Intern\nMarch 2025 - June 2025 (Paid Internship)\nFocus: turning polished UI into resilient features. Implemented MERN modules with secure CRUD, authentication, and pragmatic error handling. Highlights: Car-Rental, HQMotoServices, and a PHP extension for WordPress.",
          },
        ],
      },
      {
        id: "skills",
        label: "skills",
        items: [
          {
            id: "technical-skills",
            label: "technical-skills",
            content:
              "Technical Playground\nLanguages: Python, TypeScript, and JavaScript (ES6+).\nWeb: Next.js, React, Node.js, Express, MongoDB.\nData & AI: PyTorch, Scikit-Learn, Pandas.\nWorkflow: Git, React Hook Form, Tailwind CSS, and pragmatic testing.",
          },
        ],
      },
      {
        id: "certificates",
        label: "certificates",
        items: [
          {
            id: "certifications",
            label: "certifications",
            content:
              "Learning Journey & Certifications\nComplete Web Development Course with Jhankar Mahbub (Jan - Jun 2024).\nCommunication Hacks and Communication Secrets certified.\nI treat certificates as fuel: learn, validate, and then build real features.",
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
            content:
              "Hello — I’m Md. Abdullah Az-Zahur.\nI’m a software engineer who turns thoughtful ideas into simple, reliable web experiences. I build with Next.js and the MERN stack and am deepening my AI/ML knowledge through an M.Sc. in ICT.",
          },
        ],
      },
      {
        id: "interest",
        label: "interests",
        items: [
          {
            id: "interest-item",
            label: "interests",
            content:
              "Outside code, I stay curious through team sports, travel, and hands-on experiments with new web and AI tools. These habits inform my product choices: durability, clarity, and delightful small details.",
          },
        ],
      },
      {
        id: "education",
        label: "education",
        items: [
          {
            id: "high-school",
            label: "school-days",
            content:
              "Secondary School Certificate (SSC)\nMongla Bandar Secondary School, Mongla | 2016\nGPA: 4.11/5.00\nA foundation in scientific thinking and problem solving.",
          },
          {
            id: "college",
            label: "college-journey",
            content:
              "Higher Secondary Certificate (HSC)\nBangladesh Navy School and College, Mongla | Jessore Board | 2018\nGPA: 3.92/5.00\nA rigorous approach to analytical thinking and disciplined study.",
          },
          {
            id: "university",
            label: "undergrad-life",
            content:
              "Bachelor of Science in Computer Science and Engineering (B.Sc.)\nNorth Western University, Khulna | Graduated: September 2023\nCGPA: 3.23/4.00\nCore studies in software systems, algorithms, and databases.",
          },
          {
            id: "msc-ict",
            label: "postgrad-path",
            content:
              "M.Sc.Eng. in ICT (In progress)\nIICT, KUET\nDeepening research skills in AI/ML and advanced ICT topics, with a focus on practical, production-ready features.",
          },
          {
            id: "bachelor-thesis",
            label: "research-story",
            content:
              "Bachelor's Thesis\nPrediction of Parkinson's Disease using Genetic Algorithms and Machine Learning\nCompleted: September 2023, North Western University, Khulna\nFocus: combining optimization techniques with ML to extract meaningful signals from noisy biomedical data.",
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
        id: "creative",
        label: "creative",
        items: [
          {
            id: "books",
            label: "books",
            content:
              "Books\nI read technology, design, and leadership books to borrow other people’s shortcuts. Biographies give context: how ideas survive and scale in the real world.",
          },
        ],
      },
      {
        id: "outdoor",
        label: "outdoor",
        items: [
          {
            id: "hiking",
            label: "hiking",
            content:
              "Hiking\nTime on the trail is time well-invested: clearer thinking, better energy, and fewer blind spots when tackling tough problems.",
          },
          {
            id: "games",
            label: "games",
            content:
              "Games\nStrategic and narrative games sharpen pattern recognition and scenario thinking — skills I bring to system design and UX trade-offs.",
          },
        ],
      },
      {
        id: "wellness",
        label: "wellness",
        items: [
          {
            id: "nature-walks",
            label: "nature-walks",
            content:
              "Nature Walks\nShort walks reset attention and reduce decision fatigue — tiny rituals that preserve consistency across long projects.",
          },
        ],
      },
    ],
  },
];
