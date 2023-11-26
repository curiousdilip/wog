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
                  <i className="bi bi-geo-alt"></i>
                  <p>
                    G 32, Block C1,
                    <br />
                    BK Dutt Colony, New Delhi,
                    <br />Delhi 110003
                  </p>
                </div>
                <div className="phone list">
                  <i className="bi bi-telephone"></i> <p>+91 98688 83434</p>
                </div>
                <div className="email list">
                  <i className="bi bi-envelope"></i>
                  <p>wordofguidance@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row footer-nav">
                <div className="col-md-6">
                  <h4>Guidance</h4>
                  <ul>
                    <li>
                      <Link href="/faith">Faith</Link>
                    </li>
                    <li>
                      <Link href="/education">Education</Link>

                    </li>
                    <li>
                      <Link href="/job">Job</Link>
                    </li>
                    <li>
                      <Link href="/marriage">Marriage</Link>
                    </li>
                    <li>
                      <Link href="/christian-home">Christian Home</Link>
                    </li>
                    <li>
                      <Link href="/serving-god">Serving God</Link>
                    </li>
                    <li>
                      <Link href="/second-coming">Second Coming</Link>
                    </li>

                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>About</h4>
                  <ul>
                    <li>
                      <Link href="/about/bio">Bio</Link>
                    </li>
                    <li>
                      <Link href="/about/messages">Messages</Link>
                    </li>
                    <li>
                      <Link href="/about/events">Events</Link>
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
