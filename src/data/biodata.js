// src/data/portfolioData.js
// ============================================================
//  Edit semua data portofolio kamu di sini.
//  Dashboard.jsx akan otomatis menggunakan file ini.
// ============================================================

const data = {
  name: "Muhammad Hafiz Habani Nelwan",
  role: "IT Engineer",
  tagline: "Code. Configure. Connect. Create.",
  bio: "I am an IT Engineer passionate about building reliable technology solutions. With experience in IT Support, Help Desk, CCTV installation, IP network configuration, and hardware maintenance, I ensure systems run efficiently. Beyond infrastructure, I also develop modern, responsive web applications using React, React Router, Tailwind CSS, and Vite. I enjoy learning new technologies and turning complex technical challenges into practical, user-friendly solutions.",
  kanji: "羽飛寿",

  stats: [
    { label: "Years Exp", value: "1+" },
    { label: "Projects",  value: "10+"  },
    { label: "Tickets Resolved",   value: "600+"  },
    { label: "Devices Maintained",   value: "200+"},
    { label: "Networks Configured",   value: "90+"},
    { label: "CCTV Installed",   value: "300+"},
  ],

  skills: [
    { cat: "Frontend", items: ["React Native", "React.js", "HTML5", "Tailwind CSS", ], level: 80 },
    { cat: "Backend",  items: ["Node.js", "Express", "Laravel", "REST API"],       level: 70 },
    { cat: "Mobile",   items: ["Flutter", "Dart", "JavaScript", "Android SDK"],              level: 80 },
    { cat: "Database", items: ["SQL", "MongoDB", "SQLite", "Firebase"],       level: 70 },
    { cat: "Compiler", items: ["Vscode", "Android Studio", "Vite", "NPM"],             level: 90 },
    { cat: "Tools",    items: ["Git", "Github", "Figma", "Postman"],              level: 75 },
  ],

  projects: [
        {
      id:   "01",
      name: "Project SPBE Kabupaten Malang FE",
      desc: "An internship project commissioned by the Department of Communication and Informatics (Diskominfo) of Malang Regency to develop an Electronic-Based Government System (SPBE). Contributed to frontend development by building responsive and interactive user interfaces with React.js, collaborating closely with the backend team using Laravel to deliver a seamless user experience.",
      tags: ["React.js", "Vite", "HTML", "Tailwind CSS"],
      year: "2024",
      link: "https://github.com/HafizHabani/Intern_Project_SPBE-Kab.malang.git"
    },
    {
      id:   "02",
      name: "Project SPBE Kabupaten Malang BE",
      desc: "An internship project commissioned by the Department of Communication and Informatics (Diskominfo) of Malang Regency to develop an Electronic-Based Government System (SPBE). Contributed to backend development by building RESTful APIs, implementing business logic, managing database operations with Laravel, and ensuring secure, reliable communication between the frontend and backend services.",
      tags: [ "Laravel", "REST API", "PHP", "MySQL",],
      year: "2024",
      link: "https://github.com/HafizHabani/Intern_Project_SPBE-Kab.Malang-Be.git"
    },
    {
      id:   "03",
      name: "Project Foodlink FE",
      desc: "A canteen management platform designed to streamline food ordering and administrative operations. The system includes online ordering, inventory management, promotional campaigns, sales reporting, and digital payment management to improve operational efficiency and reduce customer waiting times.",
      tags: ["JavaScript", "React.js", "HTML", "Tailwind CSS"],
      year: "2024",
      link: "https://github.com/HafizHabani/Massive_Project_Foodlink-Fe.git"
    },
    {
      id:   "04",
      name: "Project Foodlink BE",
      desc: "Developed the backend of a canteen management platform, building RESTful APIs, business logic, and database architecture to support online ordering, inventory management, promotional campaigns, sales reporting, and digital payment processing. Worked with the frontend team to integrate APIs and support application features.",
      tags: ["Laravel", "REST API", "MySQL", "Role Management"],
      year: "2023",
      link: "https://github.com/HafizHabani/Massive_Project_Foodlink-Be.git"
    },
    {
      id:   "05",
      name: "JaRang",
      desc: "A web-based logistics administration system designed to streamline shipment management through comprehensive CRUD operations, package tracking, shipping cost management, and customer data administration. Built with a focus on efficiency, accuracy, and a user-friendly administrative workflow.",
      tags: ["PHP", "JavaScript", "CSS", "MySQL"],
      year: "2024",
      link: "https://github.com/HafizHabani/Raw_Project_JaRang.git"
    },
    {
      id: "06",
      name: "SISKAMLING",
      desc: "A web-based neighborhood security management system designed to improve coordination between administrators, security officers, and residents. The platform provides patrol scheduling, incident reporting, attendance tracking, and administrative tools to streamline community security operations.",
      tags: ["PHP", "HTML", "CSS", "Javascript"],
      year: "2023",
      link: "https://github.com/HafizHabani/Raw_Project_SISKAMLING.git"
    }
  ],

  // ============================================================
  //  Experience — diambil dari CV kamu (CV_Indonesia.pdf)
  // ============================================================
  experience: [
    {
      year:    "Agu 2025 — Sekarang",
      role:    "IT Staff",
      company: "Tata Optima Property Palangkaraya",
      desc:    "Mengelola dan memelihara 100+ perangkat TI (komputer, laptop, printer, CCTV, NVR, NAS, Access Point). Instalasi, konfigurasi, dan troubleshooting jaringan LAN, Fiber Optic, MikroTik, IP Phone, serta CCTV. Berpartisipasi dalam 20+ proyek instalasi/migrasi infrastruktur TI dan memasang 300+ titik CCTV.",
    },
    {
      year:    "Feb 2024 — Apr 2024",
      role:    "Frontend Developer / Programmer",
      company: "Dinas Komunikasi dan Informatika Kabupaten Malang",
      desc:    "Front-end Developer untuk aplikasi web pemerintahan menggunakan React.js, membangun 10+ halaman yang responsif dan interaktif, serta melakukan pengujian UI dan fungsionalitas aplikasi.",
    },
    {
      year:    "Agu 2023 — Des 2023",
      role:    "Web Development Mentee & Tester",
      company: "Infinite Learning Indonesia",
      desc:    "Berkontribusi dalam 3+ proyek pengembangan aplikasi (riset, perancangan UI/UX, implementasi UI web) dan menguji 20+ halaman/komponen untuk memastikan responsivitas dan fungsionalitas.",
    },
    {
      year:    "Sep 2023 — Mei 2024",
      role:    "Frontend Developer / Programmer",
      company: "Project Website Development",
      desc:    "Mengembangkan 5+ aplikasi web dengan React.js, JavaScript, HTML, CSS, dan Tailwind CSS. Mengintegrasikan 20+ endpoint REST API dengan backend Laravel serta mengelola source code dengan Git.",
    },
    {
      year:    "Agu 2021 — Okt 2023",
      role:    "Frontend Developer / Programmer",
      company: "Project Mobile Application Development",
      desc:    "Mengembangkan 3+ aplikasi Android menggunakan Flutter, Dart, Java, dan Kotlin. Mengintegrasikan Firebase Authentication dan Cloud Firestore untuk autentikasi dan sinkronisasi data real-time.",
    },
    {
      year:    "2018 — Sekarang",
      role:    "Teknisi Perangkat Keras/Lunak Komputer",
      company: "Self-employed",
      desc:    "Teknisi komputer independen dengan pengalaman 8+ tahun menangani 400+ perangkat komputer dan laptop: diagnosis, perbaikan, instalasi OS, upgrade hardware, optimasi performa, pemulihan data, serta konfigurasi jaringan dasar.",
    },
  ],

  contact: {
    email:    "hafizhbniwork@gmail.com",
    github:   "github.com/HafizHabani",
    linkedin: "linkedin.com/in/hafiz-habani",
    location: "Palangkaraya, Kalimantan Tengah",
  },
};

export default data;