export type ProjectLink = {
    label: string;
    href: string;
}

export type Project = {
    title: string;
    description: string;
    skills: readonly string[];
    image: string;

    slug: string;
    startDate: string;
    endDate?: string;
    longDescription?: string;
    details?: readonly string[];
    links?: readonly ProjectLink[];
    images?: readonly string[];
};

export const projects: readonly Project[]= [
    {
        title: "Homebrew Breadboard Computers",
        description: 
            "Custom CISC computer on breadboards built using only basic ICs and discrete components.",
        skills: [
            "Computer Architecture", "TTL/CMOS Logic", "HW Interrupts", "Assembler Design",
            "Low-Level Debugging", "Circuit Design", "Soldering"
        ],
        image: "/images/projects/breadboard-computer.jpg",

        slug: "breadboard-computers",
        startDate: "2020",
        details: [
            "Designed and built a Von-Neumann-style CISC 8-bit computer on breadboards with discrete components and logic ICs.",
            "Implemented core CPU components including registers, program counter, ALU, control logic, and RAM with a stack.",
            "Designed a custom CISC instruction set with arithmetic, branching, stack, subroutine, and interrupt-control instructions.",
            "Wrote microcode generation scripts in **C++** to program Control Logic EEPROMs with an Arduino Nano",
            "Wrote a custom assembler (labels; immediate, in/direct, base-offset addresing modes) in **Python** for machine code generation",
            "Iterating on a more advanced architecture to support external peripherals (e.g. PS/2 Keyboard, LCD Screen, SD Card) through device interrupts.",
        ],
        links: [
            { label: "YouTube", href: "https://www.youtube.com/watch?v=JsiIbrPEXpE" },
            { label: "GitHub", href: "https://github.com/Hipposhark/hippo8" },
        ],
        images: [
            "/images/projects/breadboard-computer.jpg",
            "/images/projects/memory-leds.jpg",
            "/images/projects/control-logic.jpg",
            "/images/projects/board-replacement.jpg",
            "/images/projects/alu-flag-lights.jpg",
        ],
    },
      {
        title: "Hardware Pong Implementation",
        description: 
            "A hardware implementation of the original Atari Pong game in \
             SystemVerilog synthesized onto a Spartan 7 Xilinx FPGA",
        skills: [
            "SystemVerilog", "Synopsys VCS", "Vivado", "Waveform Debugging", "AMD FPGAs", "VGA"
        ],
        image: "/images/projects/hardware-pong.jpg",

        slug: "hardware-pong",
        startDate: "Nov. 2025",
        endDate: "Nov. 2025",
        longDescription: 
            "Designed, tested, and implemented the Atari Pong game in\
             SystemVerilog and synthesized the design onto a Spartan 7 Xilinx FPGA \
             for the 18-240 class (Structure and Design of Digital Systems).",
        details: [
            "Implemented an Atari-style Pong game in **SystemVerilog** on an AMD Spartan™ 7 FPGA",
            "Designed hardware logic for game-state control, paddle/ball movement, collision detection, and score tracking.",
            "Verified core logic with simulation testbenches through **VCS** and waveform debugging before hardware bring-up.",
            "Synthesized \& deployed the design with **Vivado** to drive real-time gameplay output on a 800x600 VGA monitor @ 40 MHz.",
        ],

      },
      {
        title: "IncandeSynth",
        description: "A basic educational synthesizer with interactive sound matching.",
        skills: ["Python", "NumPy", "GUI", "Audio Envelopes"],
        image: "/images/projects/incandesynth.jpg",

        slug: "incandesynth",
        startDate: "Nov. 2024",
        endDate: "Dec. 2024",
        longDescription: 
            "Designed and developed a custom educational musical synthesizer from first principles using basic Python libraries.\
             This project was completed for the 15-112 class term project (Fundamentals of Computer Science & Programming)",
        links: [
            {label: "YouTube", href: "https://www.youtube.com/watch?v=5_ZZRTTHRQc"}
        ]
      },
      {
        title: "Homemade EMP",
        description: "Built an Electromagnetic Pulse generating device for my High School Physics class.",
        skills: ["High Voltage Devices"],
        image: "/images/projects/emp.jpg",

        slug: "homemade-emp",
        startDate: "April 2023",
        endDate: "May 2023",
        links: [
            {label: "YouTube", href: "https://youtu.be/hcadjQzZvV4"}
        ],
        images: [
            "/images/projects/emp-schematic.jpg"
        ]

        
      },
] as const;