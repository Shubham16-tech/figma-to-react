import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="w-[450px] h-[450px] rounded-full overflow-hidden">
            <img
              src={aboutImg}
              alt="about"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">About Me</h2>

          <p className="text-gray-500 mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium.
          </p>

          {/* SKILLS */}
          <div className="space-y-8">

            {/* UX */}
            <div>
              <p className="mb-2">UX</p>
              <div className="w-full h-[8px] bg-gray-300 rounded-full relative">
                <div className="w-[90%] h-[8px] bg-orange-500 rounded-full relative">
                  <span className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-white border-4 border-orange-500 rounded-full"></span>
                </div>
              </div>
            </div>

            {/* Website Design */}
            <div>
              <p className="mb-2">Website Design</p>
              <div className="w-full h-[8px] bg-gray-300 rounded-full relative">
                <div className="w-[85%] h-[8px] bg-orange-500 rounded-full relative">
                  <span className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-white border-4 border-orange-500 rounded-full"></span>
                </div>
              </div>
            </div>

            {/* App Design */}
            <div>
              <p className="mb-2">App Design</p>
              <div className="w-full h-[8px] bg-gray-300 rounded-full relative">
                <div className="w-[80%] h-[8px] bg-orange-500 rounded-full relative">
                  <span className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-white border-4 border-orange-500 rounded-full"></span>
                </div>
              </div>
            </div>

            {/* Graphic Design */}
            <div>
              <p className="mb-2">Graphic Design</p>
              <div className="w-full h-[8px] bg-gray-300 rounded-full relative">
                <div className="w-[90%] h-[8px] bg-orange-500 rounded-full relative">
                  <span className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-white border-4 border-orange-500 rounded-full"></span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;