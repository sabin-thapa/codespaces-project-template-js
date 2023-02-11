/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about.jpg";

const imageAltText = "Sabin Thapa meditating at Gosainkunda";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm an undergraduate student of Computer Engineering at Kathmandu University. I enjoy creating unique and simplistic user interfaces in creative ways and playing around with data.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web Development",
  "Mobile Application Development",
  "Data Mining, Data Warehousing",
  "ReactJS, NextJS Website Development",
  "Leadership, Communication, Problem Solving",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am also a GitHub Campus Expert. GitHub Campus Experts are student leaders that strive to build diverse and inclusive spaces to learn skills, share their experiences, and build projects together. ";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#E0E0E0",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "10%",
        }}
      >
        <h2 style={{ fontWeight: 600 }}>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.3rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
      <div style={{ position: "absolute", bottom: "4rem", left: "50%" }}>
        <button
          style={{ background: "none", border: "none" }}
          onClick={() => {
            window.scrollBy(0, 800);
          }}
        >
          <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
        </button>
      </div>
    </section>
  );
};

export default About;
