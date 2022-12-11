import { Button } from "reactstrap";
import { myData } from "../../../helpers/personalData";
import TechCard from "./TechCard";
const TechWorkList = () => {
  return (
    <>
      <div className="groupContainer">
        <div className="containerTitle">
          <h2>Languages</h2>
        </div>
        <div className="cardContainer">
          {myData.techExperience.languages.map((element) => {
            return (
              <>
                <TechCard
                  key={element.title}
                  title={element.title}
                  experience={element.experience}
                  logo={element.logo}
                  type={element.type}
                  popoverID={`PopoverFocus_${element.title}`}
                  popoverDetails={element.details}
                />
              </>
            );
          })}
        </div>
      </div>
      <div className="groupContainer">
        <div className="containerTitle">
          <h2>Frameworks</h2>
        </div>
        <div className="cardContainer">
          {myData.techExperience.frameworks.map((element) => {
            return (
              <>
                <TechCard
                  key={element.title}
                  title={element.title}
                  experience={element.experience}
                  logo={element.logo}
                  type={element.type}
                  popoverID={`PopoverFocus_${element.title}`}
                  popoverDetails={element.details}
                />
              </>
            );
          })}
        </div>
      </div>
      <div id="librarys" className="groupContainer">
        <div className="containerTitle">
          <h2>Librarys</h2>
        </div>
        <div className="cardContainer">
          {myData.techExperience.librarys.map((element) => {
            return (
              <>
                <TechCard
                  key={element.title}
                  title={element.title}
                  experience={element.experience}
                  logo={element.logo}
                  type={element.type}
                  popoverID={`PopoverFocus_${element.title}`}
                  popoverDetails={element.details}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TechWorkList;
