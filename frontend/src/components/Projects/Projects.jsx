import "./Projects.css";

import wishBloomImg from "../../assets/images/projects/wishbloom.png";
import ecommerceImg from "../../assets/images/projects/e-commerce.png";

const Projects = () => {
  return (
    <section id="projects" className="projects_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-left mb-md-5 mb-2">
            <h3 style={{ textAlign: "center" }}>Projects</h3>
            <p style={{ textAlign: "center" }}>
              Some of my recent quality projects
            </p>
          </div>
        </div>

        <div className="row g-4 p-2">

          {/* WishBloom */}

          <div className="col-lg-4 col-sm-6">
            <div className="project-card">

              <div className="project-image ">
                <img
                  src={wishBloomImg}
                  className="img-fluid d-block"
                  alt="WishBloom"
                />
              </div>

              <div className="project-body">

                <div className="d-flex justify-content-between">
                  <h5>WishBloom</h5>
                  <span className="project-type">Full-Stack</span>
                </div>

                <p>
                  A modern birthday wish platform built with React,
                  FastAPI and PostgreSQL.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>FastAPI</span>
                  <span>PostgreSQL</span>
                </div>

                <div className="project-btns">
                  <a
                    href="https://wish-bloom-v2.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live
                  </a>

                  <a
                    href="https://github.com/mosaraf-in/WishBloom-v2"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Ecommerce */}

          <div className="col-lg-4 col-sm-6">

            <div className="project-card">

              <div
                className="project-image"
                
              >
                <img
                  src={ecommerceImg}
                  className="img-fluid d-block"
                  alt="E-Commerce Backend"
                />
              </div>

              <div className="project-body">

                <div className="d-flex justify-content-between">
                  <h5>E-Commerce-Backend</h5>
                  <span className="project-type">
                    Backend
                  </span>
                </div>

                <p>
                  This is a backend API built with FastAPI for a
                  simple e-commerce system.
                </p>

                <div className="project-tech">
                  <span>FastAPI</span>
                  <span>PostgreSQL</span>
                  <span>SQLAlchemy</span>
                </div>

                <div className="project-btns">

                  <a
                    href="https://e-commerce-backend-zlqm.onrender.com/docs"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live
                  </a>

                  <a
                    href="https://github.com/mosaraf-in/E-Commerce-Backend-with-FastAPI/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;