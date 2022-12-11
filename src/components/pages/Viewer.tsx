import { useParams } from "react-router-dom";
import "../../../sass/viewer.scss";
import VerNavbar from "../layout/VerNavbar";
import { useEffect, useState } from "react";
import General from "../models/General";
import Projects from "../models/Projects";
import Desires from "../models/Desires";

const Viewer = () => {
  const [component, setComponent] = useState<JSX.Element>(General);
  const [view, setView] = useState("general");
  const { user } = useParams();

  useEffect(() => {
    switch (view) {
      case "general":
        setComponent(General);
        break;

      case "projects":
        setComponent(Projects);
        break;

      case "desires":
        setComponent(Desires);
        break;

      default:
        setComponent(General);
        break;
    }
  }, [view]);
  return user === "brokengod" ? (
    <>
      <div className="viewer">
        <div className="navContainer">
          <VerNavbar setter={setView} />
        </div>
        <div className="dataBox">{component}</div>
      </div>
    </>
  ) : (
    <>User: {user} has not been created yet</>
  );
};

export default Viewer;
