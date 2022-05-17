import React from "react";

function Card(props) {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
    <div className="card-grid-view">
      <div className="card-body">
        <img src={props.img} className="card-img" alt="item image" />
        <div className="text-center pt-2 card-content">
          <h5>{props.title}</h5>
          <p className="text-muted">{props.description}</p>
        </div>
        <div className="box-3 pt-1 pb-2 text-center">
          <div className="btn btn-three">
            <span>View product</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Card;
