import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { faithBox } from "@/data/faith";
import Head from "next/head";
import Link from "next/link";
export default function Faith() {
    return (
        <>
            <Head>
                <title>Faith | Word of Guidance</title>
                <meta
                    name="description"
                    content="Faith in the Bible is trust in God's promises, unseen realities, and salvation through Jesus Christ, transforming lives eternally.
"
                />
                <link rel="canonical" href="https://www.wordofguidance.in/faith" />
                <meta
                    property="og:title"
                    content="Faith | Word of Guidance"
                />
                <meta
                    property="og:description"
                    content="Faith in the Bible is trust in God's promises, unseen realities, and salvation through Jesus Christ, transforming lives eternally.
"
                />
                <meta property="og:url" content="https://www.wordofguidance.in/faith" />
                <meta
                    property="og:site_name"
                    content="Faith | Word of Guidance"
                />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Faith | Word of Guidance"
                />
                <meta
                    name="twitter:description"
                    content="Faith in the Bible is trust in God's promises, unseen realities, and salvation through Jesus Christ, transforming lives eternally.
"
                />
            </Head>
            <Header />
            <Breadcrumbs pageName="Faith" />
            <section id="faith">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10 ">
                            <div className="section-heading text-center">
                                <h2>Faith</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box-container">
                                {faithBox.map((item, index) => (
                                    <div className="box" key={index}>
                                        <img src={item.src} alt={item.title} />
                                        <h3>{item.title}</h3>
                                        <Link href={item.link}>Learn More</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
