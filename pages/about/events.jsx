import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Events() {
    return (
        <>
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