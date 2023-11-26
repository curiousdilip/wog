import Head from 'next/head';
import '../styles/home.css';
import '../styles/faith.css';
import '../styles/globals.css';
import '../styles/bible-on-sin.css';
import '../styles/hftb.css';
import '../styles/cg.css';
import '../styles/cap.css';
import '../styles/feedback.css';
import '../styles/sg.css';
import '../styles/invite.css';
import '../styles/events.css';
import '../styles/sc.css';
import '../styles/job.css';
import '../styles/marriage.css';
import '../styles/bio.css';
import '../styles/messages.css';
import '../styles/testimony.css';
import '../styles/cshome.css';
import '../styles/education.css';
import '../styles/pwg.css';
import '../styles/prayer.css';
import { Jost } from 'next/font/google';
import { Poppins } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="application-name" content="Word of Guidance " />
        <link rel="author" href="https://www.dilipmaurya.in" />
        <meta name="author" content="Dilip Kumar" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="word of guidance, wog, word, of ,guidance"
        />
        <meta property="og:image" content="/hero-img.jpeg"></meta>
        <meta property="twitter:image" content="/hero-img.jpeg"></meta>
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="robots" content="nofollow, noindex" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
