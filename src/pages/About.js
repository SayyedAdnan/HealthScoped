import React from "react";
import './About.css';

const About = () => {
  return (

    <body>
      <div class="aboutBox">
        <h1>About HealthScoped</h1>
        <p>We hope to create a easy to use search engine for consumers to learn more about the health effects that popular products can cause. From drugs to foods our platform uses trusted data from the FDA to provide you with the information you need to make descisions.</p>
        <h1>How to use HealthScoped</h1>
        <ul className="faq">
          <li style={{ listStyleType: 'square' }}>Navigate to the Search Page</li>
          <li style={{ listStyleType: 'square' }}>Select the API type you want to use</li>
          <li style={{ listStyleType: 'square' }}>Click the ⚙️ to customize the filters</li>

        </ul>
      </div>
    </body>
  );
};

export default About;
