import React, { useState, useEffect } from "react";
import NavBarDesktop from "../NavBarDesktop";
import NavBarMobile from "../NavBarMobile";

export default function Header() {
  const [view, setView] = useState(window.innerWidth);


  const handleResize = () => {
    setView(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  
  }, []);

  return (
    <header>
      {view > 600 ? <NavBarDesktop /> : <NavBarMobile/>}
    </header>
  );
}