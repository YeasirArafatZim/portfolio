import styles from './Footer.module.css';

export default function Footer({ darkMode }) {
  return (
    <>
      <div
        className={styles.div}
        style={{
          borderTop: darkMode ? '1px solid rgb(146, 145, 145)' : 'none',
        }}
      >
        <p className={styles.text}>
          &copy; 2022 | All Rights Reserved | Designed by{' '}
          <span style={{ color: 'white' }}>Yeasir Arafat</span>
        </p>
      </div>
    </>
  );
}
