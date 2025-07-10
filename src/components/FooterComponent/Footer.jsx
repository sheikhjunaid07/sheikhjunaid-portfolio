const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <h3 className="sitename">Sheikh Junaid</h3>
          <p>Connect Me in your social life...</p>
          <div className="social-links d-flex justify-content-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sheikh-junaid-76a2a31bb/"
            >
              <i class="bi bi-linkedin"></i>
            </a>
            <a target="_blank" href="https://github.com/sheikhjunaid07">
              <i class="bi bi-github"></i>
            </a>
            <a target="_blank" href="https://medium.com/@sheikhjunaid07">
              <i class="bi bi-medium"></i>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/sheikh.junaid.0717"
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a target="_blank" href="https://discord.com/users/sheikhjunaid07 ">
              <i class="bi bi-discord"></i>
            </a>
          </div>
          <div className="container">
            <div className="copyright">
              <span>&copy; Copyright</span>
              <strong className="px-1 sitename">Sheikh Junaid</strong>{" "}
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
