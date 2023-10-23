'use client'; // This is a client component
import Navbar from '@/components/Navbar/Navbar';
import Top from '@/components/Top/Top';
import Projects from '@/components/Projects/Projects';
import Educations from '@/components/Educations/Educations';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { useState } from 'react';
import Footer from '@/components/Footer/Footer';
import Skills from '@/components/Skills/Skills';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 0, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'center-center', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  const darkStyle = {
    backgroundColor: '#0F0F0F',
    color: 'white',
    transition: 'background-color 1s ease',
  };
  const tran = {
    transition: 'background-color 1s ease',
  };
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main style={darkMode ? darkStyle : tran}>
        <Top />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Educations darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />

        {/* <div style={{ height: '900px' }}>
          <iframe
            src="https://my.spline.design/untitled-498c2ed4ce8c3e1c397f362b61dea097/"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div> */}
        <ScrollToTop darkMode={darkMode} />
      </main>
    </>
  );
}
