import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import UnderConstruction from "./components/UnderConstruction";
// import Homepage from "./components/Homepage";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/UnderConstruction",
      element: <UnderConstruction/>,
    }    
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <div  style={{ margin: 0, padding: 0 }}>
    <AuthProvider>
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
    </div>
    
  );
}

export default App;