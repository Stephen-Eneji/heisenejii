import '../App.css';
import '../moreCss/animation.css';
import '../moreCss/responsive.css';
import twitter from "../imgs/socialsvgs/twitter.png"
import linkedin from "../imgs/socialsvgs/linkedin.png"
import instagram from "../imgs/socialsvgs/instagram.png"
import whatsapp from "../imgs/socialsvgs/whatsapp.png"
import email from "../imgs/socialsvgs/gmail.png"
import github from "../imgs/socialsvgs/github.png"

function Contact() {
  return (
    <div className="Contact" id='contact'>
        <div className='social-media-connects'>
            <a href="https://twitter.com/heisenejii/" target='_blank'><img src={twitter} alt="connect with me on Twitter"/></a>

            <a href="https://www.linkedin.com/in/stephen-eneji-382471209/" target='_blank'><img src={linkedin} alt="connect with me on LinkedIn"/></a>
            
            <a href="https://instagram.com/heisenejii" target='_blank'><img src={instagram} alt="connect with me on Instagram" /></a>
            
            <a href="wa.me/+2348166668759" target='_blank'><img src={whatsapp} alt="connect with me on WhatsApp"/></a>

            <a href="https://github.com/stephen-eneji/" target='_blank'><img src={github} alt="Look at some of my GitHub projects"/></a>
            
            <a href="mailto:enejistephen01@gmail.com" target='_blank'></a><img src={email} alt="Email me" id='email' />
        </div>
        
           
    </div>
  );
}

export default Contact;
