import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Slide } from "react-reveal";

function Main_Theme(props) {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 2000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <div className="min-h-screen">{props.children}</div>
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 active:animate-bounce"
        >
          <Slide bottom>
            <BsFillArrowUpCircleFill className="w-10 h-10 text-white bg-black rounded-full" />
          </Slide>
        </button>
      )}
    </div>
  );
}

export default Main_Theme;
