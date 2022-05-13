import React from "react";

function Form() {
return (
<section id="form" className="my-5">
  <div id="auth" className="w-third-l mw6-l center-l ph3 container w-50">
    <h1 className="text-center">Get In Touch</h1>
    <form action="/login" method="POST">
      <div className="form-group">
        <label for="Email">Email address</label>
        <input className="form-control" id="Email" name="email" placeholder="Enter Your Email" type="email" value="" />
      </div>
      <br />
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="form-group">
        <a id="button" href="#" class="cta">
          <span>Submit</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
    </form>
  </div>
</section>
);
}

export default Form;