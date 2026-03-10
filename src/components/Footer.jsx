import facebook from "../assets/Facebook.png"
import twitter from "../assets/Twitter.png"
import linkedin from "../assets/Linkedin.png"
import instagram from "../assets/Instagram.png"

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-[#f5f5f5]">

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        <h2 className="text-2xl font-bold">Shubham</h2>

        <ul className="flex gap-8 text-gray-600">
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-6">
          <img src={facebook} className="w-6" />
          <img src={twitter} className="w-6" />
          <img src={linkedin} className="w-6" />
          <img src={instagram} className="w-6" />
        </div>

        <p className="text-sm text-gray-500">
          © 2026 Shubham. All Rights Reserved
        </p>

      </div>

    </footer>
  );
};

export default Footer;