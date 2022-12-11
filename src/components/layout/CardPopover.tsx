import {
  Popover,
  PopoverHeader,
  PopoverBody,
  UncontrolledPopover,
} from "reactstrap";

const CardPopover = ({
  title,
  details,
}: {
  title: string;
  details: string[];
}) => {
  return (
    <>
      <UncontrolledPopover
        placement="bottom"
        target={`PopoverFocus_${title}`}
        trigger="focus"
      >
        <PopoverHeader>{`${title}`}</PopoverHeader>
        <PopoverBody>
          <ul>
            {details.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
        </PopoverBody>
      </UncontrolledPopover>
    </>
  );
};

export default CardPopover;
