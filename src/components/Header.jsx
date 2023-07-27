import '../App.css';
import '../moreCss/responsive.css';
import logo from '../imgs/logo.jpeg';

function Header() {
  return (
    <div className="Header">
    <div className='logo'>
      <img src={logo} alt="logo" width='100px'/>
    </div>

    <div className='main-menu'>
      <ul>
        <a href="#"><li>Home</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#skills"><li>Skills</li></a>
        <a href="#contact"><li>Contact</li></a>
        <a href="https://techiesassembly.com" target='_blank'><li className='blog-main-menu'>Blog</li></a>
      </ul>
    </div>
    </div>
  );
}

export default Header;
