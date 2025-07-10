const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Want to Work with me Contact Me.... &#128071;</p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Chandralok Square, Indore</p>
                </div>
              </div>
              {/* End Info Item */}

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 8871349570</p>
                </div>
              </div>
              {/* End Info Item */}

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>sheikhjunaid732000@gmail.com</p>
                </div>
              </div>
              {/* End Info Item */}
            </div>

            <div className="col-lg-8">
              <form
                action="forms/contact.php
                +
                
                 "
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>

                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </>
  );
};
export default Contact;
