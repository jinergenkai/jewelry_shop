import { useEffect, useRef, useState } from "react";
import NavItem from "./nav-item";
import { useLocation } from "react-router-dom";

export default function Header() {

  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (location.pathname.includes("/detail-jewelry")) { 
    return (
      <div className="top-0 z-50 w-full text-black transition duration-200 bg-[#f0eee4]">
        <h1
          className="ml-[50%] mt-10 translate-x-[-50%] inline-block text-8xl"
          ref={headerRef}
        >
          SWAN Ice Elegance
        </h1>
        <div className="flex items-center justify-center pt-10">
          {/* New in, jewelry watches accessories decorations gifts */}
          <NavItem href="/">Trang Chủ</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
          <NavItem href="/jewelry">Jewelry</NavItem>
        </div>
      </div>
    );
  }

  return !isScrolled && (location.pathname === "/") ? (
    <div className="absolute top-0 z-50 w-full text-white transition duration-200 bg-black bg-opacity-20 hover:bg-opacity-100 hover:bg-white hover:text-black">
      <h1
        className="ml-[50%] mt-10 translate-x-[-50%] inline-block text-7xl"
        ref={headerRef}
      >
        SWAN Ice Elegance
      </h1>
      <div className="flex items-center justify-center pt-10">
        {/* New in, jewelry watches accessories decorations gifts */}
        <NavItem href="/">Trang Chủ</NavItem>
        <NavItem href="/about">Về</NavItem>
        <NavItem href="/contact">Liên hệ</NavItem>
        <NavItem href="/jewelry">Jewelry</NavItem>
      </div>
    </div>
  ) : (
    <div className={`sticky top-0 z-50 w-full text-black transition duration-100 bg-white bg-opacity-100 border-b-2 border-[#f0eee4]`}>
      <div className="flex items-center justify-between px-5">
        <h1 className="inline-block py-4 text-3xl" ref={headerRef}>
          SWAN Ice Elegance
        </h1>
        {/* New in, jewelry watches accessories decorations gifts */}
        <div>
          <NavItem href="/">Trang Chủ</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
          <NavItem href="/jewelry">Jewelry</NavItem>
        </div>
      </div>
    </div>
  );
}
