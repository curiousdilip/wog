import Breadcrumbs from "../components/breadcrumbs";
import Footer from "../components/footer";
import Header from "../components/header";
import { AudMessages, VidMessages } from "../data/messages";
import "./messages.css";
export default function Messages() {
  return (
    <>
      <Header />
      <Breadcrumbs pageName="Messages" />
      <section id="messages">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <div className="topic">
                  <h2>Video Messages</h2>
                  {VidMessages.map((item, index) => (
                    <p key={index}>
                      <a href={item.link} aria-label="Video Message Link" target="_blank">
                        <i className="bi bi-camera-video"> </i> {item.title}
                      </a>
                    </p>
                  ))}


                </div>
                <div className="topic">
                  <h2>
                    Audio Messages
                  </h2>
                  {AudMessages.map((item, index) => (
                    <p key={index}>
                      <a href={item.link} aria-label="Audio Message Link" target="_blank">
                        <i className="bi bi-mic"> </i> {item.title}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
