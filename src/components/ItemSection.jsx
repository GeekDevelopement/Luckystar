import React from "react";
import Item from "./Item";

function ItemSection() {
return <>
<div className="container">
    <h1 className="text-center pt-2 mt-3">Our Products</h1>
    <div className="row justify-content-center">
    <Item title="Screw" description="All types Of Screw" rate="250" img="https://media.istockphoto.com/vectors/vector-3d-realistic-steel-bolts-nails-screws-vector-id1172147283?k=20&m=1172147283&s=612x612&w=0&h=QgIjVGDJTBwwTSQ7_kRAYM_3yDmsGZRR4qEa_OaAZPI="/>
    <Item title="Casa" description="Tubular locks" rate="250" img="https://3.imimg.com/data3/BI/AP/MY-3241453/cylindrical-tubular-locks-500x500.jpg"/>
    <Item title="Europa" description="Antique locks" rate="250" img = "https://m.media-amazon.com/images/I/51eo0ObG8aL.jpg"/>
    <Item title="Dorset" description="Digital door lock" rate="250" img="https://www.dorsetindia.com/Uploads/ProductsImage/801.jpg"/>
    <Item title="Godrej" description="Navtal 7 levers 4 Keys Padlock" rate="250" img="https://m.media-amazon.com/images/I/5144inlQMFL._SX522_.jpg"/>
    <Item title="Hafele" description="Tandem Box" rate="250" img="https://5.imimg.com/data5/BR/NP/MY-36244974/hafele-draw-hyderabad-500x500.jpg" />
    <Item title="Ebco" description="Furniture Fittings And Accessories" rate="250" img="https://ebco.in/image/cache/catalog/Table%20Bracket/table-bracket-550x550.jpg"/>
    <Item title="Nails" description="All types Of nails" rate="250" img="https://3.imimg.com/data3/JI/DY/GLADMIN-1354/nails-500x500.jpg"/>
    </div>
    </div>
</>;
}

export default ItemSection;