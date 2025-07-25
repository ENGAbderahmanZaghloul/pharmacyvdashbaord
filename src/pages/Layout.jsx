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
import { useState } from "react";

const Layout = () => {
  const [openSideBar, setOpenSideBar] = useState(true);
  return (
    <div className="flex h-screen transition-all duration-500 ease-in-out">
      <div >
        <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      </div>
      <main className="flex-1 bg-gray-100 transition-all duration-500 ease-in-out ">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
