import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
export default function Events() {
    return (
        <>
            <Head>
                <title>Events | Word of Guidance</title>
                <meta
                    name="description"
                    content="Stay in the loop with our exciting events! Explore our events page for upcoming happenings, gatherings, and experiences. Join us for memorable moments and connect with a community of like-minded individuals."
                />
                <link rel="canonical" href="https://www.wordofguidance.in/education" />
                <meta
                    property="og:title"
                    content="Events | Word of Guidance"
                />
                <meta
                    property="og:description"
                    content="Stay in the loop with our exciting events! Explore our events page for upcoming happenings, gatherings, and experiences. Join us for memorable moments and connect with a community of like-minded individuals."
                />
                <meta property="og:url" content="https://www.wordofguidance.in/education" />
                <meta
                    property="og:site_name"
                    content="Events | Word of Guidance"
                />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Events | Word of Guidance"
                />
                <meta
                    name="twitter:description"
                    content="Stay in the loop with our exciting events! Explore our events page for upcoming happenings, gatherings, and experiences. Join us for memorable moments and connect with a community of like-minded individuals."
                />
            </Head>
            <Header />
            <Breadcrumbs pageName="Events" />
            <section id="events">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <p>Anand gets invitations to speak in churches, campus fellowships, staff devotions and small groups. His major speaking engagements or announcements of ministry will be posted on this page.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}