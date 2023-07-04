import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  interface MenuItems {
    [key: string]: {
      name: string;
      link: string;
      
    };
  }

  const menuItems: MenuItems = {
    home: {
      name: "Inicio",
      link: "/",  
    },
    reports: {
      name: "Reportes",
      link: "/reports",
    },
    equipo:{
      name: "Nuestro Equipo",
      link:"/nuestroequipo",
    },
    filosofia:{
      name: "Filosofía",
      link: "/filosofia",
    },contact: {
      name: "Contacto",
      link: "/contact",
    },
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 ${
          offset > 0 ? "bg-color-primary" : "bg-transparent"
        }`}
      >
        <nav className="container  flex justify-between items-center">
          <div className="py-5 text-color-primary-light font-bold text-3xl">
            <a href="#home" className="flex items-center ">
              <Image
                src="/images/logo_preview_rev_1.png"
                width={50}
                height={50}
                alt="logo"
              />
              <h1
                style={{ fontFamily: "Centra No2,sans-serif" }}
                className="text-color-primary-light font-bold text-3xl"
              >
                eguridad ESPE
              </h1>
            </a>
          </div>
          <div>
            <ul className="hidden lg:flex items-center space-x-6">
              {Object.keys(menuItems).map((key, index) => (
                <li key={index}>
                  <Link
                    id="link"
                    href={`${menuItems[key].link}`}
                    className="hover:text-color-secondary font-bold ease-in duration-200"
                  >
                    {menuItems[key].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            id="hamburger"
            className="lg:hidden cursor-pointer z-50"
            onClick={() => {
              setScroll(!scroll);
            }}
          >
            <i
              className={`${scroll ? "fa-xmark" : "fa-bars"} fa-solid fa-2x`}
            ></i>
          </div>

          <div
            id="menu"
            className={`${
              scroll ? "block " : "hidden"
            } bg-color-primary h-[100vh] absolute inset-0`}
          >
            <ul className="h-full grid place-items-center py-20">
              {Object.keys(menuItems).map((key, index) => (
                <li key={index}>
                  <Link
                    id="hLink"
                    onClick={() => {
                      setScroll(!scroll);
                    }}
                    href={`${menuItems[key].link}`}
                    className={`hover:text-color-secondary font-bold ease-in  duration-200 ${
                      scroll ? "block" : "hidden"
                    }`}
                  >
                    {menuItems[key].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
