import { useState } from "react";
import Home from "./home";
import NavBar from "./navbar";
import Login from "./login";
import Register from "./register";

const Main = () => {
  const [page, setPage] = useState("home");

  let currentPage;
  if (page === "home") currentPage = <Home />;
  else if (page === "login") currentPage = <Login navigate={setPage} />;
  else if (page === "register") currentPage = <Register navigate={setPage} />;

  return (
    <div>
      <NavBar navigate={setPage} />
      {currentPage}
    </div>
  );
};

export default Main;