import { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.css';
import { FaHandPointUp } from 'react-icons/fa';

const ScrollToTop = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // setIsVisible(true);
    // setTimeout(() => {
    //   setIsVisible(false);
    // }, 3000);
    if (window.scrollY > 140) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${styles.block} ${darkMode ? styles.dark : ''}`}
        style={{
          display: isVisible ? 'flex' : 'none',
          backgroundColor: darkMode ? 'white' : 'black',
        }}
        onClick={scrollToTop}
      >
        <FaHandPointUp
          className={`${styles.icon} ${darkMode ? styles.darkIcon : ''}`}
        />
      </div>
    </>
  );
};
export default ScrollToTop;
