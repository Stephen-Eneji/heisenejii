import '../App.css';
import '../moreCss/responsive.css';
import '../moreCss/animation.css';
import pro_image1 from '../imgs/projects_imgs/blogsite.png';

import pro_image2 from '../imgs/projects_imgs/techiesmentor.png';

import pro_image3 from '../imgs/projects_imgs/spaceTourism.png';

import pro_image4 from '../imgs/projects_imgs/adviceGen.jpg';

import pro_image5 from '../imgs/projects_imgs/MatriPsy.jpg';

import pro_image6 from '../imgs/projects_imgs/gridchallenge.jpg';

function Projects() {
  return (

    <div className="Projects" id='projects'>
    
      <h2>PROJECTS</h2>
      <h6>Just 6 of 30+ projects designed by me (Professional & Personal projects inclusive)</h6>

      <div className='Projects-listing'>

        {/* project one start*/}
        <div>
            <img src={pro_image1} width='400px'></img>
            <h4>BLOG SITE</h4>
            <span>Completed in: 300 hours</span>
            <div>
              <button>HTML+CSS</button>
              <button>JavaScript</button>
              <button>BootStrap 5</button>
              <button>JQuery</button>
            </div>
        </div>
        {/* project One end*/}

        {/* project Two start*/}
        <div>
                    <img src={pro_image2} width='400px'></img>
                    <h4>MENTOR TECHIESASSEMBLE</h4>
                    <span>Completed in: 300 hours</span>
                    <div>
                      <button>Wordpress</button>
                      <button>PHP</button>
                      <button>Elementor</button>
                      <button>MariaDB</button>
                      <button>Python</button>
                    </div>
                </div>
                {/* project Two end*/}

                {/* project Three start*/}
        <div>
                    <img src={pro_image3} width='400px'></img>
                    <h4>SPACE TOURISM</h4>
                    <span>Completed in: 300 hours</span>
                    <div>
                      <button>Javascript</button>
                      <button>ReactJS</button>
                      <button>HTML</button>
                      <button>CSS</button>
                    </div>
                </div>
                {/* project Three end*/}

                {/* project Four start*/}
        <div>
                    <img src={pro_image4} width='400px'></img>
                    <h4>ADVISE GENERATOR</h4>
                    <span>Completed in: 300 hours</span>
                    <div>
                      <button>ReactJS</button>
                      <button>JavaScript</button>
                      <button>HTML</button>
                      <button>CSS</button>
                    </div>
                </div>
                {/* project Four end*/}

                {/* project Five start*/}
        <div>
                    <img src={pro_image5} width='400px'></img>
                    <h4>MATRISPY</h4>
                    <span>Completed in: 300 hours</span>
                    <div>
                      <button>Python</button>
                      <button>Kivy</button>
                      <button>GitHub</button>
                    </div>
                </div>
                {/* project Five end*/}

                {/* project Six start*/}
        <div>
                    <img src={pro_image6} width='400px'></img>
                    <h4>GRID CHALLENGE</h4>
                    <span>Completed in: 300 hours</span>
                    <div>
                      <button>JavaScript</button>
                      <button>SCSS</button>
                      <button>HTML</button>
                    </div>
                </div>
                {/* project Six end*/}
    </div>
    </div>
  );
}

export default Projects;
