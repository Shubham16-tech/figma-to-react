import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 items-center gap-10">

        {/* LEFT TEXT */}
        <div>
          <p className="text-gray-500 mb-2">Hi I am</p>

          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            Shubham Rao
          </h2>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            UI & UX <br /> Designer
          </h1>

          <p className="text-gray-500 mb-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium.
          </p>

          <button className="bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition">
            Hire Me
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="hero"
            className="w-[420px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;