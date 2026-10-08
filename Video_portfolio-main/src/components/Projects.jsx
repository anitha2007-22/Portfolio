import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Smart Attendance System",
    description:
      "An intelligent attendance and analytics system with dynamic QR, anti-proxy mechanisms, attendance risk prediction and AI-generated insights.",
    tech: "React • TypeScript • Node.js • AI",
    github: "https://github.com/anitha2007-22/SmartAttendance",
  },
  {
    title: "AI TransportHub",
    description:
      "An AI-powered transportation platform designed to provide smarter and more efficient transport management.",
    tech: "React • AI • TypeScript • Node.js",
    github: "https://github.com/anitha2007-22/AI-TransportHub",
  },
  {
    title: "CivicFix",
    description:
      "A civic issue reporting platform that helps users report public problems and improve communication between citizens and authorities.",
    tech: "Web Development • JavaScript • Backend",
    github: "https://github.com/anitha2007-22/CivicFix",
  },
  {
    title: "PayWallet",
    description:
      "A digital wallet application designed to provide a simple and convenient way to manage digital payments and transactions.",
    tech: "Web Development • JavaScript",
    github: "https://github.com/anitha2007-22/paywallet",
  },
  {
    title: "AI Customer Support",
    description:
      "An AI-powered customer support solution designed to provide automated assistance and improve customer interaction.",
    tech: "AI • React • JavaScript",
    github: "https://github.com/anitha2007-22/AI-Customer_Support",
  },
];

const Projects = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section
      id="projects"
      className="w-full bg-black text-white px-6 md:px-12 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div data-aos="fade-up" className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3">
            My Work
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Featured Projects
          </h2>

          <p className="text-white/60 mt-5 max-w-2xl text-sm md:text-base leading-relaxed">
            Projects where I apply programming, AI and problem-solving skills
            to build practical solutions.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-8 backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-white/30 text-sm font-bold">
                  0{index + 1}
                </span>

                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  ↗
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <p className="text-xs md:text-sm text-white/40 mb-7">
                {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-white/80 transition"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Upcoming Project */}
        <div
          data-aos="fade-up"
          className="mt-8 rounded-3xl border border-dashed border-white/20 bg-white/[0.03] p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
                Upcoming Project
              </p>

              <h3 className="text-3xl md:text-4xl font-black mb-3">
                AI Guardian
              </h3>

              <p className="text-white/60 max-w-2xl text-sm md:text-base leading-relaxed">
                An AI safety platform focused on addressing hallucination,
                misinformation, bias, privacy and other risks associated with
                AI systems.
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex px-6 py-3 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                Coming Soon
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;