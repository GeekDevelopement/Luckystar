import godrejlogo from "../assests/godrejlogo.png"
import ebcologo from "../assests/ebcologo.png"
import europalogo from "../assests/europalogo.png"
import dorsetlpogo from "../assests/dorsetlogo.png"

function Logos() {
return (
    <div id="brand-logo" className="my-5">
        <div className="row d-flex align-items-center text-center">
            <div className="col-lg-3 py-3">     
        <span  href="/"><img src={godrejlogo} alt="logo" /></span>
        </div>
        <div className="col-lg-3 py-3"> 
            <span href="/"><img src={ebcologo} alt="logo" /></span>
            </div>
            <div className="col-lg-3 py-3"> 
            <span href="/"><img src={europalogo} alt="logo" /></span>
            </div>
            <div className="col-lg-3 py-3"> 
            <span href="/"><img src={dorsetlpogo} alt="logo" /></span>
            </div>
        </div>
    </div>
);
}

export default Logos;