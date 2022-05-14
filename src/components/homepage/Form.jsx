import React from "react";

function Form() {
return (
<section id="form" className="my-5">
  <div id="auth" className="w-third-l mw6-l center-l ph3 container w-75">
    <h1 className="text-center">Get In Touch</h1>
    <form action="/login" method="POST">
      <div className="form-group">
        <label htmlFor="Email">Email address</label>
        <input className="form-control" id="Email" name="email" placeholder="Enter Your Email" type="email" />
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="form-group">
        <div className="wrap">
          <button className="button">Submit</button>
        </div>
      </div>
    </form>
  </div>
</section>
);
}

export default Form;