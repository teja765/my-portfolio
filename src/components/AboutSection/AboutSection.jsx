import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.jpeg' alt='Teja' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Teja, A Computer Science Engineering student with a strong interest in software development.currently studying in Ramaiah university of applied sciences,peenya,bengaluru,karnataka.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
