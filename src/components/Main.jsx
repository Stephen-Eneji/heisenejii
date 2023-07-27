import '../App.css';
import '../moreCss/responsive.css';
import designasset from "../imgs/design_asset1.jpg";

function Main() {
  return (
    <div className="Main">
      
      {/* Main Half text section - main-hts */}
      <div className='main-hts'>
        <h1>Hi 🙂, <br/> I'M STEPHEN ENEJI</h1>

        <h4>Welcome to my Portfolio!</h4>

        <h5>I am a Software Engineer, skilled in both Code Programming & No-Code development, with over 3+ years of Professional freelancing experience building for organizations and personal projects.</h5>

      </div>

      <div>
        <img src={designasset} alt="Design asset 1" id='designasset' />
      </div>
    </div>
  );
}

export default Main;
