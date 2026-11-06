import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { projectHasSkill } from "@/shared/data/projectSkills";

export type Project = {
  id: number;
  name: string;
  liveLink: string;
  repoLink: string;
  image: string;
  description: string;
  skills: string[];
};

interface ProjectState {
  allProjects: Project[];
  filteredProjects: Project[];
  selectedSkills: string[];
}

const initialState: ProjectState = {
  allProjects: [],
  filteredProjects: [],
  selectedSkills: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    replaceProjects: (state, action: PayloadAction<Project[]>) => {
      state.allProjects = action.payload;
      state.filteredProjects = action.payload;
      state.selectedSkills = [];
    },
    setSelectedSkills: (state, action: PayloadAction<string[]>) => {
      state.selectedSkills = action.payload;

      // Filter projects based on selected skills
      if (action.payload.length === 0) {
        state.filteredProjects = state.allProjects;
      } else {
        state.filteredProjects = state.allProjects.filter((project) =>
          action.payload.every((skill) =>
            projectHasSkill(project.skills, skill),
          ),
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
          newSelectedSkills.every((skill) =>
            projectHasSkill(project.skills, skill),
          ),
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
          state.selectedSkills.every((skill) =>
            projectHasSkill(project.skills, skill),
          ),
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
  replaceProjects,
  setSelectedSkills,
  toggleSkill,
  resetFilters,
  uncheckedSkill,
} = projectsSlice.actions;
export default projectsSlice.reducer;
