import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Typed from "react-typed";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image src={"/logo.png"} width={100} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} href="about">
              ABOUT US
            </Nav.Link>
            <Nav.Link as={Link} href="course">
              COURSE{" "}
            </Nav.Link>
            <Nav.Link as={Link} href="contact">
              CONTACT US
            </Nav.Link>
            <Nav.Link as={Link} href="course">
              COURSES
            </Nav.Link>
            <Nav.Link as={Link} href="routine">
            ROUTINE
            </Nav.Link>
          </Nav>
          <div className="mx-3">
            <Typed
              strings={[
                "ADMISSION OPEN FOR BRIDGE COURSE 2080 BS",
                "JOIN NOW !",
                "Call Us Now:016619524,9843577214,9841621432",
              ]}
              startDelay={300}
              typeSpeed={100}
              backSpeed={40}
              backDelay={100}
              loop
              style={{ color: "red", fontWeight: "bold", fontSize: "1rem" }}
            />
          </div>

          <Nav>
            <Button variant="danger" as={Link} href="/enroll">
              Book Seat
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
