import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import "./education.css";
import Breadcrumbs from "../components/breadcrumbs";
export default function Home() {
  return (
    <>
      <Header />
      <Breadcrumbs pageName="Education Bible" />
      <section id="education">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <div className="topic">
                  <p>
                    If any of you lacks wisdom, he should ask God, who gives
                    generously to all without finding fault, and it will be
                    given to him. (James 1:5)
                  </p>
                  <p>
                    The fear of the Lord is the beginning of wisdom; all who
                    follow His precepts have good understanding (Psalm 111:10)
                  </p>
                  <p>
                    Blessed is the man who finds wisdom, the man who gains
                    understanding (Proverbs 3:13)
                  </p>
                </div>
                <div className="topic">
                  <h3>For Education / Vocational & Higher Education (India)</h3>

                  <p>
                    <a href="http://www.nios.ac.in">www.nios.ac.in</a>
                    &nbsp;(Open schooling)
                  </p>
                  <p>
                    <a href="http://www.ignou.ac.in">www.ignou.ac.in</a>
                    &nbsp;(Education by correspondence)
                  </p>
                  <p>
                    <a href="http://www.indiastudycenter.com">
                      www.indiastudycenter.com
                    </a>
                    &nbsp;(info on Indian education / courses)
                  </p>
                  <p>
                    <a href="http://www.aiache.in">www.aiache.in</a>
                    &nbsp;(Christian higher education)
                  </p>
                  <p>
                    <a href="http://www.upsc.gov.in/general/civil.htm">
                      www.upsc.gov.in/general/civil.htm
                    </a>
                    &nbsp;(Indian civil services)
                  </p>
                  <p>
                    <a href="http://www.karunya.edu">www.karunya.edu</a>
                    &nbsp;(Karunya University)
                  </p>
                  <p>
                    <a href="http://www.cmch-vellore.edu">
                      www.cmch-vellore.edu
                    </a>
                    &nbsp;(Christian Medical College)
                  </p>
                  <p>
                    <a href="http://www.nsdcindia.org">www.nsdcindia.org</a>
                    &nbsp;(National Skills development Corporation of India)
                  </p>
                  <p>
                    <a href="http://www.nagaland.net.in">www.nagaland.net.in</a>
                    &nbsp;The Global Open University of Nagaland
                  </p>
                </div>
                <div className="topic">
                  <h3>Scholarships (India)</h3>

                  <p>
                    <a href="http://www.scholarshipsinindia.com/">
                      www.scholarshipsinindia.com
                    </a>
                  </p>
                  <p>
                    <a href="http://scholarship-positions.com/category/india-scholarships/">
                      http://scholarship-positions.com/category/india-scholarships/
                    </a>
                  </p>
                  <p>
                    <a href="http://scholarships.theiet.in/">
                      http://scholarships.theiet.in/
                    </a>
                  </p>
                  <p>
                    <a href="http://www.iccrindia.net/scholarshipschemes.html">
                      http://www.iccrindia.net/scholarshipschemes.html
                    </a>
                  </p>
                  <p>
                    <a href="http://www.ffe.org/">http://www.ffe.org/</a>
                  </p>
                  <p>
                    <a href="http://www.careers360.com/news/4793-Scholarship-Websites-India-Abroad">
                      http://www.careers360.com/news/4793-Scholarship-Websites-India-Abroad
                    </a>
                  </p>
                  <p>
                    <a href="http://www.momascholarship.gov.in/">
                      http://www.momascholarship.gov.in/
                    </a>
                  </p>
                </div>
                <div className="topic">
                  <h3>Learn English (through Hindi) – External Site</h3>
                  <p>
                    <a href="https://www.englishwale.com/wp-content/uploads/2018/08/Spoken-English-Guru-eBook.pdf">
                      Spoken English Guru eBook
                    </a>
                  </p>
                </div>
                <div className="topic">
                  <h3>Learn MS Word Basics (External Site)</h3>
                  <p>
                    <a href="https://www.tutorialspoint.com/word/word_tutorial.pdf">
                      Word Tutorial
                    </a>
                  </p>
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
