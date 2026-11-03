import aboutImage from "../../assets/images/about-us.webp";
import resume from "../../assets/pdf/cv.pdf";

import "./About.css";

function About() {
  return (
    <section id="about" className="about_wrapper">
      <div className="container">
        <div className="row justify-content-between align-items-center">

          {/* Left Image */}

          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="about-img">
              <img
                src={aboutImage}
                className="img-fluid rounded-3 w-100"
                alt="About"
              />
            </div>
          </div>

          {/* Right Content */}

          <div className="col-lg-7 ps-lg-5 text-lg-start">

            <div className="my-3 my-lg-0">
              <h3>let's <br />Introduce about <br />myself</h3>
              <p>My name is <span>Mosaraf Hossain</span>, and I have completed my <span>B.Tech in Computer Science and
                Engineering</span>. I am passionate about software development and enjoy building modern web
                applications using <span>Python, FastAPI, Django</span> and <span>React</span>.</p>
              <p>My goal is to become a skilled <span>Full-Stack Software Engineer</span> and contribute to innovative,
                real-world projects. I am dedicated to expanding my expertise in modern technologies and
                building impactful software solutions that make a difference.</p>
              <a
                href={resume}
                download="Mosaraf_Resume.pdf"
                rel="noopener noreferrer"
                className="main-btn primary-btn mt-4"
              >
                Download Resume
              </a>
              

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;