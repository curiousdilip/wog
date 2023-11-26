import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
export default function Feedback() {
    return (
        <>
            <Head>
                <title>Feedback | Word of Guidance</title>
                <meta
                    name="description"
                    content="Share your thoughts on our Feedback page! Your opinions matter, and we value your input. Help us enhance your experience by providing feedback. Let's build a better platform together!"
                />
                <link rel="canonical" href="https://www.wordofguidance.in/contact/feedback" />
                <meta
                    property="og:title"
                    content="Feedback | Word of Guidance"
                />
                <meta
                    property="og:description"
                    content="Share your thoughts on our Feedback page! Your opinions matter, and we value your input. Help us enhance your experience by providing feedback. Let's build a better platform together!"
                />
                <meta property="og:url" content="https://www.wordofguidance.in/contact/feedback" />
                <meta
                    property="og:site_name"
                    content="Feedback | Word of Guidance"
                />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Feedback | Word of Guidance"
                />
                <meta
                    name="twitter:description"
                    content="Share your thoughts on our Feedback page! Your opinions matter, and we value your input. Help us enhance your experience by providing feedback. Let's build a better platform together!"
                />
            </Head>
            <Header />
            <Breadcrumbs pageName="Feedback " />
            <section id="feedback">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <div className="topic">
                                    <h3>We welcome your feedback. Your feedback will NOT be posted anywhere online on this website or
                                        anywhere on the internet. Thanks.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}