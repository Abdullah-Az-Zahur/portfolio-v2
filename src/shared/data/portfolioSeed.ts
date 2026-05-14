import { projects } from "./projects";

export const portfolioSeed = {
  name: "Md. Abdullah Az-Zahur",
  bio: `Hello — I’m Md. Abdullah Az-Zahur.
I’m a software engineer. I turn thoughtful ideas into simple, reliable web experiences that people enjoy using.
Day-to-day I build with Next.js and the MERN stack, but what I care about most is clarity: making complex systems feel effortless.
I’m currently deepening my AI/ML knowledge through an M.Sc. in ICT, applying research to practical problems.
My thesis on Parkinson’s prediction taught me how data and design can create real-world impact.
I prefer craft over noise — clean solutions, well-tested, and quietly ambitious.`,
  contact: {
    phone: "+8801705697897",
    email: "abdullah.az.zahur@gmail.com",
  },
  social: {
    github: "https://github.com/Abdullah-Az-Zahur",
    linkedin: "https://www.linkedin.com/in/md-abdullah-az-zahur/",
    facebook: "https://www.facebook.com/abdullah.az.zahur",
  },
};

export const projectSeed = projects.map((project, index) => ({
  ...project,
  order: index + 1,
}));

export const hobbiesSeed = [
  {
    title: "Books",
    description:
      "I read technology, design, and leadership books to borrow other people's shortcuts. Biographies give context — how ideas survive and scale in the real world.",
    order: 1,
  },
  {
    title: "Music",
    description:
      "Instrumental playlists are my background engine for deep work — they keep focus and spark small creative leaps. I explore diverse genres to reset perspective during long sprints.",
    order: 2,
  },
  {
    title: "Games",
    description:
      "Strategic and narrative games sharpen pattern recognition and scenario thinking — skills I bring to system design and UX trade-offs.",
    order: 3,
  },
  {
    title: "Hiking",
    description:
      "Time on the trail is time well-invested: clearer thinking, better energy, and fewer blind spots when tackling tough problems. Fresh air fuels better design decisions.",
    order: 4,
  },
  {
    title: "Nature Walks",
    description:
      "Short walks reset attention and reduce decision fatigue — tiny rituals that preserve consistency across long projects.",
    order: 5,
  },
];

export const educationSeed = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering (B.Sc.)",
    institution: "North Western University, Khulna",
    cgpa: "3.23/4.00",
    date: "Graduated: September 2023",
    description:
      "Core studies in software systems, algorithms, and databases — the practical toolkit I applied to real projects and internships.",
    order: 1,
  },
  {
    degree: "M.Sc.Eng. in ICT (In progress)",
    institution: "IICT, KUET",
    cgpa: "",
    date: "In progress",
    description:
      "Deepening research skills in AI/ML and advanced ICT topics, with a focus on turning experimental models into practical, production-ready features.",
    order: 2,
  },
  {
    degree:
      "Bachelor's Thesis: Prediction of Parkinson's Disease using Genetic Algorithms and Machine Learning",
    institution: "North Western University, Khulna",
    cgpa: "",
    date: "Completed: September 2023",
    description:
      "Combining optimization techniques with ML to extract meaningful signals from noisy biomedical data.",
    order: 3,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bangladesh Navy School and College, Mongla | Jessore Board",
    cgpa: "3.92/5.00",
    date: "2018",
    description:
      "Developed a rigorous approach to analytical thinking and disciplined study.",
    order: 4,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Mongla Bandar Secondary School, Mongla",
    cgpa: "4.11/5.00",
    date: "2016",
    description:
      "Built a solid foundation in scientific thinking and practical problem solving.",
    order: 5,
  },
  {
    degree: "Complete Web Development Course with Jhankar Mahbub",
    institution: "Programming Hero",
    cgpa: "",
    date: "Jan - Jun 2024",
    description:
      "Course completion and additional certifications in communication and collaboration.",
    order: 6,
  },
];

export const experienceSeed = [
  {
    company: "Encoder IT Solution (Remote)",
    position: "Front-End Developer Intern",
    duration: "March 2025 - June 2025 (Paid Internship)",
    description:
      "Implemented MERN modules with secure CRUD, authentication, and pragmatic error handling. Shipped production features for Car-Rental and HQMotoServices.",
    order: 1,
  },
  {
    company: "Qwik IT Services (Remote)",
    position: "Front-End Developer Intern",
    duration: "February 2025 - April 2025 (Unpaid Internship)",
    description:
      "Converted static designs into a polished React site (Qwik-Bistro) and built a reusable JavaScript tool that later became an Android utility.",
    order: 2,
  },
];
