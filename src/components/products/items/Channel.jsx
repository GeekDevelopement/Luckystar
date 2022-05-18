import Card from "../Card";
import casa from "../assets/channel/casa.png"
import baba from "../assets/channel/baba.png"
import hepo from "../assets/channel/hepo.png"

function Channel() {
return (
<div className="container my-4">
    <div className="row justify-content-center">
        <h2 className="text-center pb-3">Telescopic Channel</h2>
        <Card title="Casa" description="Telescopic Channel"
            img={casa} />
        <Card title="Baba" description="Telescopic Channel"
            img={baba} />
        <Card title="Hepo" description="Telescopic Channel"
            img={hepo} />
    </div>
</div>
)
;
}

export default Channel;