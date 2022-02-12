import React from "react";
import {
  Container,
  FormControl,
  Navbar,
  Dropdown,
  Nav,
  Badge
} from "react-bootstrap";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="dark" style={{ height: 80 }}>
      <Container fluid>
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: "white" }}>
              CSP Cart
            </Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="search for products"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <BsCartCheckFill color="white" fontSize="25px" />
                <Badge>{10}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>Cart is Empty </span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Container>
    </Navbar>
  );
};

export default Header;
