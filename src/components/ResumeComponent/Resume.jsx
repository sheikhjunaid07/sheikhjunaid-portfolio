const Resume = () => {
  return (
    <>
      {/* Resume Section */}
      <section id="resume" className="resume section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>
            My Journey from very starting to till Now to be a Full Stack
            Developer.
          </p>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>

              <div className="resume-item pb-0">
                <h4>Sheikh Junaid</h4>
                <p>
                  <em>
                    Motivated and detail-oriented MERN Stack Developer.
                    Passionate about creating real world applications and
                    optimizing application performance. Committed to continuous
                    learning and staying updated with the latest industry trends
                    to deliver innovative solutions.
                  </em>
                </p>
                <ul>
                  <li>Chandralok Square, Indore </li>
                  <li>+91 9754682432</li>
                  <li>sheikhjunaid732000@gmail.com</li>
                </ul>
              </div>
              {/* Edn Resume Item */}

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Master of Computer Application</h4>
                <h5>2020 - 2022</h5>
                <p>
                  <em>
                    Medicaps Institute of Technology and Management, Indore
                  </em>
                </p>
                <p>
                  During my MCA from 2020 to 2022, I faced the unique challenge
                  of adapting to online learning due to the COVID-19 pandemic.
                  This experience taught me valuable lessons both academically
                  and personally. I gained knowledge about some programming
                  languages, like Python and Java, and developed skills in web
                  development. Working on various projects allowed me to apply
                  these skills in practical scenarios, enhancing my
                  understanding of theoretical concepts.
                </p>
              </div>
              {/* Edn Resume Item */}

              <div className="resume-item">
                <h4>Bachelor of Science (Computers)</h4>
                <h5>2017 - 2020</h5>
                <p>
                  <em>Pandit Jawaharlal Nehru Govt. College, Nepanagar</em>
                </p>
                <p>
                  "During my B.Sc. in Computer Science, I experienced a unique
                  learning environment where lectures were not conducted on a
                  daily basis, which placed a strong emphasis on self-study.
                  This structure taught me valuable lessons about taking
                  initiative and responsibility for my own education. Through
                  self-directed learning, I explored various topics in depth,
                  such as programming languages like C, and C++This independent
                  study allowed me to develop a strong foundation in computer
                  science principles.
                </p>
              </div>
              {/* Edn Resume Item */}
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>MERNStack Intern</h4>
                <h5>2024 - Present</h5>
                <p>
                  <em>Ypsilon IT Solutions Pvt Ltd, Indore </em>
                </p>
                <ul>
                  <li>
                    I have learned MERN Stack throughout this Internship from
                    very Basic to Advanced Level.
                  </li>
                  <li>
                    I have learned so many technologies like - JavaScript, Node,
                    Express, React and other also.{" "}
                  </li>
                  <li>
                    Understanding of web services & software development
                    process.
                  </li>
                  <li>
                    Writing clean and efficient code under the guidance of
                    senior developers.
                  </li>
                </ul>
              </div>
              {/* Edn Resume Item */}

              <div className="resume-item">
                <h4>Flutter Intern</h4>
                <h5>2024 - 2024</h5>
                <p>
                  <em>Alphawizz Technologies Pvt Ltd, Indore</em>
                </p>
                <ul>
                  <li>
                    I have worked on some projects where I was created UI
                    Screens in Flutter.
                  </li>
                  <li>
                    I have learned how to work in a software company,
                    collaborating with seniors to learn & develop new skills.
                  </li>
                  <li>
                    Use Firebase as a backend and validation in applications.
                  </li>
                  <li>
                    Implementing designs into functional applications, ensuring
                    a user-friendly experience.
                  </li>
                </ul>
              </div>
              {/* Edn Resume Item */}
            </div>
          </div>
        </div>
      </section>
      {/* /Resume Section */}
    </>
  );
};

export default Resume;
