import Breadcrumbs from "@/app/components/breadcrumbs";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import "./feedback.css"
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