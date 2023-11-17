import "./globals.css";
import { Jost } from "next/font/google";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
        <title>Word of Guidance | To equip for every good work</title>
        <meta name="description" content="This is a site of spiritual resources to assist individuals to know the Lord Jesus Christ who is the Light of the World." />
        <meta name="keywords" content="word, of, guidance," />
        <meta name="author" content="Dilip Kumar Maurya" />
        <meta name="robots" content="noindex, nofollow" />
        {/* <!-- To allow search engines to index and follow links --> */}

        {/* <!-- Open Graph meta tags for better social media sharing --> */}
        <meta property="og:title" content="Word of Guidance | To equip for every good work" />
        <meta property="og:description" content="This is a site of spiritual resources to assist individuals to know the Lord Jesus Christ who is the Light of the World." />
        <meta property="og:image" content="/hero-img.jpeg" />
        <meta property="og:url" content="https://www.wordofguidance.in" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Card meta tags for Twitter sharing --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Word of Guidance | To equip for every good work" />
        <meta name="twitter:description" content="This is a site of spiritual resources to assist individuals to know the Lord Jesus Christ who is the Light of the World.
" />
        <meta name="twitter:image" content="/hero-img.jpeg" />

        {/* <!-- Canonical URL to specify the preferred version of a page --> */}
        <link rel="canonical" href="https://www.wordofguidance.in" />
        <link rel="icon" href="path/to/favicon.ico" type="image/x-icon" />

      </head>
      <body>{children}</body>
    </html>
  );
}
