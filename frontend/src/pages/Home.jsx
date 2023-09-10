import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './home.css'

function Home() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a href="/" className="navbar-brand">
              BestPoints
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>

            <div className="navbar-nav">
              <a className="nav-link" href="/places">
                Jelajah
              </a>
              {/* <% if (!currentUser) { %>
                        <a class="nav-link" href="/register">Register</a>
                        <a class="nav-link" href="/login">Login</a>
                    <% } else { %>
                        <a class="nav-link" 
                        href="/logout" 
                        onclick="
                            event.preventDefault(); 
                            document.getElementById('logout-form').submit();
                        ">Logout</a>
                        <form id="logout-form" action="/logout" method="POST" style="display: none;">
                        </form>
                    <% } %> */}
            </div>
          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div className="container">
          <h1>BestPoints</h1>
          <h4 className="subtitle">
            Discover the Best Points for Your Perfect Vacation
          </h4>

          <div className="mt-4 btn-group-center">
            <NavLink to="/places" className="btn btn-outline-light">
              Jelajahi Tempat
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
