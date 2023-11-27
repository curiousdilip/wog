import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Head>
                <title>Education | Word of Guidance</title>
                <meta
                    name="description"
                    content="Empower your future through insightful education resources. Explore innovative learning approaches, career guidance, and educational insights. Navigate the path to success with our comprehensive and valuable information."
                />
                <link rel="canonical" href="https://www.wordofguidance.in/education" />
                <meta
                    property="og:title"
                    content="Education | Word of Guidance"
                />
                <meta
                    property="og:description"
                    content="Empower your future through insightful education resources. Explore innovative learning approaches, career guidance, and educational insights. Navigate the path to success with our comprehensive and valuable information."
                />
                <meta property="og:url" content="https://www.wordofguidance.in/education" />
                <meta
                    property="og:site_name"
                    content="Education | Word of Guidance"
                />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Education | Word of Guidance"
                />
                <meta
                    name="twitter:description"
                    content="Empower your future through insightful education resources. Explore innovative learning approaches, career guidance, and educational insights. Navigate the path to success with our comprehensive and valuable information."
                />
            </Head>
            <Header />
            <Breadcrumbs pageName="Education" />
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
                                        <Link href="http://www.nios.ac.in">www.nios.ac.in</Link>
                                        &nbsp;(Open schooling)
                                    </p>
                                    <p>
                                        <Link href="http://www.ignou.ac.in">www.ignou.ac.in</Link>
                                        &nbsp;(Education by correspondence)
                                    </p>
                                    <p>
                                        <Link href="http://www.indiastudycenter.com">
                                            www.indiastudycenter.com
                                        </Link>
                                        &nbsp;(info on Indian education / courses)
                                    </p>
                                    <p>
                                        <Link href="http://www.aiache.in">www.aiache.in</Link>
                                        &nbsp;(Christian higher education)
                                    </p>
                                    <p>
                                        <Link href="http://www.upsc.gov.in/general/civil.htm">
                                            www.upsc.gov.in/general/civil.htm
                                        </Link>
                                        &nbsp;(Indian civil services)
                                    </p>
                                    <p>
                                        <Link href="http://www.karunya.edu">www.karunya.edu</Link>
                                        &nbsp;(Karunya University)
                                    </p>
                                    <p>
                                        <Link href="http://www.cmch-vellore.edu">
                                            www.cmch-vellore.edu
                                        </Link>
                                        &nbsp;(Christian Medical College)
                                    </p>
                                    <p>
                                        <Link href="http://www.nsdcindia.org">www.nsdcindia.org</Link>
                                        &nbsp;(National Skills development Corporation of India)
                                    </p>
                                    <p>
                                        <Link href="http://www.nagaland.net.in">www.nagaland.net.in</Link>
                                        &nbsp;The Global Open University of Nagaland
                                    </p>
                                </div>
                                <div className="topic">
                                    <h3>Scholarships (India)</h3>

                                    <p>
                                        <Link href="http://www.scholarshipsinindia.com/">
                                            www.scholarshipsinindia.com
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="http://scholarship-positions.com/category/india-scholarships/">
                                            http://scholarship-positions.com/category/india-scholarships/
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="http://scholarships.theiet.in/">
                                            http://scholarships.theiet.in/
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="http://www.iccrindia.net/scholarshipschemes.html">
                                            http://www.iccrindia.net/scholarshipschemes.html
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="http://www.ffe.org/">http://www.ffe.org/</Link>
                                    </p>
                                    <p>
                                        <Link href="http://www.careers360.com/news/4793-Scholarship-Websites-India-Abroad">
                                            http://www.careers360.com/news/4793-Scholarship-Websites-India-Abroad
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="http://www.momascholarship.gov.in/">
                                            http://www.momascholarship.gov.in/
                                        </Link>
                                    </p>
                                </div>
                                <div className="topic">
                                    <h3>Learn English (through Hindi) – External Site</h3>
                                    <p>
                                        <Link href="https://www.englishwale.com/wp-content/uploads/2018/08/Spoken-English-Guru-eBook.pdf">
                                            Spoken English Guru eBook
                                        </Link>
                                    </p>
                                </div>
                                <div className="topic">
                                    <h3>Learn MS Word Basics (External Site)</h3>
                                    <p>
                                        <Link href="https://www.tutorialspoint.com/word/word_tutorial.pdf">
                                            Word Tutorial
                                        </Link>
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
