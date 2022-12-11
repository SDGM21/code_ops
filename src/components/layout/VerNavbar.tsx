import React from "react";
import { Button, ButtonGroup, Nav, NavItem, NavLink } from "reactstrap";

const VerNavbar = ({
  setter,
}: {
  setter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <ButtonGroup vertical>
        <Button onClick={() => setter("general")} color="danger">
          General
        </Button>
        <Button onClick={() => setter("projects")} color="warning">
          Projects
        </Button>
        <Button onClick={() => setter("desires")} color="success">
          Desires and Aspirations
        </Button>
      </ButtonGroup>
    </>
  );
};

export default VerNavbar;
