// // import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";

// const RootLayout = () => {
//   return (
//     <div className="root-layout">
//       <Sidebar />

//       {/* <Outlet /> */}
//     </div>
//   );
// };

// export default RootLayout;
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
