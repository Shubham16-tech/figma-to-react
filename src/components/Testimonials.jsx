import { useState } from "react";

import u1 from "../assets/testimonials1.png";
import u2 from "../assets/testimonials2.png";

export default function Testimonials() {

  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      image: u1,
      text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.",
      name: "Name",
      role: "CEO",
    },
    {
      image: u2,
      text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.",
      name: "Name",
      role: "CEO",
    },
  ];

  function next() {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section className="py-24 bg-white">

      {/* Title */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Testimonials</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
        </p>
      </div>

      {/* Testimonial */}
      <div className="mt-16 flex items-center justify-center gap-8 max-w-3xl mx-auto">

        <button onClick={prev} className="text-3xl">‹</button>

        <div className="flex items-center gap-6">

          <img
            src={testimonials[index].image}
            className="w-24 h-24 rounded-full object-cover"
          />

          <div>
            <p className="text-gray-600 leading-relaxed">
              {testimonials[index].text}
            </p>

            <div className="mt-4">
              <p className="font-semibold">{testimonials[index].name}</p>
              <p className="text-gray-500 text-sm">{testimonials[index].role}</p>
            </div>
          </div>

        </div>

        <button onClick={next} className="text-3xl">›</button>

      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-10">

        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-8 rounded-full cursor-pointer ${
              index === i ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></div>
        ))}

      </div>

    </section>
  );
}