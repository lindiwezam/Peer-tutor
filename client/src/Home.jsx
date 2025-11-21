import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* NAVBAR */}
      <nav className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">PeerTutor Connect App</h1>

        <div className="flex gap-6 text-gray-700 font-medium">
          <a href="/tutor-login" className="text-gray-600 hover:text-blue-600 transition">Tutor Login</a>
          <a href="/tutor-signup" className="text-gray-600 hover:text-blue-600 transition">Tutor Sign Up</a>
          <a href="/student-login" className="text-gray-600 hover:text-blue-600 transition">Student Login</a>
          <a href="/student-signup" className="text-gray-600 hover:text-blue-600 transition">Student Sign Up</a>
        </div>
      </nav>

{/* HERO SECTION */}
<section className="px-6 lg:px-20 py-20 flex flex-col md:flex-row items-center gap-12">

     {/* Left Section */}
        <div className="maax-w-xl animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Connect with the best Tutors,who will help you Succeed,<br />
          </h2>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            PeerTutor Connect helps you to connect with tutors, send instant messages for urgent questions and access academic information tailored for you.
          </p>

        {/* SEARCH BAR */}
          <div className="mt-8 bg-white shadow-md rounded-xl flex items-center gap-4 animate-slideUp">
            <input
            type="text"
            placeholder="Search for tutors e.g. Math, Accounting, Life Science..."
            className="flex-1 outline-none px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Search
            </button>
          </div>

          {/* BUTTONS */}
          <div className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            <a
            href="/tutors"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
            >
              Browser Tutors
            </a>

            <a
            href="/student-dashboard"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-900 transition"
            >
              Student Dashboard
            </a>
          </div>
        </div>

        <div className="flex justify-center animate-scaleIn">
          <img 
            src="https://cdn3d.iconscout.com/3d/premium/thumb/online-education-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--school-teacher-student-learning-pack-illustration-6574879.png?f=webp"
            alt="Learning Illustration"
            className="w-full h-64 md:h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-inner"
            />
        </div>
      </section>

      <section className="px-6 lg:px-20 py-12 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Message Tutors in real-time for urgent academic questions.
        </h3>

      </section>
             <footer className="mt-10 text-gray-500 text-sm">
            © {new Date().getFullYear()} PeerTutor Connect. All rights reserved.
      </footer>
    </div>
    );
}
