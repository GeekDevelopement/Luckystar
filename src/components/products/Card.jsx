import React from "react";

function Card(props) {
return (
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
  <div id="container" className="py-3">
    <div class="card">
      <div class="imgBx">
        <img src={props.img} alt="product img"/>
      </div>
      <div class="contentBx">
        <h2>{props.title}</h2>
        <a href={props.title}>View Products</a>
      </div>

    </div>
  </div>
</div>
);
}

export default Card;