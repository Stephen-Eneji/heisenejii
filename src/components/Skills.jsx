import '../App.css';
import '../moreCss/responsive.css';
import reactjs from '../imgs/skills/html+css.webp';
import javascript from '../imgs/skills/JavaScript.png';
import python from '../imgs/skills/python.png';
import flutterflow from '../imgs/skills/flutterflow.png';
import html from '../imgs/skills/html+css.webp';
import mariadb from '../imgs/skills/mariaDB.webp'
import wordpress from '../imgs/skills/wordpress.png'
import figma from '../imgs/skills/figma.png'
import git from '../imgs/skills/git.png'
import elementor from '../imgs/skills/elementor.svg'
import aplus from '../imgs/skills/aplus.png'
import bootstrap from '../imgs/skills/bootstrap.png'

function Skills() {
  return (
    <div className="Skills" id='skills'>
      <div className='view-more'>
                  <button>
                    <a href="https://github.com/stephen-eneji" target='_blank'>
                    <p>View more Projects</p>
                  </a>
                  </button>
      </div>

      <div>
        <h2 className='skills'>SKILLS</h2>
        {/* Multiple Spans for my skills */}
        <div className='skillset-list'>
        <span>
            <img src={aplus} alt="My Reseach skills" />
          </span>

          <span>
            <img src={javascript} alt="javascript" />
          </span>

          <span>
            <img src={python} alt="python" />
          </span>

          <span>
            <img src={reactjs} alt="react javascript" />
          </span>

          <span>
            <img src={mariadb} alt="mariaDB for database" />
          </span>

          <span>
            <img src={wordpress} alt="wordpress for No-Code development" />
          </span>

          <span>
            <img src={flutterflow} alt="Flutterflow for No-Code development" />
          </span>

          <span>
            <img src={git} alt="Git & GitHub for version control" />
          </span>

          <span>
            <img src={figma} alt="Figma for pre-product design" />
          </span>

          <span>
            <img src={bootstrap} alt="Bootstrap for responsiveness" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
