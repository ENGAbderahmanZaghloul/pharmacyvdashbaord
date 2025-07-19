import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-slate-800 text-white w-64 h-screen p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-blue-300">
            Products
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-blue-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/customers" className="hover:text-blue-300">
            Customers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
