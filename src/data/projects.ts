export type Project = {
  title: string;
  description: string;
  skills: readonly string[];
  image: string;
};

export const projects = [
  {
    title: "Homebrew Breadboard Computers",
    description: "Custom CISC computer on breadboards built using only basic ICs and \
                  discrete components.",
    skills: ["Computer Architecture", "TTL/CMOS Logic", "HW Interrupts",  "Low-Level \
              Debugging", "Circuit Design", "Soldering"],
    image: "/images/projects/breadboard-computer.jpg",
  },
  {
    title: "Hardware Pong Implementation",
    description: "A hardware implementation of the original Atari Pong game in \
                  SystemVerilog synthesized onto a Spartan 7 Xilinx FPGA",
    skills: ["SystemVerilog", "VCS", "Vivado", "VGA", "FPGAs"],
    image: "/images/projects/hardware-pong.jpg",
  },
  {
    title: "IncandeSynth",
    description: "A basic educational synthesizer with interactive sound matching.",
    skills: ["Python", "NumPy", "GUI", "Audio Envelopes"],
    image: "/images/projects/incandesynth.jpg",
  },
  {
    title: "Homemade EMP",
    description: "Built an Electromagnetic Pulse generating device.",
    skills: ["High Voltage Devices"],
    image: "/images/projects/emp.jpg",
  },
] satisfies readonly Project[];