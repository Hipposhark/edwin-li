export type SkillClass = {
  class: string;
  skills: readonly string[];
};

export const skillClasses = [
  {
    class: "Languages",
    skills: ["Python", "C/C++", "SystemVerilog", "TypeScript", "Assembly"],
  },
  {
    class: "Bench Tools",
    skills: ["Oscilloscopes", "Logic Analyzer", "Signal Generator", "DMMs"],
  },
  {
    class: "EDA/CAD Tools",
    skills: ["Altium", "KiCad", "SolidWorks", "Fusion360"],
  },
  {
    class: "Frontend Development",
    skills: ["ReactJS", "Tailwind"],
  },
  {
    class: "Other Technologies",
    skills: ["Linux", "Git", "Confluence", "Jira", "LATEX"],
  },
] satisfies readonly SkillClass[];