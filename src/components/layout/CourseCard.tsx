import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import CardPopover from "./CardPopover";

type CourseData = {
  key: string;
  title: string;
  topics: string[];
  ID: string;
  provider: string;
  emition: string;
  link?: string;
};

const CourseCard = ({
  title,
  topics,
  key,
  ID,
  provider,
  link,
  emition,
}: CourseData) => {
  return (
    <>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Emitted: {emition}
          </CardSubtitle>
          <CardText>
            <ul className="">
              {topics.map((topic) => {
                return <li>{topic}</li>;
              })}
            </ul>
            <div>
              <span>{ID}</span>
            </div>
            <div>
              <strong>Provider: {provider}</strong>
            </div>
            {link && <a href={link}>{"Reference"}</a>}
          </CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default CourseCard;
