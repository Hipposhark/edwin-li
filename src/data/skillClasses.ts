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
    class: "Hardware & Digital Design",
    skills: ["FPGA Development", "RTL Design", "Digital Logic", "Computer Architecture", "Embedded Systems"],
  },
  {
    class: "Lab & Bench Tools",
    skills: ["Oscilloscopes", "Logic Analyzers", "Signal Generators", "Digital Multimeters"],
  },
  {
    class: "EDA & CAD Tools",
    skills: ["Vivado", "Altium Designer", "KiCad", "SolidWorks", "Fusion 360"],
  },
  {
    class: "Web Development",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    class: "Developer Tools",
    skills: ["Linux", "Git", "LaTeX", "Confluence", "Jira"],
  },
] satisfies readonly SkillClass[];