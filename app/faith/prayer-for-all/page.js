import Header from '../../components/header';
import Footer from '../../components/footer';
import Breadcrumbs from '../../components/breadcrumbs';
export default function Prayers() {
  return (
    <>
      <Header />
      <Breadcrumbs pageName="Prayers for All Bible" />
      <section id="prayers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h3>
                  Prayers for all who seek The Lord with faith on his Promises
                </h3>
                <p>
                  “Ask and it will be given to you; seek and you will find;
                  knock and the door will be opened to you” – (Jesus) (Matthew 7:7)
                </p>
                <div className="topic">
                  <h3> Index of Prayers in this page:</h3>
                  <ol>
                    <li><a href="#repentance">Prayer of Repentance</a></li>
                    <li><a href="#repentance">A Prayer for those in sorrow and sickness</a></li>
                    <li><a href="#repentance">Prayer for financial blessings</a></li>
                    <li><a href="#repentance">Prayer for Protection</a></li>
                    <li><a href="#repentance">Prayer for deliverance from evil</a></li>
                    <li><a href="#repentance">Prayer by Parents for children</a></li>
                    <li><a href="#repentance">A prayer of faith for the gift of children</a></li>
                    <li><a href="#repentance">Prayer for Students / Exams</a></li>
                    <li><a href="#repentance">Prayer for Singles seeking marriage</a></li>
                    <li><a href="#repentance">Prayer for guidance</a></li>
                    <li><a href="#repentance">Prayer for professionals / workers</a></li>
                  </ol>
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