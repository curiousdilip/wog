import "./globals.css";
import { Jost } from "next/font/google";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export const metadata = {
  title:
  {
    template: "%s | Word of Guidance ",
    default: 'Word of Guidance | To equip for every good work',
  },
  description: {
    template: "%s",
    default: 'This is a site of spiritual resources to assist individuals to know the Lord Jesus Christ who is the Light of the World.',
  }, openGraph: {
    images: '/hero-img.jpeg',
    description: "This is a site of spiritual resources to assist individuals to know the Lord Jesus Christ who is the Light of the World.",
    title: 'Word of Guidance | To equip for every good work',
    url: 'https://www.wordofguidance.in',
    siteName: 'Word of Guidance | To equip for every good work',
    locale: 'en_US',
    type: 'website',
  },
};
export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
