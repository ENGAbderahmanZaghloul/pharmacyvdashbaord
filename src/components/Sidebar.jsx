import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="w-[200px] h-fit bg-[#000E2E]  text-white font-normal rounded-r-3xl px-5 py-10 ">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src="/public/images/Logo.png" alt="" />
          <h1>Pharmy</h1>
        </div>
      </div>
      <div className="h-[2px] bg-white my-10"></div>
      <ul className="space-y-4">
        <li
          className={`flex gap-1 hover:p-2 cursor-pointer   hover:bg-[#2563EB] hover:rounded-full
    ${
      pathname === "/overview"
        ? "bg-[#2563EB] text-white p-2 rounded-full"
        : "hover:bg-[#2563EB] hover:text-white"
    }`}
        >
          <img src="/public/images/lists.png" alt="" />
          <Link to="/overview" className="hover:text-blue-300">
            Overview
          </Link>
        </li>
        <li
          className={`flex gap-1 hover:p-2 cursor-pointer   hover:bg-[#2563EB] hover:rounded-full
    ${
      pathname === "/"
        ? "bg-[#2563EB] text-white p-2 rounded-full"
        : "hover:bg-[#2563EB] hover:text-white"
    }`}
        >
          <img src="/public/images/products.png" alt="" />
          <Link to="/" className="hover:text-blue-300">
            Products
          </Link>
        </li>
        <li
          className={`flex gap-1 hover:p-2 cursor-pointer   hover:bg-[#2563EB] hover:rounded-full
    ${
      pathname === "/orders"
        ? "bg-[#2563EB] text-white p-2 rounded-full"
        : "hover:bg-[#2563EB] hover:text-white"
    }`}
        >
          <img src="/public/images/cart.png" alt="" />
          <Link to="/orders" className="hover:text-blue-300">
            Orders
          </Link>
        </li>
        <li
          className={`flex gap-1 hover:p-2 cursor-pointer   hover:bg-[#2563EB] hover:rounded-full
    ${
      pathname === "/sales"
        ? "bg-[#2563EB] text-white p-2 rounded-full"
        : "hover:bg-[#2563EB] hover:text-white"
    }`}
        >
          <img src="/public/images/sales.png" alt="" />
          <Link to="/sales" className="hover:text-blue-300">
            Sales
          </Link>
        </li>
        <li
          className={`flex gap-1 hover:p-2 cursor-pointer   hover:bg-[#2563EB] hover:rounded-full
    ${
      pathname === "/customers"
        ? "bg-[#2563EB] text-white p-2 rounded-full"
        : "hover:bg-[#2563EB] hover:text-white"
    }`}
        >
          <img src="/public/images/customers.png" alt="" />
          <Link to="/customers" className="hover:text-blue-300">
            Customers
          </Link>
        </li>
        <li
          className={`flex gap-1 hover:p-2 cursor-pointer   hover:bg-[#2563EB] hover:rounded-full
    ${
      pathname === "/payments"
        ? "bg-[#2563EB] text-white p-2 rounded-full"
        : "hover:bg-[#2563EB] hover:text-white"
    }`}
        >
          <img src="/public/images/dollar.png" alt="" />
          <Link to="/payments" className="hover:text-blue-300">
            Payments
          </Link>
        </li>

        <div className="h-[2px] bg-white !my-10"></div>

        <li
          className={`flex gap-1 hover:p-2 cursor-pointer   hover:bg-[#2563EB] hover:rounded-full
    ${
      pathname === "/help"
        ? "bg-[#2563EB] text-white p-2 rounded-full"
        : "hover:bg-[#2563EB] hover:text-white"
    }`}
        >
          <img src="/public/images/help.png" alt="" />
          <Link to="/help" className="hover:text-blue-300">
            Help & Support
          </Link>
        </li>
        <li
          className={`flex gap-1 hover:p-2 cursor-pointer   hover:bg-[#2563EB] hover:rounded-full
    ${
      pathname === "/settings"
        ? "bg-[#2563EB] text-white p-2 rounded-full"
        : "hover:bg-[#2563EB] hover:text-white"
    }`}
        >
          <img src="/public/images/setting.png" alt="" />
          <Link to="/settings" className="hover:text-blue-300">
            Settings
          </Link>
        </li>
        <li
          className={`flex gap-1 hover:p-2 cursor-pointer   hover:bg-[#2563EB] hover:rounded-full
    ${
      pathname === "/logout"
        ? "bg-[#2563EB] text-white p-2 rounded-full"
        : "hover:bg-[#2563EB] hover:text-white"
    }`}
        >
          <img src="/public/images/logout.png" alt="" />
          <Link to="/logout" className="hover:text-blue-300">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
