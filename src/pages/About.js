import React from "react";
import './About.css';

const About = () => {
  return (

    <body>
      <div class="aboutBox">
      <title>HealthScoped🔎</title>
        <h1>About HealthScoped</h1>
        <p>We hope to create a easy to use search engine for consumers to learn more about the health effects that popular products can cause. From drugs to foods our platform uses trusted data from the FDA to provide you with the information you need to make descisions.</p>
        
        <img 
          src="https://i.pinimg.com/736x/5b/72/cf/5b72cfb0019c0074a29c17bc51b16bb8.jpg" 
          alt="HealthScoped Logo" 
          className="purpleheart"
        />

        <h1>How to use HealthScoped</h1>
        <ul className="faq">
          <li style={{ listStyleType: 'square' }}>Navigate to the Search Page</li>
          <li style={{ listStyleType: 'square' }}>Enter the food brand you want to search in the search box</li>
          <li style={{ listStyleType: 'square' }}>Follow for more updates!!</li>
        </ul>
        <h3>Visit our github for more developer options</h3>
        <a href="https://github.com/SayyedAdnan/HealthScoped">Github 🧑‍💻</a>
        <img 
          src="https://images.all-free-download.com/images/graphicwebp/purple_gear_icon_vector_280676.webp"
          alt="How To" 
          className="purplegear"
        />
      </div>
    </body>
  );
};

export default About;
