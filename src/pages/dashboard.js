import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";
import useUser from "../hooks/use-user";
import LoggedInUserContext from "../context/logged-in-user";

export default function Dashboard({ user: loggedInUser }) {
  const { user, setActiveUser } = useUser(loggedInUser.uid);
  const [width, setWidth] = useState(window.innerWidth);

  const resized = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    document.title = "Instagram";

    window.addEventListener("resize", resized);
    return () => window.removeEventListener("resize", resized);
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <div className="bg-gray-background">
        <Header />
        {width < 1024 ? (
          <div className="grid grid-cols-2 gap-4 justify-between mx-auto md:w-3/4">
            <Timeline />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            <Timeline />
            <Sidebar />
          </div>
        )}
      </div>
    </LoggedInUserContext.Provider>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
};
