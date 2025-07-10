const Skills = () => {
  return (
    <>
      {/* Skills Section */}
      <section id="skills" className="skills section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>JavaScript</span> <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              {/* End Skills Item */}

              <div className="progress">
                <span className="skill">
                  <span>React JS</span> <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              {/* End Skills Item */}

              <div className="progress">
                <span className="skill">
                  <span>Express JS</span> <i className="val">95%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              {/* End Skills Item */}
              <div className="progress">
                <span className="skill">
                  <span>MongoDB</span> <i className="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              {/* End Skills Item */}
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>Adoptability</span> <i className="val">95%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              {/* End Skills Item */}

              <div className="progress">
                <span className="skill">
                  <span>Reader</span> <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              {/* End Skills Item */}

              <div className="progress">
                <span className="skill">
                  <span>Team Oriented</span> <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              {/* End Skills Item */}

              <div className="progress">
                <span className="skill">
                  <span>Problem Solver</span> <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              {/* End Skills Item */}
            </div>
          </div>
        </div>
      </section>
      {/* /Skills Section */}
    </>
  );
};

export default Skills;
