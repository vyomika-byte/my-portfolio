import React, { useState } from 'react';
import '../styles/ProjectCategories.css';

const categories = [
  { name: "Website Design", link: "website-design" },
  { name: "App Design", link: "app-design" },
  { name: "Graphic Design", link: "graphic-design" },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const ProjectCategories = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <div className="ProjectCategories-divider"></div>
      <div className="category-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-block"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={()=>scrollToSection(category.link)}
          >
            <h2 className="category-title">{category.name}</h2>
            {hovered === index && (
              <div className="view-links">
                {Array(20)
                  .fill()
                  .map((_, i) => (
                    <a href="#" key={i}>
                    | View Designs |
                  </a>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCategories;
