import { projects } from "@/utils/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  allProjects: typeof projects;
  filteredProjects: typeof projects;
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
    setSelectedSkills: (state, action: PayloadAction<string[]>) => {
      state.selectedSkills = action.payload;

      // Filter projects based on selected skills
      if (action.payload.length === 0) {
        state.filteredProjects = state.allProjects;
      } else {
        state.filteredProjects = state.allProjects.filter((project) =>
          action.payload.every((skill) => project.skills.includes(skill))
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
          (skill) => skill !== action.payload
        );
      }
      state.selectedSkills = newSelectedSkills;
      // Filter projects based on selected skills
      if (newSelectedSkills.length === 0) {
        state.filteredProjects = state.allProjects;
      } else {
        state.filteredProjects = state.allProjects.filter((project) =>
          newSelectedSkills.every((skill) => project.skills.includes(skill))
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
          state.selectedSkills.every((skill) => project.skills.includes(skill))
        );
      }
    },

    resetFilters: (state) => {
      state.selectedSkills = [];
      state.filteredProjects = state.allProjects;
    },
  },
});

export const { setSelectedSkills, toggleSkill, resetFilters, uncheckedSkill } =
  projectsSlice.actions;
export default projectsSlice.reducer;
