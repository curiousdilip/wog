import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import { aboutBox, contactBox, guidanceBox } from "./data/home";
import "./home.css";
Image;
export default function Home() {
  // const pageTitle = "Word of Guidance | To equip for every good work";
  // const pageDescription = "";
  // const pageKeywords = "";
  // const pageAuthor = "";
  // const pageLink = "";
  // const pageImage = "";
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
              <a href="#hero-details" className="scroll-down" address="true">
                <i className="bi bi-caret-down"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="hero-details">
        <div className="hero-img"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                {/* <Image
                  src="/hero-img.jpeg"
                  width={800}
                  height={500}
                  alt="Hero Image"
                  className="my-3 img-fluid w-100"
                /> */}
                <p>
                  He is light because divine glory was evident in Him as the
                  life giver. As He is light, demons (powers of darkness) flee
                  away from His Presence! Jesus is light because He delivers us
                  from darkness (sinful living under the control of Satan) and
                  leads us to a life of holiness. He is light because His words
                  guide us on our pilgrimage to heaven. Christ is our model as
                  He is the Way to holiness, the embodiment of Truth that
                  liberates and blesses us with a life that is abundant in
                  meaning and purpose. Jesus is calling us to be His disciples
                  so that we can also live as He lived, with holiness, humility,
                  honesty and love. The content provided in this website will
                  also equip you for every good work for His glory.
                </p>
                <p>
                  Furthermore the objectives of this informal website are as
                  follows:
                </p>
                <ul>
                  <li>
                    To freely guide jobless youth for positive approaches to
                    education, career, life and family, with wisdom from the
                    Bible, especially the teaching of Lord Jesus Christ.
                  </li>
                  <li>
                    To freely counsel young professionals on authentic
                    leadership, work-life balance, peaceful relationships and
                    networking for extension of God's Kingdom through voluntary
                    service in the Church and wider community.
                  </li>
                  <li>
                    To freely guide individuals to overcome personal crises by
                    offering hope from the Bible and through prayers.
                  </li>
                </ul>
                <p>
                  {" "}
                  Jesus said, 'Let your light shine before others, that they may
                  see your good deeds and glorify your Father in heaven (Mathew
                  5:16).'' I welcome you to partner with me in this humble and
                  meaningful endeavor, in your free time, in person or online
                  from wherever you live.
                </p>
                <p> With brotherly love,</p>
                <p>A n a n d</p>
              </div>
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
                    <h3>{item.title}</h3>
                    <a href={item.link}>Learn More</a>
                  </div>
                ))}
              </div>
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
                    <h3>{item.title}</h3>
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
                    <h3>{item.title}</h3>
                    <a href={item.link}>Learn More</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
