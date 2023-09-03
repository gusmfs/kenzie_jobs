import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <>
      <RoutesMain />
      <ToastContainer />
    </>
  );
};

export default App;
