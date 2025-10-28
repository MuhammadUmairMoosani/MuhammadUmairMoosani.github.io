import "./footer.css";

export const Footer = () => {
  return (
    <footer id="footer" className="scroll-animate-up">
      <div className="footer-container">
        {/* Hero Section */}
        <div className="footer-hero">
          <h2>
            READY TO BUILD{" "}
            <span className="text-gradient">SOMETHING GREAT?</span>
          </h2>
          <p>
            Let's collaborate to bring your ideas to life with scalable,
            high‑quality software solutions.
          </p>
        </div>

        {/* Footer Grid */}
        <div className="footer-grid">
          {/* Social Icons - Left Column */}
          <div className="footer-column footer-social-section scroll-animate-up delay-100">
            <h3>Connect With Me</h3>
            <div className="footer-social-icons">
              <a
                href="https://www.linkedin.com/in/muhammad-umair-moosani/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-icon"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.447-2.137 2.941v5.665H9.351V9h3.414v1.561h.049c.476-.9 1.635-1.852 3.367-1.852 3.598 0 4.262 2.368 4.262 5.448v6.295zM5.337 7.433c-1.144 0-2.068-.927-2.068-2.068 0-1.144.924-2.068 2.068-2.068 1.143 0 2.068.924 2.068 2.068 0 1.141-.925 2.068-2.068 2.068zm1.777 13.019H3.559V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://github.com/MuhammadUmairMoosani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-social-icon"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.184 0 0 1.008-.322 3.301 1.23a11.48 11.48 0 0 1 3.004-.404c1.018.005 2.042.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.657.243 2.881.119 3.184.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column scroll-animate-up delay-200">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#my-specialization">About</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#work">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column scroll-animate-up delay-300">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#my-specialization">Mobile Development</a>
              </li>
              <li>
                <a href="#my-specialization">Web Development</a>
              </li>
              <li>
                <a href="#contact">Consultation</a>
              </li>
              <li>
                <a href="#my-specialization">DevOps & CI/CD</a>
              </li>
            </ul>
          </div>

          {/* View My Work */}
          <div className="footer-column scroll-animate-up delay-400">
            <h3>View My Work</h3>
            <a
              href="https://github.com/MuhammadUmairMoosani"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-github-btn"
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.184 0 0 1.008-.322 3.301 1.23a11.48 11.48 0 0 1 3.004-.404c1.018.005 2.042.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.657.243 2.881.119 3.184.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View GitHub
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            Copyright © 2025 All Rights Reserved. Built with ❤️ by{" "}
            <span className="text-gradient">Muhammad Umair Moosani</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
