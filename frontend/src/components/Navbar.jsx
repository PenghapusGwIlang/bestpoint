import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function CompNavbar() {
  return (
    <>
      <Navbar expand="lg" bg="dark" className="sticky-top" data-bs-theme="dark">
        <Container fluid>
          <Nav.Link className="navbar-brand" href="/">
            BestPoint
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarNav"></Navbar.Toggle>
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Item>
                <Nav.Link class="nav-link" href="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link class="nav-link" href="/places">
                  Places
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link class="nav-link" href="/places/create">
                  New Place
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {/* <Nav>
              <% if(!currentUser) { %>
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">Register</a>
          </li>
          <% } else { %>
          <li class="nav-item">
            <a class="nav-link" href="/logout" onclick="
              event.preventDefault()
              document.getElementById('logout-form').submit()
            ">Logout</a>
            <form action="/logout" method="POST" style="display: none;" id="logout-form"></form>
          </li>
          <% } %>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CompNavbar
