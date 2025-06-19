import logo from "/Images/logo.webp";
import logo2 from "/Images/logo2.webp";
import vector from "/Images/navbarButton.webp";
import close from "/Images/close.webp";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      href: "#support",
      alt: "Support",
    },
    {
      href: "#security",
      alt: "Security",
    },
    {
      href: "#resources",
      alt: "Resources",
    },
    {
      href: "#partners",
      alt: "Partners",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div
        className={`fixed top-0 z-20 w-full max-w-[1920px] py-[1.5vh] transition-all duration-300 ${
          isScrolled ? "bg-[#FFFFFF]" : "bg-[#FFFFFF]"
        }`}
      >
        <div className="hidden w-full items-center justify-between px-[3%] md:flex">
          <img src={logo} className="md:w-[130px] lg:w-[200px]" />

          <div className="flex items-center justify-center gap-[10px] rounded-[12px] bg-[#F3FAFF] px-[16px] py-[12px]">
            {navItems.map((item, index) => (
              <span key={index} className="flex items-center">
                <a
                  href={item.href}
                  className={`font-Nunito text-black md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] ${
                    location.pathname === item.href ? "underline underline-offset-3" : ""
                  }`}
                >
                  {item.alt}
                </a>
                {index < navItems.length - 1 && (
                  <div className="ml-[10px] h-[10px] w-[2px] bg-[#BBBFBB]"></div>
                )}
              </span>
            ))}
          </div>

          <div className="cursor-pointer hover:scale-95 flex items-center justify-center rounded-[12px] bg-[#0E59F6] py-[8px] md:px-[20px] xl:px-[48px] xl:py-[14px]">
            <p className="font-Inter text-nowrap md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] text-white">
              AI Ecosystem
            </p>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-between px-[3%] md:hidden">
          <img src={logo} className="w-[100px] sm:w-[140px]" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-[30px] cursor-pointer items-center justify-center sm:w-[40px]"
          >
            <img src={vector} alt="" className="object-contain" />
          </button>

          {isOpen && (
            <div className="absolute top-0 flex w-full items-center justify-end pr-5 backdrop-blur-sm">
              <div className="flex flex-col rounded-tl-[24px] rounded-bl-[24px] bg-[#0E59F6] p-5 items-center gap-[2vh] ">
                <div className=" flex items-center justify-between w-[240px]">
                  <img src={logo2} className="w-[95px]" />

                  <div onClick={() => setIsOpen(!isOpen)} 
                  className="flex items-center justify-center rounded-full border-2 border-white p-2">
                    <img src={close} className="w-[12px]" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between space-y-1">
                  {navItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex w-[240px] items-center justify-center rounded-[12px] border-[1px] border-white py-[12px]"
                    >
                      <a
                        onClick={() => setIsOpen(!isOpen)}
                        href={item.href}
                        className={`font-Nunito w-full text-center text-white transition-colors hover:bg-gray-100 ${
                          location.pathname === item.href ? "underline underline-offset-3" : ""
                        }`}
                      >
                        {item.alt}
                      </a>
                    </div>
                  ))}
                </div>

                <div  className="flex w-[240px] items-center justify-center rounded-[12px] border-[1px] border-white py-[12px] bg-[#FFFFFF]"
                    >
                      <p className="font-Nunito text-[16px] text-[#0E59F6] font-bold">Join AI Ecosystem

                      </p>
                    </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
