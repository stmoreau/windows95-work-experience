import React from 'react';
import icon from '../assets/os-icons/profile-pic.png';

const appinfo = () => (
<div className="app__info">
{window.innerWidth > 540 ? (<div>
  <h1 className="app__title">
    Coding for me is not just part of work, not even a hobby. It's my inspiration.
  </h1>
  <p>
    During my 6 years of experience, I have come to the conclusion that I have the ability to work non-stop,
    in front of a screen tireless and simply won't pace myself till I'm done. Every day is definitely a new
    learning experience; that's the beauty n' joy of computing after all.
  </p>
  <div className="app_contribution">What's my day-to day contribution?</div>
  <ul>
    <li>🎯 Expert knowledge of HTML5/CSS3</li>
    <li>🎯 jQuery, JavaScript, AJAX, JSON senior experience</li>
    <li>🎯 ReactJS, Redux, ES6, Webpack and Babel senior experience</li>
    <li>🎯 Up to date with latest UX/UI practices using Sketchapp/Invision etc.</li>
    <li>🎯 Knowledge of server-side processes</li>
    <li>🎯 Wide experience using CMS (e.g. Wordpress, Joomla etc.)</li>
  </ul>
  <h3>SPECIALTIES</h3>
  <div className="app__specialties-items">
    HTML5 | CSS3 | JavaScript | JQuery | Bootstrap | ReactJS | ES6 | Webpack | Babel | AJAX | JSON | Java |
    JSP | WordPress | Sketchapp
  </div>

</div>) : ''}
</div>
)

export default appinfo;
