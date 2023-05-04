// import Avatar from "../assets/Aches.jpg";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import NavBar from "./NavBar";

export default function About() {
  return (
    <>
      <section className="abtMe-info">
        {/* <img src={Avatar} alt="A portrait of Achele smiling" /> */}
        <article className="hero-text">
          <h1>hello, i am</h1>
          <span>Ojoachele onuh</span>
          <p>Frontend web disigner | developer</p>
        </article>
        {/* <h1>Frontend web developer</h1> */}
      </section>
      <NavBar />

      <section id="about" className="aboutMe">
        <p>
          I am a software developer based in Abuja, Nigeria. I enjoy creating
          visually stunning and engaging web experiences. My passion for making
          things and the challenge of bringing a design concept to life motivate
          me and I am always looking for new ways to improve myself. Currently,
          am in the job market searching for my first developer job.
        </p>
        <ul className="socials">
          <li>
            <a
              href="https://twitter.com/ojoachele"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <FaTwitter />{" "}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Achele"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <FaGithub />{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/achele/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <FaLinkedin />{" "}
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
