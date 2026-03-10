import { useState } from "react";

import p1 from "../assets/projects1.png";
import p2 from "../assets/projects2.png";
import p3 from "../assets/projects3.png";

export default function Projects() {

  const [active, setActive] = useState("Web Design");

  const projects = [
    {
      title: "AirCalling Landing Page Design",
      category: "Web Design",
      image: p1
    },
    {
      title: "Business Landing Page Design",
      category: "Web Design",
      image: p2
    },
    {
      title: "Ecom Web Page Design",
      category: "Web Design",
      image: p3
    }
  ];

  const filters = ["All", "UI/UX", "Web Design", "App Design", "Graphic Design"];

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="py-20 bg-white">

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4">My Projects</h2>

        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">

        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-5 py-2 rounded-lg border transition
            ${
              active === item
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto px-6">
  {filteredProjects.map((project, index) => (
    <div key={index}>

      <div className="rounded-xl overflow-hidden shadow hover:scale-105 transition">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[260px] object-cover"
        />
      </div>

      <p className="text-orange-500 text-center mt-4 font-medium">
        {project.category}
      </p>

      <p className="text-center text-gray-800 font-semibold">
        {project.title}
      </p>

    </div>
  ))}
</div>
    </section>
  );
}