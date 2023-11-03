import Breadcrumbs from "@/app/components/breadcrumbs";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import "./invite.css"
export default function InviteMe() {
    return (
        <>
            <Header />
            <Breadcrumbs pageName="Invite A N A N D to Speak " />
            <section id="invite">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <div className="topic">
                                    <h3>You can invite A n a n d to speak in your church, fellowship, convention or retreats. Your messages below will NOT be posted anywhere online on this website or anywhere on the internet. Thanks.
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