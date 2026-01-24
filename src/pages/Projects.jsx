import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import MohAutos from "../image/MohAutos.png";
import Purity from "../image/Purity.png";
import Lumina from "../image/Lumina.png";
import Listify from "../image/Listify.png";


const projectPage = [
  {
    img: MohAutos,
    title: "MohAutos",
    description:
      "A complete car sales platform that allows users to browse, view, and purchase cars with a clean, modern, and user-friendly interface.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    live: "",
    github: "https://github.com/Abrahamalejolowo/moh-autos.git",
  },
  {
    img: Purity,
    title: "Purity",
    description:
      "A modern and responsive admin dashboard designed to display analytics, manage data, and provide clear insights through a clean UI.",
    tech: ["React", "Tailwind CSS"],
    live: "https://github.com/devsamahd/purity-ui-dashboard",
    github: "https://github.com/devsamahd/purity-ui-dashboard.git",
  },
  {
    img: Listify,
    title: "Listify",
    description:
      "A modern task management web app designed to help users organize tasks efficiently with a clean UI and smooth user experience.",
    tech: ["React", "Tailwind CSS"],
    live: "https://listify-gilt.vercel.app",
    github: "https://github.com/Abrahamalejolowo/listify.git",
  },
  {
    img: Lumina,
    title: "Lumina",
    description:
      "A modern e-commerce web app designed to provide a seamless shopping experience with a clean UI and intuitive navigation.",
    tech: ["React", "Tailwind CSS"],
    live: "https://lumina-p.netlify.app/",
    github: "https://github.com/Abrahamalejolowo/lumina.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-[#111827] mb-12 text-center">
          Projects
        </h3>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectPage.map((project) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-xl p-6 border hover:shadow-lg transition"
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h4 className="font-semibold text-lg mb-2 text-[#111827]">
                {project.title}
              </h4>

              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-slate-100 text-slate-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 items-center">
                {project.github && (
                  <SocialIcon icon={FaGithub} link={project.github} />
                )}
                {project.live && (
                  <SocialIcon
                    icon={FaExternalLinkAlt}
                    link={project.live}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 ">
          <a
            href="https://github.com/imammuhammadmuhideen"
            className="font-bold text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}


function SocialIcon({ icon: Icon, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.25, y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="text-black text-2xl cursor-pointer"
    >
      <Icon />
    </motion.a>
  );
}
