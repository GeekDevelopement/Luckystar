import godrejlogo from "../../assests/logos/godrejlogo.png"
import ebcologo from "../../assests/logos/ebcologo.png"
import europalogo from "../../assests/logos/europalogo.png"
import dorsetlpogo from "../../assests/logos/dorsetlogo.png"

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