import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={styles.div}>
        <p className={styles.text}>
          &copy; 2022 | All Rights Reserved | Designed by{' '}
          <span style={{ color: 'white' }}>Yeasir Arafat</span>
        </p>
      </div>
    </>
  );
}
