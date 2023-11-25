import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Feedback() {
    return (
        <>
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