
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <nav className="w-full py-6">

      <div className="max-w-[1200px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="relative w-fit">
          <h1 className="text-2xl font-bold">
            FAWZI<span className="text-orange-500">UIUX</span>
          </h1>

          <img
            src={logo}
            alt="logo"
            className="absolute -top-4 right-1 w-7"
          />
        </div>


        {/* Menu */}
        <ul className="flex gap-8 font-medium text-gray-700">
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>


        {/* Button */}
        <button className="bg-orange-500 text-white px-5 py-2 rounded">
          Download CV
        </button>

      </div>

    </nav>
  )
}

export default Navbar