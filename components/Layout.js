import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link className="navbar-brand" href="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="docs-dropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Documents
              </a>
              <div className="dropdown-menu" aria-labelledby="docs-dropdown">
                <a className="dropdown-item" href="/docs/CV_ShaneWeisz.pdf">CV</a>
                <a className="dropdown-item" href="/docs/MPhil_OfficialTranscript.pdf">Cambridge Transcript</a>
                <a className="dropdown-item" href="/docs/UCT_Transcript.pdf">UCT Transcript</a>
                <a className="dropdown-item" href="/docs/Matric_Certificate.pdf">Matric Certificate</a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="links-dropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Links
              </a>
              <div className="dropdown-menu" aria-labelledby="links-dropdown">
                <a className="dropdown-item" href="https://github.com/shaneweisz">GitHub</a>
                <a className="dropdown-item" href="https://www.linkedin.com/in/shaneweisz/">LinkedIn</a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="recreation-dropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Recreation
              </a>
              <div className="dropdown-menu" aria-labelledby="recreation-dropdown">
                <Link className="dropdown-item" href="/quiz">
                  Personal Quiz
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" href="/tic_tac_toe">
                  Play Tic Tac Toe
                </Link>
                <Link className="dropdown-item" href="/connect_four">
                  Play Connect Four
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
