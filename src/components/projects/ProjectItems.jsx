import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-link">
                
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <p className="project__description">{item.description}</p>
      <a
        href={item.link}
        className="project__button"
        target="_blank"
        rel="noopener noreferrer"
        >
        Demo <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
          </a>
    </div>
  );
};

export default ProjectItems;
