/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.png";

const imageAltText = "campus experts portfolio";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "GitHub Campus Expert 🚩",
    description:
      "GitHub Campus Experts are student leaders that strive to build diverse and inclusive spaces to learn skills, share their experiences, and build projects together.",
    url: "https://githubcampus.expert/sabin-thapa/",
  },
  {
    title: "IT Meet 2022 Event Lead Coordinator 🎉",
    description:
      "Coordinated with event managers by effectively communicating with them and regularly tracking the progress of around 20 events(Gaming, tech and non-tech).",
    url: "https://kucc.ku.edu.np/wp-content/uploads/2022/08/IT%20Express%202022.pdf",
  },
  {
    title: "JavaScript Community Coordinator - KUCC",
    description:
      "Responsible for conducting workshops, meetups and talk sessions in the community related to JavaScript domain at Kathmandu University Computer Club. Information on Page 17 of the IT Express 2022",
    url: "https://kucc.ku.edu.np/wp-content/uploads/2022/08/IT%20Express%202022.pdf",
  },
  {
    title: "Mentor - KU Hackfest 2022",
    description: "Responsible for mentoring the participants on ReactJS and GitHub.",
    url: "https://www.kuhackfest.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "8rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container" style={{ paddingLeft: "6rem" }}>
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{ background: "#F2F2F2" }}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", textDecoration: "underline" }}>{project.title}</h3>
              </a>
              <p className="small" style={{ fontColor: "#000" }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
