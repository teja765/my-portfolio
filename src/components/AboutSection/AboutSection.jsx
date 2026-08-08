import './AboutSection.css';

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper container">
        <div className="about-image">
          <img src="/Photo.jpeg" alt="Teja" />
        </div>

        <div className="about-copy">
          <h1>About Me</h1>

          <p>
            Hi! I'm Teja, a Computer Science Engineering student at Ramaiah
            University of Applied Sciences with a strong interest in software
            development.
          </p>

          <ul className="about-list">
            <li>
              Passionate Full Stack Developer focused on building modern,
              responsive, and user-friendly web applications.
            </li>
            <li>
              Enjoy turning ideas into real-world projects with clean and
              efficient code.
            </li>
            <li>
              Continuously learning new technologies and improving my
              development skills.
            </li>
            <li>
              Skilled in HTML, CSS, JavaScript, React, Git, and GitHub.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;