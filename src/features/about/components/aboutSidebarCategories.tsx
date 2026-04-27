import { SidebarCategory } from "@/features/about/components/sidebarTypes";
import QwikItExperience from "@/features/about/components/ProfessionalInfo/Experience/QwikItExperience";
import EncoderITExperience from "@/features/about/components/ProfessionalInfo/Experience/EncoderITExperience";
import TechnicalSkills from "@/features/about/components/ProfessionalInfo/Skills/TechnicalSkills";
import Certifications from "@/features/about/components/ProfessionalInfo/Certificates/Certifications";
import BioInfo from "@/features/about/components/PersonalInfo/Bio/BioInfo";
import InterestsInfo from "@/features/about/components/PersonalInfo/Interests/InterestsInfo";
import HighSchoolInfo from "@/features/about/components/PersonalInfo/Education/HighSchoolInfo";
import CollegeInfo from "@/features/about/components/PersonalInfo/Education/CollegeInfo";
import UniversityInfo from "@/features/about/components/PersonalInfo/Education/UniversityInfo";
import MScInfo from "@/features/about/components/PersonalInfo/Education/MScInfo";
import BachelorThesisInfo from "@/features/about/components/PersonalInfo/Education/BachelorThesisInfo";
import BooksHobby from "@/features/about/components/Hobbies/Creative/BooksHobby";
import HikingHobby from "@/features/about/components/Hobbies/Outdoor/HikingHobby";
import GamesHobby from "@/features/about/components/Hobbies/Outdoor/GamesHobby";
import NatureWalksHobby from "@/features/about/components/Hobbies/Wellness/NatureWalksHobby";
import {
  FaBriefcase,
  FaCertificate,
  FaGamepad,
  FaLaptopCode,
  FaLeaf,
  FaUserGraduate,
  FaUserTie,
  FaStar,
  FaUniversity,
  FaUser,
  FaBookOpen,
} from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { FaPersonHiking } from "react-icons/fa6";

export const aboutSidebarCategories: SidebarCategory[] = [
  {
    id: "professional-info",
    label: "professional-info",
    icon: FaUserTie,
    iconClass: "text-blue-400",
    groups: [
      {
        id: "experience",
        label: "experience",
        arrowClass: "text-blue-500",
        folderClass: "text-blue-500",
        items: [
          {
            id: "qwik-it",
            title: "qwik-it",
            label: "qwik-it",
            icon: FaBriefcase,
            activeClass: "text-yellow-500 font-medium",
            hoverClass: "hover:text-yellow-500",
            iconClass: "text-yellow-500",
            content: <QwikItExperience />,
          },
          {
            id: "encoder-it",
            title: "encoder-it",
            label: "encoder-it",
            icon: FaBriefcase,
            activeClass: "text-blue-500 font-medium",
            hoverClass: "hover:text-blue-500",
            iconClass: "text-blue-500",
            content: <EncoderITExperience />,
          },
        ],
      },
      {
        id: "skills",
        label: "skills",
        arrowClass: "text-green-500",
        folderClass: "text-green-500",
        items: [
          {
            id: "technical-skills",
            title: "technical-skills",
            label: "technical-skills",
            icon: FaLaptopCode,
            activeClass: "text-green-500 font-medium",
            hoverClass: "hover:text-green-500",
            iconClass: "text-green-500",
            content: <TechnicalSkills />,
          },
        ],
      },
      {
        id: "certificates",
        label: "certificates",
        arrowClass: "text-purple-500",
        folderClass: "text-purple-500",
        items: [
          {
            id: "certifications",
            title: "certifications",
            label: "certifications",
            icon: FaCertificate,
            activeClass: "text-purple-500 font-medium",
            hoverClass: "hover:text-purple-500",
            iconClass: "text-purple-500",
            content: <Certifications />,
          },
        ],
      },
    ],
  },
  {
    id: "personal-info",
    label: "personal-info",
    icon: FaUser,
    iconClass: "text-emerald-400",
    groups: [
      {
        id: "bio",
        label: "bio",
        arrowClass: "text-blue-500",
        folderClass: "text-blue-500",
        items: [
          {
            id: "bio-item",
            title: "bio",
            label: "bio",
            icon: FaUser,
            activeClass: "text-blue-500 font-medium",
            hoverClass: "hover:text-blue-500",
            iconClass: "text-blue-500",
            content: <BioInfo />,
          },
        ],
      },
      {
        id: "interest",
        label: "interests",
        arrowClass: "text-green-500",
        folderClass: "text-green-500",
        items: [
          {
            id: "interest-item",
            title: "interests",
            label: "interests",
            icon: FaStar,
            activeClass: "text-green-500 font-medium",
            hoverClass: "hover:text-green-500",
            iconClass: "text-green-500",
            content: <InterestsInfo />,
          },
        ],
      },
      {
        id: "education",
        label: "education",
        arrowClass: "text-purple-500",
        folderClass: "text-purple-500",
        items: [
          {
            id: "high-school",
            title: "school-days",
            label: "school-days",
            icon: GiSchoolBag,
            activeClass: "text-yellow-500 font-medium",
            hoverClass: "hover:text-yellow-500",
            iconClass: "text-yellow-500",
            content: <HighSchoolInfo />,
          },
          {
            id: "college",
            title: "college-journey",
            label: "college-journey",
            icon: FaUniversity,
            activeClass: "text-blue-500 font-medium",
            hoverClass: "hover:text-blue-500",
            iconClass: "text-blue-500",
            content: <CollegeInfo />,
          },
          {
            id: "university",
            title: "undergrad-life",
            label: "undergrad-life",
            icon: FaUserGraduate,
            activeClass: "text-purple-500 font-medium",
            hoverClass: "hover:text-purple-500",
            iconClass: "text-purple-500",
            content: <UniversityInfo />,
          },
          {
            id: "msc-ict",
            title: "postgrad-path",
            label: "postgrad-path",
            icon: FaUserGraduate,
            activeClass: "text-cyan-500 font-medium",
            hoverClass: "hover:text-cyan-500",
            iconClass: "text-cyan-500",
            content: <MScInfo />,
          },
          {
            id: "bachelor-thesis",
            title: "research-story",
            label: "research-story",
            icon: FaBookOpen,
            activeClass: "text-orange-500 font-medium",
            hoverClass: "hover:text-orange-500",
            iconClass: "text-orange-500",
            content: <BachelorThesisInfo />,
          },
        ],
      },
    ],
  },
  {
    id: "hobbies",
    label: "hobbies",
    icon: FaGamepad,
    iconClass: "text-amber-400",
    groups: [
      {
        id: "creative",
        label: "creative",
        arrowClass: "text-rose-500",
        folderClass: "text-rose-500",
        items: [
          // {
          //   id: "music",
          //   title: "Music",
          //   label: "music",
          //   icon: FaMusic,
          //   activeClass: "text-rose-500 font-medium",
          //   hoverClass: "hover:text-rose-500",
          //   iconClass: "text-rose-500",
          //   content: <MusicHobby />,
          // },
          {
            id: "books",
            title: "books",
            label: "books",
            icon: FaStar,
            activeClass: "text-indigo-500 font-medium",
            hoverClass: "hover:text-indigo-500",
            iconClass: "text-indigo-500",
            content: <BooksHobby />,
          },
        ],
      },
      {
        id: "outdoor",
        label: "outdoor",
        arrowClass: "text-lime-500",
        folderClass: "text-lime-500",
        items: [
          {
            id: "hiking",
            title: "hiking",
            label: "hiking",
            icon: FaPersonHiking,
            activeClass: "text-lime-500 font-medium",
            hoverClass: "hover:text-lime-500",
            iconClass: "text-lime-500",
            content: <HikingHobby />,
          },
          {
            id: "games",
            title: "games",
            label: "games",
            icon: FaGamepad,
            activeClass: "text-orange-500 font-medium",
            hoverClass: "hover:text-orange-500",
            iconClass: "text-orange-500",
            content: <GamesHobby />,
          },
        ],
      },
      {
        id: "wellness",
        label: "wellness",
        arrowClass: "text-emerald-500",
        folderClass: "text-emerald-500",
        items: [
          {
            id: "nature-walks",
            title: "nature-walks",
            label: "nature-walks",
            icon: FaLeaf,
            activeClass: "text-emerald-500 font-medium",
            hoverClass: "hover:text-emerald-500",
            iconClass: "text-emerald-500",
            content: <NatureWalksHobby />,
          },
        ],
      },
    ],
  },
];
