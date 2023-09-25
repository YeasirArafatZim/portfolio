import GithubRepoCard from '../GithubRepoCard/GithubRepoCard';
import ProjectsData from '@/data/projects.json';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <>
      <div id="projects">
        <h1 style={{ textAlign: 'center' }}>Projects</h1>
        <div className={styles.repoCards}>
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} key={repo.id} />;
          })}
        </div>
      </div>
    </>
  );
}
