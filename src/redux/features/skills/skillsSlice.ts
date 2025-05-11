import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SkillsState {
  selectedSkills: string[];
}

const initialState: SkillsState = {
  selectedSkills: [],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    setSelectedSkills: (state, action: PayloadAction<string[]>) => {
      state.selectedSkills = action.payload;
    },
    addSkill: (state, action: PayloadAction<string>) => {
      if (!state.selectedSkills.includes(action.payload)) {
        state.selectedSkills.push(action.payload);
      }
    },
    removeSkill: (state, action: PayloadAction<string>) => {
      state.selectedSkills = state.selectedSkills.filter(
        (skill) => skill !== action.payload
      );
    },
    clearSkills: (state) => {
      state.selectedSkills = [];
    },
  },
});

export const { setSelectedSkills, addSkill, removeSkill, clearSkills } =
  skillsSlice.actions;
export default skillsSlice.reducer;
