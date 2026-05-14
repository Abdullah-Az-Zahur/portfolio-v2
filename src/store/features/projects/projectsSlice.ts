import { projects } from "@/shared/data/projects";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProjectItem = {
  _id?: string;
  id?: number;
  name: string;
  liveLink: string;
  repoLink: string;
  image: string;
  description: string;
  skills: string[];
  order?: number;
};

interface ProjectState {
  allProjects: ProjectItem[];
  filteredProjects: ProjectItem[];
  selectedSkills: string[];
}

const initialState: ProjectState = {
  allProjects: projects,
  filteredProjects: projects,
  selectedSkills: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<ProjectItem[]>) => {
      state.allProjects = action.payload;
      if (state.selectedSkills.length === 0) {
        state.filteredProjects = action.payload;
      } else {
        state.filteredProjects = action.payload.filter((project) =>
          state.selectedSkills.every((skill) => project.skills.includes(skill)),
        );
      }
    },
    setSelectedSkills: (state, action: PayloadAction<string[]>) => {
      state.selectedSkills = action.payload;

      // Filter projects based on selected skills
      if (action.payload.length === 0) {
        state.filteredProjects = state.allProjects;
      } else {
        state.filteredProjects = state.allProjects.filter((project) =>
          action.payload.every((skill) => project.skills.includes(skill)),
        );
      }
    },

    toggleSkill: (state, action: PayloadAction<string>) => {
      const index = state.selectedSkills.indexOf(action.payload);

      let newSelectedSkills;
      if (index === -1) {
        newSelectedSkills = [...state.selectedSkills, action.payload];
      } else {
        newSelectedSkills = state.selectedSkills.filter(
          (skill) => skill !== action.payload,
        );
      }
      state.selectedSkills = newSelectedSkills;
      // Filter projects based on selected skills
      if (newSelectedSkills.length === 0) {
        state.filteredProjects = state.allProjects;
      } else {
        state.filteredProjects = state.allProjects.filter((project) =>
          newSelectedSkills.every((skill) => project.skills.includes(skill)),
        );
      }
    },

    uncheckedSkill: (state, action: PayloadAction<string>) => {
      const skill = action.payload;
      state.selectedSkills = state.selectedSkills.filter((s) => s !== skill);

      if (state.selectedSkills.length === 0) {
        state.filteredProjects = state.allProjects;
      } else {
        state.filteredProjects = state.allProjects.filter((project) =>
          state.selectedSkills.every((skill) => project.skills.includes(skill)),
        );
      }
    },

    resetFilters: (state) => {
      state.selectedSkills = [];
      state.filteredProjects = state.allProjects;
    },
  },
});

export const {
  setProjects,
  setSelectedSkills,
  toggleSkill,
  resetFilters,
  uncheckedSkill,
} = projectsSlice.actions;
export default projectsSlice.reducer;
