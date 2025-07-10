const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            As a <b>Full Stack Developer</b>, I provide comprehensive solutions
            that cover the entire web development lifecycle. Here are the key
            services I offer to bring your digital ideas to life.
          </p>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item item-cyan position-relative">
                <div className="icon">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      stroke-width="0"
                      fill="#f5f5f5"
                      d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                    ></path>
                  </svg>
                  <i className="bi bi-code"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Custom web Applications</h3>
                </a>
                <p>
                  I build responsive, scalable web applications using MERN Stack
                  (MongoDB, Express.js, React, Node.js) architecture.Whether you
                  need a CRM, dashboard, or any custom solution, I create
                  tailored applications that align perfectly with your business
                  needs
                </p>
              </div>
            </div>
            {/* End Service Item */}

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-item item-orange position-relative">
                <div className="icon">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      stroke-width="0"
                      fill="#f5f5f5"
                      d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                    ></path>
                  </svg>
                  <i className="bi bi-broadcast"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>SPA Development</h3>
                </a>
                <p>
                  Specializing in Single Page Applications (SPAs) using React.js
                  with modern hooks, Context API, and state management solutions
                  like Redux. I create seamless, app-like experiences with
                  efficient client-side rendering.
                </p>
              </div>
            </div>
            {/* End Service Item */}

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item item-teal position-relative">
                <div className="icon">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      stroke-width="0"
                      fill="#f5f5f5"
                      d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                    ></path>
                  </svg>
                  <i className="bi bi-easel"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>RESTful APIs</h3>
                </a>
                <p>
                  I design and implement secure, well-documented REST APIs using
                  Node.js and Express.js. My APIs follow industry best practices
                  for authentication (JWT, OAuth), validation, error handling,
                  and database operations.
                </p>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>
      {/* /Services Section */}
    </>
  );
};

export default Services;
