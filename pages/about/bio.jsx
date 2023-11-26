import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";
export default function Bio() {
    return (
        <>
            <Head>
                <title>Bio | Word of Guidance</title>
                <meta
                    name="description"
                    content="Discover A N A N D and Dive into his life, passions, and experiences on this bio page. Explore the journey, interests, and insights that shape their unique story."
                />
                <link rel="canonical" href="https://www.wordofguidance.in/education" />
                <meta
                    property="og:title"
                    content="Bio | Word of Guidance"
                />
                <meta
                    property="og:description"
                    content="Discover A N A N D and Dive into his life, passions, and experiences on this bio page. Explore the journey, interests, and insights that shape their unique story."
                />
                <meta property="og:url" content="https://www.wordofguidance.in/education" />
                <meta
                    property="og:site_name"
                    content="Bio | Word of Guidance"
                />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Bio | Word of Guidance"
                />
                <meta
                    name="twitter:description"
                    content="Discover A N A N D and Dive into his life, passions, and experiences on this bio page. Explore the journey, interests, and insights that shape their unique story."
                />
            </Head>
            <Header />
            <Breadcrumbs pageName="Bio" />
            <section id="bio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <div className="topic">
                                    <div className="row">
                                        <h3 className="text-center">Profile of A n a n d:</h3>
                                        <div className="col-md-4">
                                            <Image
                                                src="/second-coming-1.png"
                                                width={600}
                                                height={800}
                                                alt="Second Coming"
                                                className="text-center img-fluid w-100"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <p>
                                                A n a n d D a v i d is working in a multilateral
                                                organisation in New Delhi. In his free time, he engages
                                                in preaching and Christian writing. He has been
                                                privileged to preach notably as a volunteer of the Bible
                                                Society of India, in churches of various denominations.
                                                He has also been a guest speaker in youth retreats and
                                                campus fellowships. He has contributed Christian
                                                articles for The Hindu, Times of India, Management
                                                Devotional of Christian Manager, Campus Link,
                                                Forerunner, and Aim magazine. He has ministered in
                                                various cities of India and in a few countries such as
                                                the US, South Korea, Malaysia, Thailand, and China. He
                                                is an alumnus of Haggai Institute of leadership, USA. A
                                                n a n d holds a B.Sc., (Honours) in Physics from the
                                                American College, Madurai, an MBA in NGO management from
                                                the Global Open University, Nagaland and an M.Div. from
                                                the Union Biblical Seminary, Pune. A n a n d and his
                                                wife S h a r m i l e e attend Centenary Methodist
                                                Church, New Delhi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="details">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>
                                            <span>Name : </span>A n a n d D a v i d
                                        </p>
                                        <p>
                                            <span>BORN :</span>1969, Chennai, India
                                        </p>
                                        <p>
                                            <span>EDUCATION :</span>
                                        </p>
                                        <p> MBA, Open University, Nagaland/IGNOU </p>
                                        <p>MDiv, Union Biblical Seminary, Pune </p>
                                        <p> BSc (Honors), American College, Madurai</p>
                                        <p>
                                            <span>SHORT TERM COURSES:</span> MS-Office, Journalism,
                                            Research Methodology, Socio-Economic Rehabilitation,
                                            leadership, prayer ministry
                                        </p>
                                        <p>
                                            <span>PROFESSION:</span> Development Professional and
                                            Content Writer
                                        </p>
                                        <p>
                                            <span>LANGUAGES KNOWN:</span> Tamil, English, basic Hindi
                                            and basic Telugu
                                        </p>
                                        <p>
                                            <span>TRAVEL:</span> Travelled 23 Indian states; USA, (UK
                                            on transit), Malaysia, China, South Korea, Thailand, Nepal
                                            and Bhutan
                                        </p>
                                        <p>
                                            <span>FAMILY:</span> Married S h a r m i l e e, Oct 1999;
                                            from Guntur, Andhra (A homemaker & prayer partner)
                                        </p>
                                        <p>
                                            <span>EXTENDED FAMILY:</span>
                                        </p>
                                        <p>
                                            <span>Father:</span> (Late) Rev. D B T David, Arcot
                                            Lutheran Church
                                        </p>
                                        <p>
                                            <span>Mother:</span> Mrs. Sarojini David (Tampa, FL)
                                        </p>
                                        <p>
                                            <span>Brother:</span> John & family Tampa, FL; Sister:
                                            Rachel & family, Bangalore
                                        </p>
                                        <p>
                                            <span> In-law:</span> (Late) Dr. T. Alexander
                                            Rajabhushanam, Prof, Andhra Christian College, Guntur &
                                            family
                                        </p>
                                        <p>
                                            <span>VOLUNTARY INTERESTS:</span> Volunteering in church
                                            events for spiritual growth and professional development.
                                        </p>
                                        <p>To read my testimony, please click here.</p>
                                        <p>
                                            To watch a video of my career and professional values,
                                            please click here
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <Image
                                            src="/second-coming-1.png"
                                            width={1000}
                                            height={800}
                                            alt="Second Coming"
                                            className="text-center img-fluid w-100"
                                        />
                                    </div>
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
