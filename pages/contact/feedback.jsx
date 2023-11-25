import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Feedback() {
    return (
        <>
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