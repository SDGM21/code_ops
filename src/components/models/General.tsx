import { myData } from "../../../helpers/personalData";
import CoursesList from "../layout/CoursesList";
import TechWorkList from "../layout/TechWorkList";
import photo from "../../assets/FtTipoCarnet.png";

const General = () => {
  return (
    <>
      <div className="userDisplay">
        <img src={photo} alt="USER_PHOTO" />
        <h1>{myData.name}</h1>
      </div>
      <div className="userDescription">
        <p>{myData.description}</p>
      </div>

      <TechWorkList />
      <CoursesList />
    </>
  );
};

export default General;
