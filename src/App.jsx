import router from "./router/index";
import "./App.css";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <section>
      <RouterProvider router={router} />
      <h1>home</h1>
    </section>
  );
}

export default App;
