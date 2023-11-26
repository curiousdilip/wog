import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
export default function InviteMe() {
    return (
        <>
            <Head>
                <title>Invite Me | Word of Guidance</title>
                <meta
                    name="description"
                    content="Extend invitations effortlessly! Explore our Invite page to discover user-friendly tools for organizing events, gatherings, and more. Simplify your planning and ensure a warm welcome for every occasion."
                />
                <link rel="canonical" href="https://www.wordofguidance.in/contact/invite-me" />
                <meta
                    property="og:title"
                    content="Invite Me| Word of Guidance"
                />
                <meta
                    property="og:description"
                    content="Extend invitations effortlessly! Explore our Invite page to discover user-friendly tools for organizing events, gatherings, and more. Simplify your planning and ensure a warm welcome for every occasion."
                />
                <meta property="og:url" content="https://www.wordofguidance.in/contact/invite-me" />
                <meta
                    property="og:site_name"
                    content="Invite Me| Word of Guidance"
                />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Invite Me| Word of Guidance"
                />
                <meta
                    name="twitter:description"
                    content="Extend invitations effortlessly! Explore our Invite page to discover user-friendly tools for organizing events, gatherings, and more. Simplify your planning and ensure a warm welcome for every occasion."
                />
            </Head>
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