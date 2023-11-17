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
      </head>
      <body>{children}</body>
    </html>
  );
}
