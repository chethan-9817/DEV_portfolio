// All site content lives here — edit this file to update the portfolio.

export const PROFILE = {
  name: "CHETHAN K S",
  role: "2nd-year B.E. — Computer Science & Data Science",
  college: "St Joseph Engineering College (SJEC)",
  location: "Mangaluru, Karnataka, India",
  tagline:
    "Extremely moody, but I build things that might actually be useful to people.",
  bio: [
    "I'm a CS-DS student who loves exploring new ideas and turning them into working products. Outside class I build full-stack apps, and lately I've been deep into LLMs and RAG.",
    "Beyond code, I'm into aviation and RC planes as a member of the Aero Club. I'm not the class topper, but I'm consistent and I ship — competitions are where I'm at my best.",
  ],
};

export const CONTACT = {
  github: "https://github.com/chethan-9817",
  linkedin: "https://www.linkedin.com/in/chethan-ks-618515398/",
  // TODO: replace with your real email address
  email: "your.email@example.com",
};

// value = XP out of 100. Rank is derived from value (see rankFor in Skills.jsx).
export const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: [
      { name: "Python", value: 82 },
      { name: "JavaScript", value: 78 },
      { name: "Go", value: 72 },
      { name: "C", value: 70 },
      { name: "C++", value: 66 },
      { name: "Kotlin", value: 56 },
    ],
  },
  {
    title: "Web & Tools",
    skills: [
      { name: "React", value: 76 },
      { name: "Node.js", value: 72 },
      { name: "Git", value: 78 },
    ],
  },
  {
    title: "Currently Training",
    training: true,
    skills: [
      { name: "RAG Pipelines", value: 58 },
      { name: "DSA", value: 50 },
      { name: "Machine Learning", value: 40 },
    ],
  },
];

export const ALSO_WORKED_WITH = ["ESP32", "MQTT (IoT)", "UiPath (RPA)", "LLM APIs"];

export const PROJECTS = [
  {
    name: "Pineapple",
    summary:
      "A crash-safe, single-file key-value database written in Go — plus a torture tool that kill -9's it over and over to prove no data is ever lost.",
    tags: ["Go", "Databases", "Systems"],
    url: "https://github.com/chethan-9817/pineapple",
  },
  {
    name: "PharmaFlow",
    summary:
      "A React + Node platform for pharma reverse logistics: cheaper generic medicines, expiry recovery, medicine donation and safe disposal.",
    tags: ["React", "Node.js", "HealthTech"],
    url: "https://github.com/chethan-9817/pharma_flow-1-",
  },
  {
    name: "StudentSync",
    summary:
      "A campus app for SJEC — hostel leave slips, complaints, circulars, a digital student ID with QR passes, and an AI doubt-solving chatbot.",
    tags: ["Full-stack", "AI Chatbot"],
    url: "https://github.com/chethan-9817/STUDENTSYNC",
  },
  {
    name: "ArriveShare",
    alias: "Share-ur-ride",
    summary:
      "Ride pooling for people arriving at airports and railway stations — matches riders on similar routes and splits fares fairly.",
    tags: ["Full-stack", "Mobility"],
    url: "https://github.com/chethan-9817/Share-ur-ride",
  },
];

export const SIDE_QUESTS = [
  {
    name: "Travel Disruption Recovery Agent",
    summary: "An AI agent that helps travellers recover when plans fall apart.",
  },
  {
    name: "Resume-Screening Bot",
    summary: "UiPath RPA bot — PDF parsing and candidate scoring.",
  },
];

export const ACHIEVEMENTS = [
  {
    id: "vit",
    title: "Aerodominator",
    place: "2nd Place",
    org: "VIT Vellore",
    featured: true,
    note: "Took to the skies and came back with silver.",
  },
  {
    id: "srinathon",
    title: "Srinathon — National-level Hackathon",
    place: "2nd Place",
    org: "Srinivas College of Engineering, Mangaluru",
  },
  {
    id: "pbl1",
    title: "Course-level PBL Project",
    place: "2nd Prize",
    org: "Semester 1",
  },
  {
    id: "pbl2",
    title: "Course-level PBL Project",
    place: "3rd Prize",
    org: "Semester 2",
  },
];

export const CLUBS = [
  {
    name: "Aero Club, SJEC",
    rank: "Member",
    desc: "RC planes & aviation — building, tuning and flying.",
    icon: "plane",
  },
  {
    name: "Sceptix Club, SJEC",
    rank: "Member",
    desc: "Coding & open source — contributed to RainOfCode.",
    icon: "code",
  },
];

export const INTERESTS = [
  { label: "Anime — action & level-up stories", icon: "⚔" },
  { label: "RC planes & aviation", icon: "✈" },
  { label: "Exploring new ideas", icon: "✦" },
];
