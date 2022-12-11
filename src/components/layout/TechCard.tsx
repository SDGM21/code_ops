import {
  Button,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Card,
} from "reactstrap";
import CardPopover from "./CardPopover";

type CardData = {
  key: string;
  logo: string;
  title: string;
  experience: string;
  type: string;
  popoverID: string;
  popoverDetails: string[];
};

const TechCard = ({
  key,
  logo,
  title,
  experience,
  popoverID,
  popoverDetails,
}: CardData) => {
  return (
    <div key={key}>
      <Card
        style={{
          width: "14rem",
        }}
      >
        <img alt={`${title}_logo`} src={logo} />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Experience: {experience}
          </CardSubtitle>
          <CardText>
            <Button type="button" id={popoverID}>
              <i className="material-icons">details</i>
            </Button>
            <CardPopover title={title} details={popoverDetails} />
          </CardText>
          {/* <img src={logo} alt={`${title}_logo`} />
      <h3>{title}</h3>
      <p>{experience}</p>
      <span>{type}</span>
      <div>
      </div> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default TechCard;
