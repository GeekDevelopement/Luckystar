import Card from "../Card";
import hemco from "../assets/gf/hemco.png"
import palladium from "../assets/gf/palladium.png"
import flora from "../assets/gf/flora.png"

function GlassFitting() {
  return (
    <div className="my-4">
    <div className="row justify-content-center">
      <h3 id="product-heading">Glass and Door Fitting</h3>
    <Card title="Palladium" img={palladium}/>
    <Card title="Hemco" img={hemco}/>
    <Card title="Flora" img={flora}/>
    </div>
  </div>
  );
}

export default GlassFitting;