import { Icon } from '@iconify/react';
import styles from './GithubRepoCard.module.css';
// import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  return (
    <div className={styles.repoCardDiv} style={{ backgroundColor: '#A6E1FA' }}>
      {/* <Fade bottom duration={2000} distance="40px"> */}
      <div key={repo.id} onClick={() => openRepoinNewTab(repo.url)}>
        <div className={styles.repoNameDiv}>
          <Icon icon="pajamas:project" className={styles.repoSvg} />
          <p className={styles.repoName} style={{ color: '#001C55' }}>
            {repo.name}
          </p>
        </div>
        <p className={styles.repoDescription} style={{ color: '#001C55' }}>
          {repo.description}
        </p>
        <div className={styles.repoDetails}>
          <p className={styles.repoCreationDate} style={{ color: '#8396B2' }}>
            Created on {repo.createdAt}
          </p>
          {/* Languages Logo Section */}
          <div className={styles.repoLanguages}>
            <ul className={styles.devIconsLanguages}>
              {repo.languages.map((logo, idx) => {
                return (
                  <Icon
                    key={idx}
                    icon={logo.iconifyClass}
                    className={styles.inlineLanguages}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}
