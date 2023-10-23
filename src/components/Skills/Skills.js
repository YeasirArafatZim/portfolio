import styles from './Skills.module.css';
import SkillSection from './SkillSection.js';

export default function Skills({ darkMode }) {
  return (
    <div className="container" id="skills" style={{ overflow: 'hidden' }}>
      <div>
        <h1
          className={styles.skillsHeader}
          style={{ color: darkMode ? 'white' : '#222a41' }}
          data-aos="zoom-out"
        >
          What I Do?
        </h1>
      </div>
      <SkillSection darkMode={darkMode} />
    </div>
  );
}
