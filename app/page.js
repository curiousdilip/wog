import Header from "./components/header";
import { aboutBox, contactBox, guidanceBox } from "./data/home";
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

      <section id="objectives">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>Objectives</h2>
                <p>the objectives of this informal website are as follows:</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>To freely guide jobless youth for positive approaches to education, career, life and family, with wisdom from the Bible, especially the teaching of Lord Jesus Christ.</li>
                <li>To freely counsel young professionals on authentic leadership, work-life balance, peaceful relationships and networking for extension of God's Kingdom through voluntary service in the Church and wider community.</li>
                <li>To freely guide individuals to overcome personal crises by offering hope from the Bible and through prayers.</li>
              </ul>
              <p> Jesus said, 'Let your light shine before others, that they may see your good deeds and glorify your Father in heaven (Mathew 5:16).'' I welcome you to partner with me in this humble and meaningful endeavor, in your free time, in person or online from wherever you live.</p>
              <p> With brotherly love,</p>
              <p>A n a n d</p>

            </div>
          </div>
        </div>
      </section>
      <section id="home-about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>About</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="box-container">
                {aboutBox.map((item, index) => (
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

      <section id="home-contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>Contact</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="box-container">
                {contactBox.map((item, index) => (
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
    </>
  );
}
