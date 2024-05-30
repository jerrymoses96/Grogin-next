import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { SortProvider } from "./context/SortContext";
import { PriceRangeProvider } from "./context/PriceRangeContext";
import { CategoryProvider } from "./context/CategoryContext";
import { ColorProvider } from "./context/ColorContext";

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
        <PriceRangeProvider>
          <SortProvider>
            <CategoryProvider>
              <ColorProvider>
                {/* <Header /> */}
                {children}
                {/* <Footer /> */}
              </ColorProvider>
            </CategoryProvider>
          </SortProvider>
        </PriceRangeProvider>
      </body>
    </html>
  );
}
