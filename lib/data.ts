export const portfolioData = {
  personal: {
    name: "Tanishka Trivedi",
    title: "Electrical Engineering Student",
    subtitle: "Embedded Systems · DSA · Machine Learning",
    email: "tanishkatrivedi.20@gmail.com",
    phone: "+91-9322667507",
    linkedin: "https://linkedin.com/in/tanishka-trivedi",
    github: "https://github.com/tanishkatrivedi",
    summary:
      "B.Tech Electrical Engineering student at IIT Jodhpur with a strong foundation in embedded systems and software development. I build things that work at the hardware-software boundary — from sensor-interfacing gloves to version-control systems. Currently diving deep into Machine Learning.",
  },

  education: [
    {
      institution: "Indian Institute of Technology, Jodhpur",
      degree: "B.Tech in Electrical Engineering",
      period: "2024 – Expected May 2028",
      location: "Jodhpur, India",
      grade: "CGPA: 7.435 / 10.0",
      type: "current",
      icon: "🎓",
    },
    {
      institution: "Shri Sushil Kumar Thirani Junior College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2022 – 2024",
      location: "Thane, India",
      grade: "91.33%",
      type: "hsc",
      icon: "📚",
    },
    {
      institution: "Universal High School (ICSE)",
      degree: "Secondary School Certificate",
      period: "Until 2022",
      location: "Thane, India",
      grade: "97.3%",
      type: "icse",
      icon: "🏫",
    },
  ],

  projects: [
    {
      title: "Smart Glove with Gesture & Orientation Detection",
      period: "Dec 2024 – Jan 2025",
      description:
        "A hand glove modified with sensors to interpret Indian Sign Language (ISL) gestures — bridging communication for specially-abled individuals in real time.",
      longDescription:
        "Implemented real-time data collection and analysis routines using the I2C Communication Protocol to interface with orientation and flex sensors. Designed and programmed the embedded system in C/C++ to process sensor inputs, ensuring accurate and low-latency gesture detection.",
      tech: ["Embedded C/C++", "I2C Protocol", "Microcontrollers", "Arduino", "Sensor Interfacing", "Hardware Design"],
      highlights: [
        "Real-time ISL gesture recognition",
        "I2C sensor interfacing",
        "Low-latency embedded processing",
        "Custom circuit design",
      ],
      github: "https://github.com/tanishkatrivedi",
      color: "green",
      icon: "🖐️",
    },
    {
      title: "Versioned Notepad",
      period: "Oct 2025 – Nov 2025",
      description:
        "A lightweight version-control system for text files — think Git for notepad files. Focuses on efficient diff-based storage and full rollback capability.",
      longDescription:
        "Utilized diff-based storage techniques to minimize disk space consumption and optimized the core mechanism using DSA principles. Developed a command-line interface (CLI) and an interactive Windows menu for easy version tracking, rollback, and management.",
      tech: ["C++", "Data Structures", "Algorithms", "CLI", "Windows Menu", "Software Design"],
      highlights: [
        "Diff-based storage for space efficiency",
        "DSA-optimized core engine",
        "Full CLI interface",
        "Version rollback & management",
      ],
      github: "https://github.com/tanishkatrivedi",
      color: "teal",
      icon: "📝",
    },
  ],

  skills: {
    "Programming Languages": {
      items: ["Java", "C++", "C", "Embedded C/C++"],
      color: "green",
    },
    "Hardware & Embedded": {
      items: ["Arduino", "Microcontrollers", "Sensor Interfacing", "I2C Communication", "Circuit Design"],
      color: "teal",
    },
    "Core CS Concepts": {
      items: ["Data Structures & Algorithms", "Pattern Recognition", "Version Control", "CLI Development"],
      color: "purple",
    },
    "Tools & Others": {
      items: ["MS Office", "Windows Menu Dev", "Git", "CLI Tools"],
      color: "amber",
    },
  },

  achievements: [
    {
      title: "Wire Wizard — 1st Place",
      subtitle: "Prometeo, IIT Jodhpur Annual Tech Fest",
      description: "Secured 1st position in the Arduino hardware event at IIT Jodhpur's annual technical festival.",
      icon: "🏆",
      color: "amber",
      type: "competition",
    },
    {
      title: "JEE Mains: 99.038 Percentile",
      subtitle: "Joint Entrance Examination — Mains",
      description: "Ranked in the top 1% of ~1.2 million candidates appearing for JEE Mains.",
      icon: "⚡",
      color: "green",
      type: "exam",
    },
    {
      title: "JEE Advanced Rank: 11925",
      subtitle: "Joint Entrance Examination — Advanced",
      description: "Qualified JEE Advanced — the gateway to IITs — one of India's most competitive exams.",
      icon: "🎯",
      color: "teal",
      type: "exam",
    },
    {
      title: "2nd in HSC Board — College",
      subtitle: "SSKT Junior College, Thane",
      description: "Secured 2nd position in HSC Board Examination across the college with 91.33%.",
      icon: "🥈",
      color: "purple",
      type: "academic",
    },
    {
      title: "Perfect Score in Chemistry & Biology",
      subtitle: "ICSE Board Examination — Class X",
      description: "Achieved 100/100 marks in both Chemistry and Biology in the ICSE Board Exam (97.3% overall).",
      icon: "💯",
      color: "amber",
      type: "academic",
    },
  ],

  coursework: {
    completed: [
      "Data Structures and Algorithms",
      "Pattern Recognition and Machine Learning",
      "Hardware Circuit Design",
      "Embedded Systems Programming",
      "I2C & Sensor Protocols",
    ],
    learning: [
      "Machine Learning (in progress)",
      "Deep Learning Fundamentals",
      "Signal Processing",
      "VLSI Design",
    ],
  },
};
