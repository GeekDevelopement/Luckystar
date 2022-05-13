import React from "react";

function Item(props) {
return <>
  <div className="col-md-3 col-lg-3 col-xl-3">
  <div className="card-grid-view">
      <div className="card-body">
  <img src={props.img} className="card-img" alt="item image" />
        <div className="text-center mt-2 card-content">
          <h4>{props.title}</h4>
          <p className="text-muted">{props.description}</p>
        </div>
        <div className="d-flex justify-content-between total font-weight-bold ">
          <h5>Rate</h5><h5>{props.rate}</h5>
        </div>
        <div className="box-3 pt-4 pb-2 text-center">
          <div className="btn btn-three">
            <span>View product</span>
          </div>
        </div>
        </div>
      </div>
  </div>
</>
;
}

export default Item;