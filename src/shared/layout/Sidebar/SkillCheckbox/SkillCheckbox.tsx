import React from "react";

interface SkillCheckboxProps {
  id: string;
  skillName: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: () => void;
  iconColor: string;
  hoverColor?: string;
}

const SkillCheckbox: React.FC<SkillCheckboxProps> = ({
  id,
  skillName,
  icon,
  checked,
  onChange,
  iconColor,
  hoverColor = "hover:text-[#3b82f6] [html[data-theme=light]_&]:hover:text-[#2563a8]",
}) => {
  return (
    <label
      htmlFor={id}
      className={`group flex cursor-pointer items-center gap-2 py-1 px-1.5 rounded transition-colors duration-150 text-[#94a3b8] [html[data-theme=light]_&]:text-[#52657d] ${hoverColor} ${
        checked
          ? "font-medium text-white [html[data-theme=light]_&]:text-[#0f172a]"
          : ""
      }`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-(--app-border-color,#4a627a) bg-[#011627] text-cyan-500 accent-cyan-500 focus:ring-0 focus:ring-offset-0 [html[data-theme=light]_&]:border-[#7a8fa5] [html[data-theme=light]_&]:bg-white cursor-pointer"
      />
      <span className={`text-base shrink-0 ${iconColor}`}>{icon}</span>
      <span className="text-sm select-none">{skillName}</span>
    </label>
  );
};

export default SkillCheckbox;
