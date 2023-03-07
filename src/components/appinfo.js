import React from "react";

const appinfo = () => (
  <div className="app__info">
    {window.innerWidth > 540 ? (
      <div>
        <h1 className="app__title">Stephane Moreau</h1>
        <ul>
          <li>
            👨‍💻 Senior Engineering Manager (SDK) at{" "}
            <a href="https://www.ably.com/" target="_blank">
              Ably
            </a>
          </li>
        </ul>
        <div className="app_contribution">
          What's my day-to day contribution?
        </div>
        <ul>
          <li>
            🎯 Excellent skills in project & product management using agile
            methodologies
          </li>
          <li>🎯 Passion about Consulting and Mentoring</li>
          <li>🎯 Expert knowledge of HTML5/CSS3</li>
          <li>🎯 jQuery, JavaScript, AJAX, JSON senior experience</li>
          <li>🎯 ReactJS, Redux, ES6, Webpack and Babel senior experience</li>
          <li>🎯 Up to date with latest UX/UI practices using Sketchapp</li>
          <li>
            🎯 Experience developing server-side processes and automation
            scripts using Java, NodeJs, Python
          </li>
          <li>
            🎯 Wide experience using a range of CMS like Wordpress, Joomla,
            Adobe Experience Manager
          </li>
        </ul>
      </div>
    ) : (
      ""
    )}
  </div>
);

export default appinfo;
