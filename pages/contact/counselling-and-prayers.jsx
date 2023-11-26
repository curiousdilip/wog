import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
export default function Feedback() {
    return (
        <>
            <Head>
                <title>Counselling and Prayers | Word of Guidance</title>
                <meta
                    name="description"
                    content="Seek support and solace through our Contact page for counseling and prayers. Reach out for guidance, comfort, and a listening ear. Together, we can navigate life's challenges with faith and resilience."
                />
                <link rel="canonical" href="https://www.wordofguidance.in/contact/counselling-and-prayers" />
                <meta
                    property="og:title"
                    content="Counselling and Prayers | Word of Guidance"
                />
                <meta
                    property="og:description"
                    content="Seek support and solace through our Contact page for counseling and prayers. Reach out for guidance, comfort, and a listening ear. Together, we can navigate life's challenges with faith and resilience."
                />
                <meta property="og:url" content="https://www.wordofguidance.in/contact/counselling-and-prayers" />
                <meta
                    property="og:site_name"
                    content="Counselling and Prayers | Word of Guidance"
                />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Counselling and Prayers | Word of Guidance"
                />
                <meta
                    name="twitter:description"
                    content="Seek support and solace through our Contact page for counseling and prayers. Reach out for guidance, comfort, and a listening ear. Together, we can navigate life's challenges with faith and resilience."
                />
            </Head>
            <Header />
            <Breadcrumbs pageName="Counselling And Prayers
 " />
            <section id="cap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <div className="topic">
                                    <h3>You can contact A n a n d for counselling and prayers. Your messages below will NOT be posted
                                        anywhere online on this website or anywhere on the internet. Thanks.
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