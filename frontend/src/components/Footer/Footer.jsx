import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-section">

      <div className="container">

        <div className="row gy-5 align-items-center">

          <div className="col-lg-5 order-2 order-lg-1">

            <div className="follow-content">

              <h3 className="follow-title">
                Follow Me
              </h3>

              <div className="title-line"></div>

              <p className="m-4">
                Let's connect on social media and stay updated with my latest
                projects and journey.
              </p>

              <div className="social-links">

                <a
                  href="https://www.facebook.com/share/1KVzK6GsMD/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  // style={{border: "0.1px solid #1877F2"}}
                >
                  <FaFacebookF size={24} color="#1877F2"/>
                </a>

                <a
                  href="https://github.com/mosaraf-in"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} color="#000000" />
                </a>

                <a
                  href="https://www.instagram.com/mosaraf_1208?srtk=Yzd2Z3E0MWNjb3o0"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} color="#E4405F" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mosaraf1208/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={24} color="#0A66C2" />
                </a>

              </div>

              <p className="copyright">&copy; 2026 Mosaraf Hossain. All Rights Reserved.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Footer;