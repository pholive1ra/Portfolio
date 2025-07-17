import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMysql } from "react-icons/si";

function Skills() {
  return (
    <section className="py-10 px-4 sm:px-6">
      <h2 className="text-4xl font-bold mb-8 flex justify-center">
        <span className="bg-gradient-to-r from-30% from-indigo-700 to-white bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-5 sm:gap-6 text-white">
        {/* React */}
        <div className="bg-gray-800 cursor-pointer p-6 rounded-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col items-center mx-auto w-full max-w-[180px]">
          <FaReact className="text-5xl text-cyan-400 mb-3" />
          <p className="font-semibold text-lg">React</p>
        </div>

        {/* HTML */}
        <div className="bg-gray-800 cursor-pointer p-6 rounded-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col items-center mx-auto w-full max-w-[180px]">
          <FaHtml5 className="text-5xl text-amber-600 mb-3" />
          <p className="font-semibold text-lg">HTML</p>
        </div>

        {/* CSS */}
        <div className="bg-gray-800 cursor-pointer p-6 rounded-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col items-center mx-auto w-full max-w-[180px]">
          <FaCss3Alt className="text-5xl text-blue-500 mb-3" />
          <p className="font-semibold text-lg">CSS</p>
        </div>

        {/* Tailwind */}
        <div className="bg-gray-800 cursor-pointer p-6 rounded-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col items-center mx-auto w-full max-w-[180px]">
          <SiTailwindcss className="text-5xl text-sky-400 mb-3" />
          <p className="font-semibold text-lg">Tailwind</p>
        </div>

        {/* JavaScript */}
        <div className="bg-gray-800 cursor-pointer p-6 rounded-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col items-center mx-auto w-full max-w-[180px]">
          <SiJavascript className="text-5xl text-yellow-400 mb-3" />
          <p className="font-semibold text-lg">JavaScript</p>
        </div>

        {/* GitHub */}
        <div className="bg-gray-800 cursor-pointer p-6 rounded-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col items-center mx-auto w-full max-w-[180px]">
          <FaGithub className="text-5xl text-gray-100 mb-3" />
          <p className="font-semibold text-lg">GitHub</p>
        </div>

        {/* Git */}
        <div className="bg-gray-800 cursor-pointer p-6 rounded-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col items-center mx-auto w-full max-w-[180px]">
          <FaGitAlt className="text-5xl text-orange-600 mb-3" />
          <p className="font-semibold text-lg">Git</p>
        </div>

        {/* MySQL */}
        <div className="bg-gray-800 cursor-pointer p-6 rounded-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col items-center mx-auto w-full max-w-[180px]">
          <SiMysql className="text-5xl text-blue-600 mb-3" />
          <p className="font-semibold text-lg">MySQL</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
