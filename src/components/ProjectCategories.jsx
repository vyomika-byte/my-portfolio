import React, { useState } from 'react';
import '../styles/ProjectCategories.css';

const categories = [
  { name: "Website Design", link: "#website-projects" },
  { name: "App Design", link: "#app-projects" },
  { name: "Graphic Design", link: "#graphic-projects" },
];

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
          >
            <h2 className="category-title">{category.name}</h2>
            {hovered === index && (
              <div className="view-links">
                {Array(20)
                  .fill()
                  .map((_, i) => (
                    <a href={category.link} key={i}>
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
