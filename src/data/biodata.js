// src/data/portfolioData.js
// ============================================================
//  Edit semua data portofolio kamu di sini.
//  Dashboard.jsx akan otomatis menggunakan file ini.
// ============================================================

// Preview screenshots dipakai di section Projects (panel "UI Web" / "UI Android").
// Taruh file barumu di folder yang sama lalu import di sini, contoh:
//   import previewWebFoodlink from "../assets/preview/web/foodlink.jpg";
import previewWebSpbeFe from "../assets/preview/web/spbe-malang-fe.jpg";
import previewWebSpbeBe from "../assets/preview/web/spbe-malang-be.jpg";
import previewAndroidSpbeFe from "../assets/preview/android/spbe-malang-fe.jpg";
import previewAndroidSpbeBe from "../assets/preview/android/spbe-malang-be.jpg";
import previewWebFoodlinkFe from "../assets/preview/web/foodlink-fe.jpg";
import previewWebFoodlinkBe from "../assets/preview/web/foodlink-be.jpg";
import previewAndroidFoodlinkFe from "../assets/preview/android/foodlink-fe.jpg";
import previewAndroidFoodlinkBe from "../assets/preview/android/foodlink-be.jpg";
import previewWebJarangFe from "../assets/preview/web/jarang-fe.jpg";
import previewWebJarangBe from "../assets/preview/web/jarang-be.jpg";
import previewAndroidJarangFe from "../assets/preview/android/jarang-fe.jpg";
import previewAndroidJarangBe from "../assets/preview/android/jarang-be.jpg";
import previewWebSiskamlingFe from "../assets/preview/web/siskamling-fe.jpg";
import previewWebSiskamlingBe from "../assets/preview/web/siskamling-be.jpg";
import previewAndroidSiskamlingFe from "../assets/preview/android/siskamling-fe.jpg";
import previewAndroidSiskamlingBe from "../assets/preview/android/siskamling-be.jpg";

const data = {
  name: "Muhammad Hafiz Habani Nelwan",
  role: "IT Engineer",
  tagline: "Code. Configure. Connect. Create.",
  bio: "I am an IT Engineer passionate about building reliable technology solutions. With experience in IT Support, Help Desk, CCTV installation, IP network configuration, and hardware maintenance, I ensure systems run efficiently. Beyond infrastructure, I also develop modern, responsive web applications using React, React Router, Tailwind CSS, and Vite. I enjoy learning new technologies and turning complex technical challenges into practical, user-friendly solutions.",
  kanji: "羽飛寿",

  stats: [
    { label: "Years Exp", value: "1+" },
    { label: "Projects", value: "10+" },
    { label: "Tickets Resolved", value: "600+" },
    { label: "Devices Maintained", value: "200+" },
    { label: "Networks Configured", value: "90+" },
    { label: "CCTV Installed", value: "300+" },
  ],
  skills: [
  {
    cat: "Languages",
    items: [
      "Dart",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "SQL"
    ]
  },
  {
    cat: "Frameworks",
    items: [
      "React.js",
      "React Native",
      "Flutter",
      "Node.js",
      "Express",
      "Laravel",
      "Tailwind CSS"
    ]
  },
  {
    cat: "Cloud & Data",
    items: [
      "Firebase",
      "MongoDB",
      "SQLite",
      "REST API",
      "Google Cloud"
    ]
  },
  {
    cat: "AI & Automation",
    items: [
      "Gemini API",
      "OpenAI API",
      "Prompt Engineering",
      "LLM Integration",
      "ComfyUI",
      "GitHub Actions",
      "CI/CD"
    ]
  }
],  

  projects: [
  {
    id: "01",
    name: "SPBE Kabupaten Malang (Frontend)",
    desc: "Government digital services platform built with React.js, featuring responsive UI and Laravel API integration.",
    tags: ["React.js", "Tailwind CSS", "Vite"],
    year: "2024",
    link: "https://github.com/HafizHabani/Intern_Project_SPBE-Kab.malang.git",
    previewWeb: previewWebSpbeFe,
    previewAndroid: previewAndroidSpbeFe
  },
  {
    id: "02",
    name: "SPBE Kabupaten Malang (Backend)",
    desc: "RESTful backend for an e-Government platform with Laravel, authentication, and database management.",
    tags: ["Laravel", "REST API", "MySQL"],
    year: "2024",
    link: "https://github.com/HafizHabani/Intern_Project_SPBE-Kab.Malang-Be.git",
    previewWeb: previewWebSpbeBe,
    previewAndroid: previewAndroidSpbeBe,
  },
  {
    id: "03",
    name: "Foodlink (Frontend)",
    desc: "Canteen management platform with food ordering, dashboard, and responsive React interface.",
    tags: ["React.js", "JavaScript", "Tailwind CSS"],
    year: "2024",
    link: "https://github.com/HafizHabani/Massive_Project_Foodlink-Fe.git",
    previewWeb: previewWebFoodlinkFe,
    previewAndroid: previewAndroidFoodlinkFe
  },
  {
    id: "04",
    name: "Foodlink (Backend)",
    desc: "Express + Sequelize backend powering ordering, authentication, payments, and admin panel through REST APIs.",
    tags: ["Node.js", "Express", "MySQL"],
    year: "2023",
    link: "https://github.com/HafizHabani/Massive_Project_Foodlink-Be.git",
    previewWeb: previewWebFoodlinkBe,
    previewAndroid: previewAndroidFoodlinkBe
  },
  {
    id: "05",
    name: "JaRang (Frontend)",
    desc: "Shipping service landing page with pick-up location, shipment tracking, pricing plans, and responsive contact form.",
    tags: ["PHP", "Bootstrap", "JavaScript"],
    year: "2024",
    link: "https://github.com/HafizHabani/Raw_Project_JaRang.git",
    previewWeb: previewWebJarangFe,
    previewAndroid: previewAndroidJarangFe
  },
  {
    id: "06",
    name: "JaRang (Backend)",
    desc: "Admin dashboard with CRUD tables for shipments, senders, receivers, packaging, payments, and delivery tracking.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    year: "2024",
    link: "https://github.com/HafizHabani/Raw_Project_JaRang.git",
    previewWeb: previewWebJarangBe,
    previewAndroid: previewAndroidJarangBe
  },
  {
    id: "07",
    name: "SISKAMLING (Frontend)",
    desc: "Neighborhood security management system with patrol scheduling, crime reporting, and attendance tracking for officers and residents.",
    tags: ["HTML5", "Bootstrap", "JavaScript"],
    year: "2023",
    link: "https://github.com/HafizHabani/Raw_Project_SISKAMLING.git",
    previewWeb: previewWebSiskamlingFe,
    previewAndroid: previewAndroidSiskamlingFe
  },
  {
    id: "08",
    name: "SISKAMLING (Backend)",
    desc: "Admin dashboard with data tables for officer management, attendance records, patrol schedules, and resident crime reports.",
    tags: ["HTML5", "Bootstrap", "JavaScript"],
    year: "2023",
    link: "https://github.com/HafizHabani/Raw_Project_SISKAMLING.git",
    previewWeb: previewWebSiskamlingBe,
    previewAndroid: previewAndroidSiskamlingBe
  }
],

  // ============================================================
  //  Experience — diambil dari CV kamu (CV_Indonesia.pdf)
  // ============================================================
  experience: [
    {
      year: "Agu 2025 — Sekarang",
      role: "IT Staff",
      company: "Tata Optima Property Palangkaraya",
      desc: "Mengelola dan memelihara 100+ perangkat TI (komputer, laptop, printer, CCTV, NVR, NAS, Access Point). Instalasi, konfigurasi, dan troubleshooting jaringan LAN, Fiber Optic, MikroTik, IP Phone, serta CCTV. Berpartisipasi dalam 20+ proyek instalasi/migrasi infrastruktur TI dan memasang 300+ titik CCTV.",
    },
    {
      year: "Feb 2024 — Apr 2024",
      role: "Frontend Developer / Programmer",
      company: "Dinas Komunikasi dan Informatika Kabupaten Malang",
      desc: "Front-end Developer untuk aplikasi web pemerintahan menggunakan React.js, membangun 10+ halaman yang responsif dan interaktif, serta melakukan pengujian UI dan fungsionalitas aplikasi.",
    },
    {
      year: "Agu 2023 — Des 2023",
      role: "Web Development Mentee & Tester",
      company: "Infinite Learning Indonesia",
      desc: "Berkontribusi dalam 3+ proyek pengembangan aplikasi (riset, perancangan UI/UX, implementasi UI web) dan menguji 20+ halaman/komponen untuk memastikan responsivitas dan fungsionalitas.",
    },
    {
      year: "Sep 2023 — Mei 2024",
      role: "Frontend Developer / Programmer",
      company: "Project Website Development",
      desc: "Mengembangkan 5+ aplikasi web dengan React.js, JavaScript, HTML, CSS, dan Tailwind CSS. Mengintegrasikan 20+ endpoint REST API dengan backend Laravel serta mengelola source code dengan Git.",
    },
    {
      year: "Agu 2021 — Okt 2023",
      role: "Frontend Developer / Programmer",
      company: "Project Mobile Application Development",
      desc: "Mengembangkan 3+ aplikasi Android menggunakan Flutter, Dart, Java, dan Kotlin. Mengintegrasikan Firebase Authentication dan Cloud Firestore untuk autentikasi dan sinkronisasi data real-time.",
    },
    {
      year: "2018 — Sekarang",
      role: "Teknisi Perangkat Keras/Lunak Komputer",
      company: "Self-employed",
      desc: "Teknisi komputer independen dengan pengalaman 8+ tahun menangani 400+ perangkat komputer dan laptop: diagnosis, perbaikan, instalasi OS, upgrade hardware, optimasi performa, pemulihan data, serta konfigurasi jaringan dasar.",
    },
  ],

  contact: {
    email: "hafizhbniwork@gmail.com",
    github: "github.com/HafizHabani",
    linkedin: "linkedin.com/in/hafiz-habani",
    location: "Palangkaraya, Kalimantan Tengah",
  },
};

export default data;