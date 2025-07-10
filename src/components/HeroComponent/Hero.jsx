// import Typed from "typed.js";

const Hero = () => {
  return (
    <>
      {/* /Hero Section */}
      <section id="hero" class="hero section light-background">
        <img src="assets/img/bg-image.jpg" alt="" />

        <div class="container" data-aos="zoom-out">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <h2>Sheikh Junaid</h2>
              <p>
                I'm{" "}
                <span
                  class="typed"
                  data-typed-items="Developer, Reader, Techie"
                >
                  Developer
                </span>
                <span
                  class="typed-cursor typed-cursor--blink"
                  aria-hidden="true"
                ></span>
              </p>
              <div class="social-links">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/sheikh-junaid-76a2a31bb/"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
                <a target="_blank" href="https://github.com/sheikhjunaid07">
                  <i class="bi bi-github"></i>
                </a>

                <a
                  target="_blank"
                  href="https://www.facebook.com/sheikh.junaid.0717"
                >
                  <i class="bi bi-facebook"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/_sheikhjunaid07_/"
                >
                  <i class="bi bi-instagram"></i>
                </a>
                <a target="_blank" href="https://medium.com/@sheikhjunaid07">
                  <i class="bi bi-medium"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
    </>
  );
};

export default Hero;
