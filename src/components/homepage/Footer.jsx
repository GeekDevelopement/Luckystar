function Footer() {
return (
<footer className="text-white text-center text-lg-start">
  <div className="container p-4">
    <div className="row mt-4">
      <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-4">About us</h5>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti.
        </p>
        <p>
          Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias.
        </p>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase text-center mb-4">Contact us</h5>
        <ul className="fa-ul" style={{marginLeft: "1.65em"}}>
          <li className="mb-3">
            <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Gulal Wadi, 1st Floor,
              Room, 42, Kika St, Maharashtra</span>
          </li>
          <li className="mb-3">
            <span className="fa-li"><i className="fas fa-envelope"></i></span><span
              className="ms-2">moh.morbi8@gmail.com</span>
          </li>
          <li className="mb-3">
            <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+91 88500 86234</span>
          </li>
          <li className="mb-3">
            <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+022 4015 4208</span>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-4 text-center">Opening hours</h5>

        <table className="table text-center text-white">
          <tbody className="fw-normal">
            <tr>
              <td>Mon - Thu:</td>
              <td>10am - 7pm</td>
            </tr>
            <tr>
              <td>Fri - Sat:</td>
              <td>10am - 7pm</td>
            </tr>
            <tr>
              <td>Sunday:</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</footer>
)
}

export default Footer