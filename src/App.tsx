import { Route, Routes } from "react-router-dom";
import { HelloView } from "../../helloview-lib/dist";
import "../../helloview-lib/dist/style.css";
import Doc from "./pages/Doc";
import Home from "./pages/Home";
import Playground from "./pages/Playground";

const App = () => {
  return (
    <>
      <Routes>
        <Route key="l90" path="/" Component={Home} />
        <Route
          key="l91"
          path="/app"
          element={
            <>
              <div className="h-screen">
                <HelloView 
                
                />
              </div>
            </>
          }
        />
        <Route key="l91" path="/playground" Component={Playground} />
        <Route key="l91" path="/documentation" Component={Doc} />
      </Routes>
    </>
  );
};

export default App;
