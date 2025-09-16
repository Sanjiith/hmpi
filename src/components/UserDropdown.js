import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

function UserDropdown({ userInitial }) {
  const [show, setShow] = useState(false);

  return (
    <Dropdown
      show={show}
      onToggle={() => setShow(!show)}
      className="mt-3"
    >
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
        className="rounded-circle d-flex align-items-center justify-content-center"
        style={{
          width: "40px",
          height: "40px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {userInitial}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/account">Account Settings</Dropdown.Item>
        <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserDropdown;
