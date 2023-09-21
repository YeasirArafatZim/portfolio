import emoji from 'react-easy-emoji';
import styles from './ToggleSwitch.module.css';

const ToggleSwitch = ({ darkMode, toggleDarkMode }) => {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
        className={styles.input}
      />
      <span className={`${styles.slider} ${styles.round}`}>
        <span className={styles.emoji}>
          {darkMode ? emoji('🌜') : emoji('☀️')}
        </span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
