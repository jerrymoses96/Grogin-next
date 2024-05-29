import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { SortProvider } from "./context/SortContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/image/favIcon.png"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
        <SortProvider>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </SortProvider>
      </body>
    </html>
  );
}
