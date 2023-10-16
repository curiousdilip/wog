import "./globals.css";
import { Jost } from "next/font/google";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export const metadata = {
  title: "Word of Guidance",
  description: "To equip for every good work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
