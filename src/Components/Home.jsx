import React, { useEffect, useState } from "react";
import "./Styles/Home.css";
import profile from "../Assets/user.png"
function Home() {
  const roles = ["Front-End Developer", "App Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    let typingSpeed = isDeleting ? 20 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setText(currentRole.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, index, isDeleting]);

  return (
    <section className="home">
      <div className="home-info">
      <h2>Hi, I'm Usman Khalid</h2>
      <h2>{text} |</h2>

        <div className="btn-sci">
        <a href="https://drive.google.com/file/d/1kbHJ_E9qVGZUEbeNs9v4UT2FFNFg5BxS/view?usp=sharing"  target="blank" className="btn">Download Resume</a>
          <div className="sci">
            <a href="https://github.com/Mr-UsmanKhalid" target="_blank"><i class="bx bxl-github"></i></a>&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/usman-khalid-21a656343/" target="_blank"><i class="bx bxl-linkedin"></i></a>&nbsp;&nbsp;&nbsp;
            <a href="https://x.com/UsmanKhalid74" target="_blank"><i class="bx bxl-twitter"></i></a>&nbsp;&nbsp;&nbsp;
            <a href="https://www.instagram.com/officalusman79/" target="_blank"><i class="bx bxl-instagram"></i></a>
          </div>
          
        </div>
      </div>

      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>



    </section>
  );
}

export default Home;
