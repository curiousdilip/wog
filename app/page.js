import Header from "./components/header";
import { guidanceBox } from "./data/home";
import "./home.css";
export default function Home() {
  return (
    <>
      <Header />
      <section id="hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading">
                <h2>Word of Guidance</h2>
                <p>To equip for every good work</p>
              </div>
              <div className="note">
                <h2>There is no commercial purpose for this website.</h2>
              </div>
              <a href="#home-guidance" className="scroll-down" address="true">
                <i className="bi bi-caret-down"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="home-guidance">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>Guidance</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="box-container">
                {guidanceBox.map((item, index) => (
                  <div className="box" key={index}>
                    <img src={item.src} alt={item.title} />
                    <h2>{item.title}</h2>
                    <a href={item.link}>Learn More</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3>Section 2</h3>
      </section>
      <section>
        <h4>Section 3</h4>
      </section>
      <section>
        <h5>Section 4</h5>
      </section>
    </>
  );
}
