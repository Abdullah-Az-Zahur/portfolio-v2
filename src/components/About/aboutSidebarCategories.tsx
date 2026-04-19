import { SidebarCategory } from "@/components/About/sidebarTypes";
import QwikItExperience from "@/components/About/ProfessionalInfo/Experience/QwikItExperience";
import EncoderITExperience from "@/components/About/ProfessionalInfo/Experience/EncoderITExperience";
import TechnicalSkills from "@/components/About/ProfessionalInfo/Skills/TechnicalSkills";
import Certifications from "@/components/About/ProfessionalInfo/Certificates/Certifications";
import BioInfo from "@/components/About/PersonalInfo/Bio/BioInfo";
import InterestsInfo from "@/components/About/PersonalInfo/Interests/InterestsInfo";
import HighSchoolInfo from "@/components/About/PersonalInfo/Education/HighSchoolInfo";
import CollegeInfo from "@/components/About/PersonalInfo/Education/CollegeInfo";
import UniversityInfo from "@/components/About/PersonalInfo/Education/UniversityInfo";
import MusicHobby from "@/components/About/Hobbies/Creative/MusicHobby";
import BooksHobby from "@/components/About/Hobbies/Creative/BooksHobby";
import HikingHobby from "@/components/About/Hobbies/Outdoor/HikingHobby";
import GamesHobby from "@/components/About/Hobbies/Outdoor/GamesHobby";
import NatureWalksHobby from "@/components/About/Hobbies/Wellness/NatureWalksHobby";
import {
  FaBriefcase,
  FaCertificate,
  FaGamepad,
  FaLaptopCode,
  FaLeaf,
  FaMusic,
  FaUserGraduate,
  FaUserTie,
  FaStar,
  FaUniversity,
  FaUser,
} from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { FaPersonHiking } from "react-icons/fa6";

export const aboutSidebarCategories: SidebarCategory[] = [
  {
    id: "professional-info",
    label: "Professional Info",
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
            id: "qwikit",
            title: "QwikIt",
            label: "QwikIt",
            icon: FaBriefcase,
            activeClass: "text-yellow-500 font-medium",
            hoverClass: "hover:text-yellow-500",
            iconClass: "text-yellow-500",
            content: <QwikItExperience />,
          },
          {
            id: "encoder-it",
            title: "Encoder IT",
            label: "Encoder IT",
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
            title: "Technical Skills",
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
            title: "Certifications",
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
    label: "Personal Info",
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
            title: "Bio",
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
            title: "Interest",
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
            title: "High School",
            label: "high-school",
            icon: GiSchoolBag,
            activeClass: "text-yellow-500 font-medium",
            hoverClass: "hover:text-yellow-500",
            iconClass: "text-yellow-500",
            content: <HighSchoolInfo />,
          },
          {
            id: "college",
            title: "College",
            label: "college",
            icon: FaUniversity,
            activeClass: "text-blue-500 font-medium",
            hoverClass: "hover:text-blue-500",
            iconClass: "text-blue-500",
            content: <CollegeInfo />,
          },
          {
            id: "university",
            title: "University",
            label: "university",
            icon: FaUserGraduate,
            activeClass: "text-purple-500 font-medium",
            hoverClass: "hover:text-purple-500",
            iconClass: "text-purple-500",
            content: <UniversityInfo />,
          },
        ],
      },
    ],
  },
  {
    id: "hobbies",
    label: "Hobbies",
    icon: FaGamepad,
    iconClass: "text-amber-400",
    groups: [
      {
        id: "creative",
        label: "creative",
        arrowClass: "text-rose-500",
        folderClass: "text-rose-500",
        items: [
          {
            id: "music",
            title: "Music",
            label: "music",
            icon: FaMusic,
            activeClass: "text-rose-500 font-medium",
            hoverClass: "hover:text-rose-500",
            iconClass: "text-rose-500",
            content: <MusicHobby />,
          },
          {
            id: "books",
            title: "Books",
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
            title: "Hiking",
            label: "hiking",
            icon: FaPersonHiking,
            activeClass: "text-lime-500 font-medium",
            hoverClass: "hover:text-lime-500",
            iconClass: "text-lime-500",
            content: <HikingHobby />,
          },
          {
            id: "games",
            title: "Games",
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
            title: "Nature Walks",
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
