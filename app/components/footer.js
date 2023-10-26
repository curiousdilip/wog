import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link href="/" className="footer-logo">
                <h3>
                  WORDOF<span>GUIDANCE</span>
                </h3>
              </Link>

              <div className="connect">
                <div className="location list">
                  <i className="bi bi-geo-alt"></i>{" "}
                  <p>
                    Investment Advisory Wing: B 915, Advant <br /> IT Park,
                    Sector - 142,Noida, Gautam
                    <br /> Buddha Nagar -201305
                  </p>
                </div>
                <div className="phone list">
                  <i className="bi bi-telephone"></i> <p>+91 0001254325</p>
                </div>
                <div className="email list">
                  <i className="bi bi-envelope"></i>{" "}
                  <p>getintouch@domain.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row footer-nav">
                <div className="col-md-6">
                  <h4>Links</h4>
                  <ul>
                    <li>
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <a href="#">Job</a>
                    </li>
                    <li>
                      <a href="#">Marriage</a>
                    </li>
                    <li>
                      <a href="#">Christian Home</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>We Offer</h4>
                  <ul>
                    <li>
                      <a href="#">Counselling & Prayers</a>
                    </li>
                    <li>
                      <a href="#">Career Guidance</a>
                    </li>
                    <li>
                      <a href="#">Invite me</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
