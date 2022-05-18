import Card from "../Card";
import ebco from "../assets/ff/ebco.png"
import hafele from "../assets/ff/hafele.png"
import hettich from "../assets/ff/hettich.png"

function FF() {
return (
<div className="container my-4">
    <div className="row justify-content-center">
        <h2  className="text-center pb-3">Furniture Fittings And Accessories</h2>
        <Card title="Ebco"
            img={ebco}/>
        <Card title="Hettich" 
            img={hettich} />
        <Card title="Hafele"
            img={hafele} />
    </div>
</div>
);
}

export default FF;