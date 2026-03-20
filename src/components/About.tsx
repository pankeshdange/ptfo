import "./styles/About.css";
import { config } from "../config";

const About = () => {
  // Split the description by double newlines to create paragraphs
  const paragraphs = config.about.description.split('\n\n');

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <div className="about-content">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="para">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
