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
          <p className={styles.hi}>Hi There,</p>
          <p className={styles.head}>
            I am <span style={{ color: '#ff4c0a' }}>Yeasir</span>
          </p>
          <p className={styles.head}>Arafat</p>
          <p className={styles.subHead}>
            A professional Full Stack Web Developer
          </p>
          <p className={styles.text}>
            I'm a passionate and adaptable full-stack web developer with a
            profound understanding of web applications. I thrive on transforming
            creative ideas into functional, user-friendly web applications.
          </p>
          {/* <Link href={'#contact'}> */}
          <button className={`btn ${styles.btn}`} onClick={openPDF}>
            MY RESUME
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default Top;
