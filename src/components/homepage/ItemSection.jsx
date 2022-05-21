import React from "react";
import Item from "./Item";

function ItemSection() {
return (
    <section id="product">
        <div className="container my-4">
            <h1 id="categories-heading" className="pb-3">PRODUCT CATEGORIES</h1>
            <div className="row justify-content-center">
                <Item title="SCREW" description="All types Of Screw" link="screw"
                    img="https://media.istockphoto.com/vectors/vector-3d-realistic-steel-bolts-nails-screws-vector-id1172147283?k=20&m=1172147283&s=612x612&w=0&h=QgIjVGDJTBwwTSQ7_kRAYM_3yDmsGZRR4qEa_OaAZPI=" />
                <Item title="CASA" description="Tubular locks" link="casa"
                    img="https://3.imimg.com/data3/BI/AP/MY-3241453/cylindrical-tubular-locks-500x500.jpg" />
                <Item title="EUROPA" description="Antique locks" link="europa"
                    img="https://m.media-amazon.com/images/I/51eo0ObG8aL.jpg" />
                <Item title="DORSET" description="Digital door lock" link="dorset"
                    img="https://www.dorsetindia.com/Uploads/ProductsImage/801.jpg" />
                <Item title="GODREJ" description="Navtal 7 levers 4 Keys Padlock" link="godrej"
                    img="https://m.media-amazon.com/images/I/5144inlQMFL._SX522_.jpg" />
                <Item title="HAFELE" description="Tandem Box" link="hafele"
                    img="https://5.imimg.com/data5/BR/NP/MY-36244974/hafele-draw-hyderabad-500x500.jpg" />
                <Item title="EBCO" description="Furniture Fittings And Accessories" link="ebco"
                    img="https://ebco.in/image/cache/catalog/Table%20Bracket/table-bracket-550x550.jpg" />
                <Item title="NAILS" description="All types Of nails" link="nails"
                    img="https://3.imimg.com/data3/JI/DY/GLADMIN-1354/nails-500x500.jpg" />
            </div>
        </div>
    </section>
)
}

export default ItemSection;