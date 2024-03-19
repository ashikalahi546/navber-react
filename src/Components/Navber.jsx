import { useState } from "react";
import Link from "./Link";

import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navber = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/", exact: true },
    { id: 2, name: "About", path: "/about", exact: true },
    { id: 3, name: "Services", path: "/services", exact: true },
    { id: 4, name: "Contact", path: "/contact", exact: true },
    { id: 5, name: "NotFound", path: "*", exact: false },
  ];

  //   ${open? '': 'hidden'}
  return (
    <nav>
      <div onClick={() => setOpen(!open)} className="text-3xl md:hidden mt-1">
        {open ? (
          <AiOutlineCloseCircle></AiOutlineCloseCircle>
        ) : (
          <HiMenuAlt1></HiMenuAlt1>
        )}
      </div>
      <ul
        className={`flex md:flex-row flex-col gap-3 text-base absolute md:static duration-1000 bg-orange-400 px-5 py-3 text-white     md:rounded-none rounded-lg 
         ${open ? "top-10" : "-top-60"}
           
           `}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navber;
