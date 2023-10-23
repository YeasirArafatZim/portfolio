import GithubRepoCard from '../GithubRepoCard/GithubRepoCard';
import ProjectsData from '@/data/projects.json';
import styles from './Projects.module.css';

export default function Projects({ darkMode }) {
  return (
    <>
      <div id="projects" className="container" style={{ overflow: 'hidden' }}>
        <h1
          className={`${styles.heading} ${darkMode ? styles.darkHead : ''}`}
          data-aos="zoom-out"
        >
          Projects
        </h1>
        <div className={styles.repoCards}>
          {ProjectsData.data.map((repo, idx) => {
            return (
              <GithubRepoCard
                repo={repo}
                key={repo.id}
                darkMode={darkMode}
                index={idx}
              />
            );
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() =>
              window.open('https://github.com/YeasirArafatZim/', '_blank')
            }
            className={`btn ${styles.btn} ${darkMode ? styles.btnDark : ''}`}
          >
            More Projects
          </button>
        </div>
      </div>
    </>
  );
}
