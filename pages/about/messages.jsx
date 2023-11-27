import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { AudMessages, VidMessages } from "@/data/messages";
import Head from "next/head";
import Link from "next/link";
export default function Messages() {
    return (
        <>
            <Head>
                <title>Messages | Word of Guidance</title>
                <meta
                    name="description"
                    content="Dive into A N A N D's world of wisdom and inspiration on the Messages page. Explore insightful messages that resonate with positivity, purpose, and personal growth. Elevate your day with A N A N D's empowering words."
                />
                <link rel="canonical" href="https://www.wordofguidance.in/education" />
                <meta
                    property="og:title"
                    content="Messages | Word of Guidance"
                />
                <meta
                    property="og:description"
                    content="Dive into A N A N D's world of wisdom and inspiration on the Messages page. Explore insightful messages that resonate with positivity, purpose, and personal growth. Elevate your day with A N A N D's empowering words."
                />
                <meta property="og:url" content="https://www.wordofguidance.in/education" />
                <meta
                    property="og:site_name"
                    content="Messages | Word of Guidance"
                />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Messages | Word of Guidance"
                />
                <meta
                    name="twitter:description"
                    content="Dive into A N A N D's world of wisdom and inspiration on the Messages page. Explore insightful messages that resonate with positivity, purpose, and personal growth. Elevate your day with A N A N D's empowering words."
                />
            </Head>
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
                                            <Link href={item.link} aria-label="Video Message Link" target="_blank">
                                                <i className="bi bi-camera-video"> </i> {item.title}
                                            </Link>
                                        </p>
                                    ))}


                                </div>
                                <div className="topic">
                                    <h2>
                                        Audio Messages
                                    </h2>
                                    {AudMessages.map((item, index) => (
                                        <p key={index}>
                                            <Link href={item.link} aria-label="Audio Message Link" target="_blank">
                                                <i className="bi bi-mic"> </i> {item.title}
                                            </Link>
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
