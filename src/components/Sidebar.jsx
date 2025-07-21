// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TbSquareRoundedArrowRight } from "react-icons/tb";

const sidebarLi = [
  {
    patheName: "/overview",
    icon: "/public/images/lists.png",
    title: "Overview",
  },
  {
    patheName: "/",
    icon: "/images/products.png",
    title: "Products",
  },
  {
    patheName: "/orders",
    icon: "/images/cart.png",
    title: "Orders",
  },
  {
    patheName: "/sales",
    icon: "/images/sales.png",
    title: "Sales",
  },
  {
    patheName: "/customers",
    icon: "/images/customers.png",
    title: "Customers",
  },
  {
    patheName: "/payments",
    icon: "/images/dollar.png",
    title: "Payments",
  },
];

const sidebarLiHelp = [
  {
    patheName: "/help",
    icon: "/images/help.png",
    title: "Help & Support",
  },
  {
    patheName: "/settings",
    icon: "/images/setting.png",
    title: "Settings",
  },
  {
    patheName: "/logout",
    icon: "/images/logout.png",
    title: " Log Out",
  },
];
const Sidebar = ({ openSideBar, setOpenSideBar }) => {
  // const [openSideBar, setOpenSideBar] = useState(true);
  const location = useLocation();
  const { pathname } = location;

  // handler
  const SideBarToggle = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <div
      className={`w-[200px] h-fit bg-[#000E2E]  text-white font-normal rounded-r-3xl px-5 py-10 fixed transition-all duration-500 ease-in-out  ${
        openSideBar ? "translate-x-0" : "-translate-x-36"
      } `}
    >
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src="/public/images/Logo.png" alt="" />
          <h1>Pharmy</h1>
        </div>
        <button onClick={SideBarToggle}>
          {openSideBar ? (
            <img
              src="/public/images/arrow-square-left.png"
              className="h-6"
              alt=""
            />
          ) : (
            <TbSquareRoundedArrowRight className="h-6 w-6" />
          )}
        </button>
      </div>
      <div className="h-[2px] bg-white my-10"></div>
      <ul className="space-y-4">
        {sidebarLi.map((link, index) => {
          return (
            <li
              key={index}
              className={`flex gap-1 hover:p-2 cursor-pointer h-10 hover:bg-[#2563EB] hover:rounded-full
        ${
          pathname === link.patheName
            ? "bg-[#2563EB] text-white p-2 rounded-full"
            : "hover:bg-[#2563EB] hover:text-white"
        }`}
            >
              <img src={link.icon} className="h-6" alt="" />
              <Link to={link.patheName} className="hover:text-blue-300">
                {link.title}
              </Link>
            </li>
          );
        })}

        <div className="h-[2px] bg-white !my-10"></div>

        {sidebarLiHelp &&
          sidebarLiHelp.map((link) => (
            <li
              className={`flex gap-1 hover:p-2 cursor-pointer h-10   hover:bg-[#2563EB] hover:rounded-full 
    ${
      pathname === link.patheName
        ? "bg-[#2563EB] text-white p-2 rounded-full  "
        : "hover:bg-[#2563EB] hover:text-white "
    }`}
            >
              <img src={link.icon} className="h-6" alt="" />
              <Link to={link.patheName} className="hover:text-blue-300">
                {link.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
