"use client"; // This is a client component
import styles from './Navbar.module.css';
import darkStyles from './DarkNavbar.module.css';
import { useState } from 'react';
// FontAwesome Icons  
import { FaBars, FaFontAwesome, FaGitSquare } from 'react-icons/fa';
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsPersonVcardFill } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode =()=>{
    setDarkMode(prevDarkMode => !prevDarkMode);
    console.log(darkMode)
  }

  return (
    <>
      <nav className={`sticky-top`}>
        <input type="checkbox" id="check-box" />
        <label htmlFor="check-box" className={'checkbtn'}>
          {/* <i className={"fa fa-bars"}></i> */}
          <FaBars />
        </label>

        {/* <!-- Offcanvas Section --> */}
        <button
          className={`navbar-toggler ${styles.navIcon} ${styles.address}`}
          // style={{float: 'right', marginRight: '20px', marginLeft: '20px'}}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          {/* <i className={"fa fa-address-card-o"} style={{fontSize: '27px'}}></i> */}
          <BsPersonVcardFill />
        </button>
        <div
          className={'offcanvas offcanvas-end'}
          // tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
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
              <img
                className={'rounded-circle border mx-auto'}
                style={{ display: 'block', height: '40vh'}}
                src="./img/profile.jpg"
                alt=""
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
                <div className={`col ${styles.pLinkML}`} style={{ padding: '0px', textAlign:'center'}}>
                  <button
                    className={'btn'}
                    // onclick="location.href='https://github.com/YeasirArafatZim/'"
                  >
                    <FaGitSquare
                      className={styles.link_icon}
                      style={{ fontSize: '35px' }}
                    />
                  </button>
                </div>

                <div className={'col'} style={{ padding: '0px', textAlign:'center' }}>
                  <button
                    className={'btn'}
                    // onclick="location.href='https://www.linkedin.com/in/yeasirarafatzim/'"
                  >
                    <ImLinkedin
                      style={{ fontSize: '30px', color: 'rgb(32, 112, 187)' }}
                      className={styles.link_icon}
                    />
                  </button>
                </div>

                <div className={'col'} style={{ padding: '0px', textAlign:'center' }}>
                  <button
                    className={'btn'}
                    // onclick="location.href='mailto:yeasirarafatzim@gmail.com'"
                  >
                    <SiGmail className={styles.link_icon} style={{ fontSize: '33px', color: '#E13C2E' }}/>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* <!-- Dark Mode Section  --> */}

        <input
          type="checkbox"
          id="dark-mode"
          // onclick="myFunction()"
          onClick={toggleDarkMode}
        />
        <label
          htmlFor="dark-mode"
          className={`${styles.navIcon} ${styles.darkMode}`}
        >
          {/* <i className={"fa fa-moon-o"}></i> */}
          <MdOutlineDarkMode />
        </label>

        {/* <!-- Logo Section  --> */}

        <label className={'logo'}>
          <h3 id={styles.md}>
            <strong>Md. </strong>{' '}
          </h3>
          <h3 id={styles.yeasir}>
            <strong>Yeasir Arafat</strong>{' '}
          </h3>
        </label>
        <ul style={{ marginBottom: '0px' }}>
          <li>
            <a
              href="#about"
              // onclick="uncheckedSideMenu()"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              // onclick="uncheckedSideMenu()"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#more"
              // onclick="uncheckedSideMenu()"
            >
              More
            </a>
          </li>
          <li>
            <a
              href="#contact"
              // onclick="uncheckedSideMenu()"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
