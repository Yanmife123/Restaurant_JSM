import { images, data } from "../constants";
import { useState } from "react";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center">
      <div className="">
        <img src={images.gericht} alt="" className="md:h-[45px] h-[35px]" />
      </div>
      <ul className="list-none lg:flex hidden gap-[30px]">
        {data.navLinks.map((link) => (
          <li key={link.id} className="font-alt text-sm font-normal text-white">
            <a
              href={`#${link.id}`}
              className="transition ease-in duration-200 hover:text-golden"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <ul className="list-none lg:flex hidden relative gap-[20px]">
        <li className="font-alt text-white text-sm font-normal h-full ">
          <a href="#" className=" relative link__transition">
            Log in / registration
          </a>
        </li>
        <div className="w-[1px] h-[inherit] bg-grey" />
        <li className="font-alt text-white text-sm font-normal h-full ">
          <a href="#" className=" relative link__transition">
            book table
          </a>
        </li>
      </ul>
      <div className="lg:hidden flex">
        <img
          src={images.hamMenu}
          alt="MenuBtn"
          className="w-[35px] h-[35px] cursor-pointer"
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="fixed link__opening top-0 h-[100vh] left-0 w-full bg-black z-[5]">
            <img
              src={images.Favicon}
              alt=""
              className=" md:w-[40px] md:h-[40px] w-[30px] h-[30px] absolute right-[40px] top-3"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="flex flex-col justify-center items-center gap-6 h-full">
              {data.navLinks.map((link) => (
                <li
                  key={link.id}
                  className="font-alt  md:text-[24px]   text-[18px] font-semibold text-golden"
                >
                  <a
                    href={`#${link.id}`}
                    className=""
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
