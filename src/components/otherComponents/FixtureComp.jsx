import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import "./Styles.css";

function FixtureComp() {
  return (
    <div>
      <div className="container bg-light">
        <div className="row border text-center rounded-2 align-items-center p-2">
          <div className="col-md-3">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                MYJ First team Fixtures
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Team A</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Team B</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Team C</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-md-3">
            NEXT MATCH <span className="ms-2">02:00:28:50</span>
          </div>
          <div className="col-md-6 text-end">
            <FontAwesomeIcon icon={faSquareCaretLeft} className="me-2" size="xl" />
            <FontAwesomeIcon icon={faSquareCaretRight} size="xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixtureComp;
