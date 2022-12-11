import CourseCard from "./CourseCard";
import { myData } from "../../../helpers/personalData";
const CoursesList = () => {
  return (
    <>
      <div className="groupContainer">
        <div className="containerTitle">
          <h2>Certifications</h2>
        </div>
        <div className="cardContainer">
          {myData.courses.map(
            ({ title, topics, ID, provider, link, emition }) => {
              return (
                <CourseCard
                  key={`${title}_key`}
                  title={title}
                  topics={topics}
                  provider={provider}
                  ID={ID}
                  link={link}
                  emition={emition}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default CoursesList;
