import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Our Company</h2>
            <p>
              Founded in 2010, DEEP AS ENTERPRISES has been providing high-quality office furniture 
              solutions to businesses of all sizes. Our mission is to create workspaces that 
              inspire productivity and comfort.
            </p>
            <p>
              We source sustainable materials and partner with top manufacturers to bring you 
              durable, ergonomic, and stylish furniture options at competitive prices.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h3>12+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Products Available</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Our team" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;