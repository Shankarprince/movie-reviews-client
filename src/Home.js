import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export function Home() {

  const theme = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "home-container-light" : "home-container-dark"}>
      <h1 className="home-body-container">Welcome <br></br>to<br></br> Movies<br></br> Database.</h1>
    </div>
  );
}