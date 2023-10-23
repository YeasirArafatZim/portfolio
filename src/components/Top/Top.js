import styles from './Top.module.css';

const Top = () => {
  const openPDF = () => {
    const pdfUrl = './resume.pdf';
    window.open(pdfUrl, '_blank');
  };
  return (
    <>
      <div className={styles.imgbox}>
        <div className={`${styles.center}`}>
          <p
            className={styles.hi}
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
          >
            Hi There,
          </p>
          <p
            className={styles.head}
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
          >
            I am <span style={{ color: '#ff4c0a' }}>Yeasir</span>
          </p>
          <p
            className={styles.head}
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
          >
            Arafat
          </p>
          <p
            className={styles.subHead}
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
          >
            A professional Full Stack Web Developer
          </p>
          <p
            className={styles.text}
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
          >
            I'm a passionate and adaptable full-stack web developer with a
            profound understanding of web applications. I thrive on transforming
            creative ideas into functional, user-friendly web applications.
          </p>
          {/* <Link href={'#contact'}> */}
          <button
            className={`btn ${styles.btn}`}
            onClick={openPDF}
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
          >
            MY RESUME
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default Top;
