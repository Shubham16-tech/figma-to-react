import { LayoutDashboard, Globe, Smartphone, Brush } from "lucide-react";

const Services = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-semibold mb-4">Services</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
          nibh lectus netus in. Aliquet donec morbi convallis pretium.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-8 mt-16">

  {/* UI UX */}
  <div className="bg-[#f3f3f3] p-8 rounded-xl">
    <LayoutDashboard className="text-orange-500 mb-4" size={36}/>
    <h3 className="text-xl font-semibold mb-3">UI/UX</h3>
    <p className="text-gray-500 text-sm">
      Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
    </p>
  </div>

  {/* Web Design */}
  <div className="bg-[#f3f3f3] p-8 rounded-xl">
    <Globe className="text-orange-500 mb-4" size={36}/>
    <h3 className="text-xl font-semibold mb-3">Web Design</h3>
    <p className="text-gray-500 text-sm">
      Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
    </p>
  </div>

  {/* App Design */}
  <div className="bg-[#f3f3f3] p-8 rounded-xl">
    <Smartphone className="text-orange-500 mb-4" size={36}/>
    <h3 className="text-xl font-semibold mb-3">App Design</h3>
    <p className="text-gray-500 text-sm">
      Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
    </p>
  </div>

  {/* Graphic Design */}
  <div className="bg-[#f3f3f3] p-8 rounded-xl">
    <Brush className="text-orange-500 mb-4" size={36}/>
    <h3 className="text-xl font-semibold mb-3">Graphic Design</h3>
    <p className="text-gray-500 text-sm">
      Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
    </p>
  </div>

</div>
      </div>
    </section>
  );
};

export default Services;