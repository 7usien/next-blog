import { Besley } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const besley = Besley({
 subsets: ["latin"],
 display: "swap",
 weights: [400, 700],
});

export const metadata = {
 title: "egydes blog",
 description: "a web blog intersted in ui, css and front=end development",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body className={besley.className}>
    <Header />

    {children}

    <Footer />
   </body>
  </html>
 );
}
