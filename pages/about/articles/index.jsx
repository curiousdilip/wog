import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { articles } from "@/data/articles";
import Head from "next/head";
import Link from "next/link";

export default function Articles() {
    return (
        <>
            <Head>
                <title>Articles | Word of Guidance</title>
                <meta
                    name="description"
                    content="Dive into a wealth of knowledge on our Articles page. Explore insightful, engaging, and diverse articles covering a range of topics. Enrich your understanding and stay informed with our curated content."
                />
                <link rel="canonical" href="https://www.wordofguidance.in/about/articles" />
                <meta
                    property="og:title"
                    content="Bio | Word of Guidance"
                />
                <meta
                    property="og:description"
                    content="Dive into a wealth of knowledge on our Articles page. Explore insightful, engaging, and diverse articles covering a range of topics. Enrich your understanding and stay informed with our curated content."
                />
                <meta property="og:url" content="https://www.wordofguidance.in/about/articles" />
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
                    content="Dive into a wealth of knowledge on our Articles page. Explore insightful, engaging, and diverse articles covering a range of topics. Enrich your understanding and stay informed with our curated content."
                />
            </Head>
            <Header />
            <Breadcrumbs pageName="Articles" />
            <section id="articles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box-container">

                                {articles.map((item, index) => (
                                    <Link className="box" key={index} href={item.link}>
                                        <div className="img-container">
                                            <img src={item.img} alt="Article Image" className="img-fluid" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                                {item.title}		</h3>
                                            <p>{item.author} | {item.date}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}