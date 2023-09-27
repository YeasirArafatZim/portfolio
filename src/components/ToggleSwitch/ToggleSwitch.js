import { Icon } from '@iconify/react';
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
          <Icon
            icon={darkMode ? 'noto-v1:last-quarter-moon-face' : 'noto:sun'}
          />
        </span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
