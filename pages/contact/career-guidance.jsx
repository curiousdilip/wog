import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export default function Feedback() {
    return (
        <>
            <Head>
                <title>Career Guidance | Word of Guidance</title>
                <meta
                    name="description"
                    content="Connect for career guidance! Reach out through our Contact page to embark on a personalized journey toward professional success. Let's navigate your career path together and unlock your full potential."
                />
                <link rel="canonical" href="https://www.wordofguidance.in/contact/career-guidance" />
                <meta
                    property="og:title"
                    content="Career Guidance | Word of Guidance"
                />
                <meta
                    property="og:description"
                    content="Connect for career guidance! Reach out through our Contact page to embark on a personalized journey toward professional success. Let's navigate your career path together and unlock your full potential."
                />
                <meta property="og:url" content="https://www.wordofguidance.in/contact/career-guidance" />
                <meta
                    property="og:site_name"
                    content="Career Guidance | Word of Guidance"
                />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Career Guidance | Word of Guidance"
                />
                <meta
                    name="twitter:description"
                    content="Connect for career guidance! Reach out through our Contact page to embark on a personalized journey toward professional success. Let's navigate your career path together and unlock your full potential."
                />
            </Head>
            <Header />
            <Breadcrumbs pageName="Career Guidance" />
            <section id="cg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <div className="topic">
                                    <h3>You can contact A n a n d for getting free career guidance, if his time permits. Your messages below will
                                        NOT be posted anywhere online on this website or anywhere on the internet. Thanks.
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