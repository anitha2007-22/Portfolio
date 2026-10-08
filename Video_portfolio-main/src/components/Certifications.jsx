import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import codecCert from "../assets/certificates/codec-cert.png";
import simplilearnCert from "../assets/certificates/simplilearn-cert.png";
import udemyCert from "../assets/certificates/udemy-cert.png";
import infosysCert from "../assets/certificates/infosys-cert.png";
import googleCert from "../assets/certificates/google-cert.png";
import hackCert from "../assets/certificates/hackdevengers-cert.png";

const certifications = [
  {
    title: "Web Developer Intern",
    issuer: "Codec Technologies",
    type: "Internship",
    image: codecCert,
  },
  {
    title: "Master AI for Web App Development",
    issuer: "Simplilearn | SkillUp",
    type: "Certificate",
    image: simplilearnCert,
  },
  {
    title: "The Complete AI Guide: Learn ChatGPT, Generative AI & More",
    issuer: "Udemy",
    type: "Certificate",
    image: udemyCert,
  },
  {
    title: "Basics of Python",
    issuer: "Infosys",
    type: "Certificate",
    image: infosysCert,
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    type: "Certificate",
    image: googleCert,
  },
  {
    title: "Hackdevengers 2.0",
    issuer: "Hackdevengers",
    type: "Achievement",
    image: hackCert,
  },
];

const Certifications = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  // Close popup with Escape key
  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section
      id="certifications"
      className="w-full bg-black text-white px-6 md:px-12 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div data-aos="fade-up" className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3">
            Achievements
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Certifications & Achievements
          </h2>

          <p className="text-white/60 mt-5 max-w-2xl text-sm md:text-base leading-relaxed">
            Certifications, internships and achievements that reflect my
            continuous learning and interest in technology.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <div
              key={certification.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-8 backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col min-h-[320px]"
            >
              {/* Number and Icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-white/30 text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  ✦
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {certification.title}
              </h3>

              {/* Issuer */}
              <p className="text-white/60 text-sm md:text-base mb-6">
                {certification.issuer}
              </p>

              {/* Type + Button */}
              <div className="mt-auto flex items-center justify-between gap-4 flex-wrap">

                <span className="inline-flex px-4 py-2 rounded-full border border-white/20 text-white/80 text-xs font-bold">
                  {certification.type}
                </span>

                <button
                  type="button"
                  onClick={() => setSelected(certification)}
                  className="px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-sm font-bold hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  View Certificate ↗
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Popup */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 md:p-6"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} certificate`}
        >
          <div
            className="relative w-full max-w-5xl max-h-[95vh] flex flex-col rounded-2xl bg-gray-900 border border-white/10 p-3 md:p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Popup Header */}
            <div className="flex items-start justify-between gap-4 mb-4">

              <div>
                <h3 className="text-lg md:text-2xl font-bold">
                  {selected.title}
                </h3>

                <p className="text-white/60 text-sm mt-1">
                  {selected.issuer}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close certificate"
                className="shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-[#ff2a2a] text-xl transition-colors flex items-center justify-center"
              >
                ×
              </button>

            </div>

            {/* Certificate Image */}
            <div className="overflow-auto rounded-xl bg-white max-h-[calc(95vh-100px)]">
              <img
                src={selected.image}
                alt={`${selected.title} certificate`}
                className="w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;