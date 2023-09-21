'use client'; // This is a client component
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
// FontAwesome Icons
import { FaBars, FaGitSquare } from 'react-icons/fa';
import { RiMoonFill } from 'react-icons/ri';
import { BsPersonVcardFill, BsBrightnessHighFill } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const uncheckedSideMenu = () => {
    const elementToUnchecked = document.getElementById('check-box');
    if (elementToUnchecked) {
      elementToUnchecked.checked = false;
    }
  };

  return (
    <>
      <nav className={`sticky-top ${darkMode ? styles.navDark : ''}`}>
        <input type="checkbox" id="check-box" />
        <label
          htmlFor="check-box"
          className={`checkbtn ${darkMode ? styles.darkChkBtn : ''}`}
        >
          <FaBars />
        </label>

        {/* <!-- Offcanvas Section --> */}
        <button
          className={`navbar-toggler ${styles.navIcon} ${
            darkMode ? styles.navIconDark : ''
          } ${styles.address}`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <BsPersonVcardFill />
        </button>
        <div
          className={'offcanvas offcanvas-end'}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          data-bs-theme={darkMode ? 'dark' : ''}
          data-bs-scroll="true"
        >
          <div className={'offcanvas-header'}>
            <h5
              className={'offcanvas-title'}
              style={{ margin: 'auto', fontWeight: 'bold' }}
              id="offcanvasNavbarLabel"
            >
              Full Stack Web Developer
            </h5>
            <button
              type="button"
              className={'btn-close text-reset'}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className={'offcanvas-body'}>
            <div className={'container'}>
              <Image
                src="./img/profile.jpg"
                alt="Picture of the author"
                width={220}
                height={300}
                className={'rounded-circle border mx-auto'}
                style={{ display: 'block', height: '40vh', width: 'auto' }}
              />
            </div>
            <div className={'container'}>
              <h4 id={styles.canvasText}>
                I&apos;m open to any communication! I&apos;m always interested
                in hearing about new projects and opportunities.
              </h4>
            </div>

            {/* <!-- Profile Links  --> */}
            <div className={'container px-5 pt-4'}>
              <div className={'row'}>
                <div
                  className={`col ${styles.pLinkML}`}
                  style={{ padding: '0px', textAlign: 'center' }}
                >
                  <button
                    className={'btn'}
                    onClick={() =>
                      window.open(
                        'https://github.com/YeasirArafatZim/',
                        '_blank'
                      )
                    }
                  >
                    <FaGitSquare
                      className={styles.link_icon}
                      style={{ fontSize: '35px' }}
                    />
                  </button>
                </div>

                <div
                  className={'col'}
                  style={{ padding: '0px', textAlign: 'center' }}
                >
                  <button
                    className={'btn'}
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/in/yeasirarafatzim/',
                        '_blank'
                      )
                    }
                  >
                    <ImLinkedin
                      style={{ fontSize: '30px', color: 'rgb(32, 112, 187)' }}
                      className={styles.link_icon}
                    />
                  </button>
                </div>

                <div
                  className={'col'}
                  style={{ padding: '0px', textAlign: 'center' }}
                >
                  <button
                    className={'btn'}
                    onClick={() =>
                      window.open('mailto:yeasirarafatzim@gmail.com', '_blank')
                    }
                  >
                    <SiGmail
                      className={styles.link_icon}
                      style={{ fontSize: '33px', color: '#E13C2E' }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Dark Mode Section  --> */}

        <input type="checkbox" id="dark-mode" onClick={toggleDarkMode} />
        <label className={styles.darkMode}>
          <ToggleSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </label>

        {/* <!-- Logo Section  --> */}

        <label className={`logo ${darkMode ? styles.logoDark : ''}`}>
          <Link href={'#top'} onClick={uncheckedSideMenu}>
            <h3 id={styles.md}>
              <strong>Md. </strong>{' '}
            </h3>
            <h3 id={styles.yeasir}>
              <strong>Yeasir Arafat</strong>{' '}
            </h3>
          </Link>
        </label>
        <ul
          style={{ marginBottom: '0px' }}
          className={darkMode ? styles.ulNavDark : ''}
        >
          <li>
            <Link
              href={'#about'}
              onClick={uncheckedSideMenu}
              className={`${darkMode ? styles.linkDark : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={'#projects'}
              onClick={uncheckedSideMenu}
              className={`${darkMode ? styles.linkDark : ''}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={'#more'}
              onClick={uncheckedSideMenu}
              className={`${darkMode ? styles.linkDark : ''}`}
            >
              More
            </Link>
          </li>
          <li>
            <Link
              href={'#contact'}
              onClick={uncheckedSideMenu}
              className={`${darkMode ? styles.linkDark : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
