import React from "react";

interface SkillCheckboxProps {
  id: string;
  skillName: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: () => void;
  iconColor: string;
  hoverColor: string;
}

const SkillCheckbox: React.FC<SkillCheckboxProps> = ({
  id,
  skillName,
  icon,
  checked,
  onChange,
  iconColor,
  hoverColor,
}) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 cursor-pointer text-gray-500 ${hoverColor}`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      <span className={`${iconColor}`}>{icon}</span>
      <span>{skillName}</span>
    </label>
  );
};

export default SkillCheckbox;
