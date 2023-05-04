import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaVuejs } from "react-icons/fa";
import AchezMall from "../assets/mall.png";
import Netflix from "../assets/netflix.png";
import Profile from "../assets/github.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <>
      <NavBar />
      <main className="project-main">
        <h1>projects</h1>
        <section className="projects">
          <div className="project">
            <img src={Profile} alt="" />
            <div className="project-details">
              <h3>GitHub Profile</h3>
              <div className="project-icons">
                <FaHtml5 />
                <FaCss3 />
                <FaJsSquare />
                <FaReact />
              </div>

              <p>
                This profiler displays my github profile, followers,
                repositories and details of a single repo. The Github api was
                consumed to create app.
              </p>
              <a
                href="https://altschool-exam-achele.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className="project-btn"
              >
                Live site
              </a>
              <a
                href="https://github.com/Achele/Altschool-Exam"
                rel="noreferrer"
                target="_blank"
                className="project-btn2"
              >
                Repo
              </a>
            </div>
          </div>

          <div className="project">
            <img src={AchezMall} alt="" />
            <div className="project-details">
              <h3>Achez Mall</h3>
              <div className="project-icons">
                <FaHtml5 />
                <FaCss3 />
                <FaJsSquare />
                <FaVuejs />
              </div>

              <p>
                Achez mall is an online shopping store created with Vue, that
                consumes the dummyjson API and authenticates user with firebase
              </p>
              <a
                href="https://achez-mall.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="project-btn"
              >
                Live site
              </a>
              <a
                href="https://github.com/Achele/achez-mall"
                rel="noreferrer"
                target="_blank"
                className="project-btn2"
              >
                Repo
              </a>
            </div>
          </div>

          <div className="project">
            <img src={Netflix} alt="" />
            <div className="project-details">
              <h3>Netflix Clone</h3>
              <div className="project-icons">
                <FaHtml5 />
                <FaCss3 />
              </div>

              <p>A clone of Netflix landing page</p>
              <a
                href="https://netfl-clone.netlify.app/?"
                rel="noreferrer"
                target="_blank"
                className="project-btn"
              >
                Live site
              </a>
              <a
                href="https://github.com/Achele/Netflix-Landing-page"
                rel="noreferrer"
                target="_blank"
                className="project-btn2"
              >
                Repo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
