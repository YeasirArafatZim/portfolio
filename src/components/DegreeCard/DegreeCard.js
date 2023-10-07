import styles from './DegreeCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const DegreeCard = ({ degree, darkMode }) => {
  return (
    <div className={styles.degreeCard}>
      {degree.logo_path && (
        <div
          className={styles.cardImg}
          style={{
            boxShadow: darkMode ? '5px 5px 5px #393b41' : '5px 5px 5px #d9dbdf',
            border: darkMode ? '1px solid #2f2f30' : '1px solid #d9dbdf',
          }}
        >
          <Image
            src={`./img/${degree.logo_path}`}
            alt={degree.alt_name}
            width={100}
            height={150}
            style={{
              transform: 'scale(0.9)',
            }}
          />
        </div>
      )}

      <div
        className={styles.cardBody}
        style={{
          width: degree.logo_path ? '90%' : '100%',
          boxShadow: darkMode ? 'none' : '',
          border: darkMode ? 'none' : '',
        }}
      >
        <div
          className={styles.bodyHeader}
          style={{ backgroundColor: darkMode ? '#0056A1' : '#7EDED9' }}
        >
          <div className={styles.bodyHeaderTitle}>
            <h2
              className={styles.cardTitle}
              style={{ color: darkMode ? 'white' : '#084C61' }}
            >
              {degree.title}
            </h2>
            <h3
              className={styles.cardSubtitle}
              style={{ color: darkMode ? '#AFD7FF' : '#084C61' }}
            >
              {degree.subtitle}
            </h3>
          </div>
          <div className={styles.bodyHeaderDuration}>
            <h3
              className={styles.duration}
              style={{ color: darkMode ? '#8daecf' : '#084C61' }}
            >
              {degree.duration}
            </h3>
          </div>
        </div>
        <div
          className={styles.bodyContent}
          style={{ backgroundColor: darkMode ? '#747474' : '' }}
        >
          {degree.descriptions.map((sentence, idx) => {
            return (
              <p
                key={idx}
                className={styles.contentList}
                style={{ color: darkMode ? '#e6faf5' : '#084C61' }}
              >
                {sentence}
              </p>
            );
          })}
          {degree.website_link && (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`btn custom_btn ${styles.visitBtn} ${
                    darkMode ? styles.visitBtnDark : ''
                  }`}
                >
                  Visit Website
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DegreeCard;
