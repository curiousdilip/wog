import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { faithBox } from "@/data/faith";
export default function Faith() {
    return (
        <>
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
                                        <a href={item.link}>Learn More</a>
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
