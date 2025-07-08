import Logo from "../assets/Logo-P.png";

function Navbar() {
  return (
    <div className="flex justify-around items-center px-10 py-4 text-white">
      <img src={Logo} alt="Logo P" className="h-30"></img>
      <ul className="flex gap-6 font-bold">
        <li className="cursor-pointer text-indigo-700 rounded-full px-4">
          Home
        </li>
        <li className="cursor-pointer hover:bg-indigo-700 rounded-full px-4">
          <a href="#about">About me</a>
        </li>
        <li className="cursor-pointer hover:bg-indigo-700 rounded-full px-4">
          Skills
        </li>
        <li className="cursor-pointer hover:bg-indigo-700 rounded-full px-4">
          Contact
        </li>
      </ul>
      <a
        href="https://www.linkedin.com/in/pedro-henrique-566211266/"
        target="_blank"
        className="bg-indigo-700 text-white px-5 py-2 rounded-full font-bold hover:bg-white hover:text-indigo-700 hover:border-indigo-700 hover:border cursor-pointer"
      >
        Connect with me
      </a>
    </div>
  );
}

export default Navbar;
