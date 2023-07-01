
import Nav from "./Nav"
import logo from '../assets/blue_rabbit_no_bg.png'

function Header() {
  return (
    <header
      className="row header mx-0 navbar navbar-expand-md"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="logo"
            className="w-100"
            width="90"
            height="60"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <div className="navbar-nav ms-auto">
            <Nav />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header