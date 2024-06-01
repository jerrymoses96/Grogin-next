import Image from "next/image";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainHome/MainPage";
import Header from "./components/header/Header";


export const metadata = {
  title: "Grogin Next",
  description: "Generated by create next app",
};

export default function Home() {
  return<>
  
  
    <Header />
    <div className="wrapper">
      <MainPage />
    </div>
    <Footer />
  </>;
}
