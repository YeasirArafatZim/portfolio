import styles from './Educations.module.css';
import DegreeCard from '@/components/DegreeCard/DegreeCard';
import { degrees } from '@/data/data';

const Educations = ({ darkMode }) => {
  return (
    <div id="educations" className={'container'} style={{ overflow: 'hidden' }}>
      <div>
        <h1
          className={styles.heading}
          style={{ color: darkMode ? 'white' : 'black' }}
          data-aos="zoom-out"
        >
          Educations
        </h1>
      </div>
      <div>
        {degrees.degrees.map((degree, idx) => {
          return <DegreeCard degree={degree} darkMode={darkMode} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Educations;
