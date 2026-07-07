import { useEffect, useState } from "react";

import Intro from "../../components/Intro/Intro";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import About from "../../components/About/About";
import DashboardPreview from "../../components/DashboardPreview/DashboardPreview";

function Landing() {

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setShowIntro(false);

    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <>
      {showIntro ? (

        <Intro />

      ) : (

        <>
          <Navbar />
          <Hero />
          <Features />
          <About/>
          <DashboardPreview/>
        </>

      )}
    </>

  );

}

export default Landing;