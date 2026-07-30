import heroImage from "../../assets/images/home-right.webp";
import cv from "../../assets/pdf/cv.pdf";

import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="home_wrapper">
      <div className="container">
        <div className="row">
          {/* Left Content */}

          <div className="col-lg-7 order-lg-1 order-2 home-content">
            <h4 className="position-relative">Hi, myself</h4>

            <h1>Mosaraf Hossain</h1>

            <h5 style={{ color: "rgb(73, 2, 139)" }}>
              Python Full stack Developer
            </h5>

            <p>
              Dedicated and responsible professional with strong
              problem-solving skills. Quick learner, adaptable to new
              challenges, and proficient in presenting complex information
              with clarity, impact, and effective communication.
            </p>

            <div className="mt-5">
              <a
                className="main-btn primary-btn"
                href="#contact"
              >
                Contact Me
              </a>

              <a
                className="main-btn secondary-btn ms-4"
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right Image */}

          <div className="col-lg-5 order-lg-2 order-1">
            <div className="top-right-img">
              <img
                src={heroImage}
                className="img-fluid"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;