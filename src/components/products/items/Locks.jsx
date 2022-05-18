import Card from "../Card";
import casa from "../assets/locks/casa.png"
import godrej from "../assets/locks/godrej.png"
import europa from "../assets/locks/europa.png"
import dorset from "../assets/locks/dorset.png"

function Locks() {
return (
<div className="container my-4">
  <div className="row justify-content-center">
    <h2 className="text-center pb-3">Locks</h2>
    <Card title="Casa" description="All types Of locks"
      img={casa} />
    <Card title="Godrej" description="All types Of locks"
      img={godrej} />
   <Card title="Europa" description="All types Of locks"
      img={europa} />
       <Card title="Dorset" description="All types Of locks"
      img={dorset} />
  </div>
</div>
);
}

export default Locks;