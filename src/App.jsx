// Portfolio.jsx
// Modern React portfolio with profile image, single Resume button in navbar, and appealing design

import React from "react";
import { Award, Mail, FileText, User, FolderGit2, Home } from "lucide-react";

const RESUME_URL = "/Astitva.pdf";
const PROFILE_IMG = "/ASTITVA.jpeg"; // Ensure this path is correct

const social = {
  linkedin: "https://www.linkedin.com/in/astitva-sharma-012b4b252/",
  github: "https://github.com/Astitvazz",
  hackerrank: "https://www.hackerrank.com/profile/astitvasharma58",
  leetcode: "https://leetcode.com/u/Astitvazz/",
  email: "astitvasharma58@gmail.com",
  phone: "+91-8077842469",
};

const projects = [
  {
    title: "BubbleBlog",
    tech: "Node.js, React.js, MongoDB",
    date: "Jan 2025",
    desc: "Full-stack blogging platform with JWT auth, dynamic user profiles, multi-image blogs, nested comments with voting, and real-time search.",
    cta: "View on GitHub",
    link: "https://github.com/Astitvazz/BubbleBlog2",
  },
  {
    title: "LeetHint Chrome Extension",
    tech: "HTML, CSS, JavaScript, LLM's",
    date: "Jul 2024",
    desc: "Chrome extension that provides AI-generated step-by-step hints for LeetCode problems using open-source LLMs.",
    cta: "View on GitHub",
    link: "https://github.com/Astitvazz/LeetHint-AI",
  },
  {
    title: "URL Shortening Microservice",
    tech: "Node.js, Express.js",
    date: "Nov 2024",
    desc: "Lightweight microservice generating compact links with automatic redirection and basic analytics.",
    cta: "View on GitHub",
    link: "https://github.com/Astitvazz/2200970130031",
  },
];

const skills = [
  "C", "C++", "Python", "Java", "JavaScript", "TypeScript", "SQL", "NoSQL", "React.js", "Next.js",
  "Node.js", "Express.js", "Redux", "Zustand", "Tailwind CSS", "MongoDB", "MySQL",
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 font-[Inter]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={PROFILE_IMG} alt="Profile" className="w-12 h-12 object-cover rounded-full border shadow-md" />
            <div>
              <h1 className="text-lg font-bold tracking-tight">Astitva Sharma</h1>
              <p className="text-xs text-gray-500">Problem Solver</p>
            </div>
          </div>
          <a
            href={RESUME_URL}
            download="myresume.pdf"
            className="px-5 py-2 flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow hover:scale-105 transform transition"
          >
            <FileText size={18} /> Resume
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <h2 className="text-6xl font-extrabold leading-tight mb-4 tracking-tight">Hi, I'm <span className="text-indigo-600">Astitva</span></h2>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">I craft intelligent, scalable applications as a Full-Stack Developer. By combining a problem-solving approach with Generative AI, I turn complex challenges into seamless digital experiences.</p>
            <div className="flex flex-wrap gap-4">
              <a href={social.github} className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition shadow-lg">GitHub</a>
              <a href={social.linkedin} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition shadow-lg">LinkedIn</a>
              <a href={social.leetcode} className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition shadow-lg">LeetCode</a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={PROFILE_IMG} alt="Profile" className="w-60 h-60 object-cover rounded-full border-4 border-white shadow-2xl hover:scale-105 transform transition" />
          </div>
        </div>
      </section>

      {/* About */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <section id="about">
          <h3 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center gap-2"><User size={22}/> About</h3>
          <div className="bg-white p-8 rounded-2xl shadow-md leading-relaxed hover:shadow-xl transition">
            <p className="mb-4">Currently pursuing B.Tech in Information Technology at Galgotias College of Engineering and Technology (CGPA: 8.23). My focus is full-stack development, competitive programming, and building developer-centric tools.</p>
            <h4 className="text-xl font-semibold mb-2">Experience</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Fusion IT Department</strong> — Technical Team Member (Mar 2023 – Present). Organized workshops, hackathons, and mentored juniors, increasing participation by 40%.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h3 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center gap-2"><FolderGit2 size={22}/> Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <article key={p.title} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
                <h4 className="text-xl font-semibold mb-2">{p.title} <span className="text-sm text-gray-500">· {p.date}</span></h4>
                <p className="text-sm text-gray-600 mb-2">{p.tech}</p>
                <p className="text-gray-700 mb-4">{p.desc}</p>
                <a href={p.link} className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm hover:bg-indigo-100 transition">{p.cta}</a>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h3 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center gap-2"><Home size={22}/> Skills</h3>
          <div className="bg-white p-8 rounded-2xl shadow-md flex flex-wrap gap-3 hover:shadow-xl transition">
            {skills.map((s) => (
              <span key={s} className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm font-medium border border-indigo-200">{s}</span>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center gap-2"><Award size={22}/> Achievements</h3>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Solved 250+ problems on LeetCode with a contest rating of 1570 (Top ~28%).</li>
              <li>5-Star badge in Problem Solving on HackerRank.</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h3 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center gap-2"><Mail size={22}/> Contact</h3>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="mb-4">Want to collaborate or get project source code? Reach out:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`mailto:${social.email}`} className="px-5 py-2 bg-gray-900 text-white rounded-lg shadow hover:scale-105 transform transition">Email</a>
              <a href={social.linkedin} className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:scale-105 transform transition">LinkedIn</a>
              <a href={social.github} className="px-5 py-2 bg-gray-100 text-gray-900 border rounded-lg shadow hover:scale-105 transform transition">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">© {new Date().getFullYear()} Astitva Sharma — Crafted with elegance.</div>
      </footer>
    </div>
  );
}
