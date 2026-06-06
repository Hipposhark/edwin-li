export type Experience = {
  title: string;
  startDate: string;
  endDate: string;
  details: readonly string[];
  skills?: readonly string[];
};

export const experiences = [
  {
    title: "Undergrad Researcher - NEXUS @ CMU",
    startDate: "Dec. 2025",
    endDate: "April 2026",
    details: [
        "Worked with PhD students to develop one side of a bidirectional flow \
            that generates dataflow graphs and operator netlists for a hardware \
            accelerator,  given an AI application kernel (e.g. Transformer, CNN) \
            and hardware technology parameters.",
        "Repaired code that factored memory operations into the codesign's consideration.",
        "Wrote and debugged various Python scripts to parse VitisHLS report outputs \
            for dataflow graph and netlist generation.",
    ],
    skills: ["Python", "VitisHLS"]
  },
  {
    title: "Teaching Assistant for Intro to ECE Class",
    startDate: "Aug. 2025",
    endDate: "Dec. 2025",
    details: [
        "Led weekly recitation-style sessions for 20 students, reinforcing circuit \
            analysis, digital logic, and first-principles engineering.",
        "Guided students through circuit debugging and labs by helping them reason \
            from schematics and learned concepts.",
        "Held weekly office hours to aid with homework and labs, improving student \
            understanding by individualized explanations.",
    ],
    skills: ["Arduino"]
  },
  {
    title: "Data Acquisitions Subteam Member",
    startDate: "Sep. 2024",
    endDate: "May 2025",
    details: [
        "Data Acquisitions subteam Member for Carnegie Mellon Racing",
        "Developed Python firmware and testbenches for new I2C ride height (VL53L0X) \
            and tire temperature (MLX90640) sensors.",
        "Designed a PCB in Altium to interface sensors into the car's CAN-based data \
            network via Raspberry Pi Zeros.",
        "Upgraded outdated real-time data monitoring site with a modern stack (NextJS, \
            tRPC). Rewrote data widgets in React.",
    ],
    skills: ["Python", "Altium", "I2C", "CAN", "Raspberry Pi", "Confluence", "Jira"]
  },
] satisfies readonly Experience[];