const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            I'm a passionate <b>Full Stack Developer</b> by Profession and{" "}
            <b>Reader</b> by Heart. I've always dedicated myself to learn new
            things and Technologies. What sets me apart is my unique blend of
            Web development skills and Adaptability , combined with my always
            ready to learn approach. I thrive on solving complex problems and
            believe in the power of never give up. When I'm not doing code, you
            can find me to reading book. I'm currently excited about dream
            project and always looking for new opportunities to collaborate with
            innovative teams.
          </p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img
                src="assets/img/profile-img.jpg"
                className="img-fluid"
                style={{ borderRadius: "20px" }}
                alt=""
              />
            </div>
            <div className="col-lg-8 content">
              <h2> Full Stack Developer</h2>
              <p className="fst-italic py-3">
                I always looking a opportunity in a company where I get a
                challenging role and a good technical environment to learn a lot
                of things and sharpen my technical skills.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>7 March 2000</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong>{" "}
                      <span>
                        <a
                          href="https://sheikhjunaid.vercel.app"
                          target="_blank"
                        >
                          https://sheikhjunaid.vercel.app
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+91 8871349570</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Indore, India</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>25</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>Master</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>sheikhjunaid732000@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <p className="py-3">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
    </>
  );
};

export default About;
