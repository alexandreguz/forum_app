import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const ForumBody = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link href="#forums">Forums</Nav.Link>
        <Nav.Link href="#home">Recent</Nav.Link>
        <Nav.Link href="#link">Hottt</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default ForumBody;
