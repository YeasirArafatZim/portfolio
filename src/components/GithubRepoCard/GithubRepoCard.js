import { Icon } from '@iconify/react';
import styles from './GithubRepoCard.module.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, darkMode }) {
  function openRepoinNewTab(url) {
    if (url) {
      var win = window.open(url, '_blank');
      win.focus();
    }
  }

  return (
    <div
      className={styles.repoCardDiv}
      style={{
        backgroundColor: darkMode ? 'rgb(0, 86, 161)' : '#A6E1FA',
        cursor: repo.url ? 'pointer' : 'default',
      }}
    >
      {/* <Fade bottom duration={2000} distance="40px"> */}
      <div key={repo.id} onClick={() => openRepoinNewTab(repo.url)}>
        <div className={styles.repoNameDiv}>
          <Icon
            icon="pajamas:project"
            className={styles.repoSvg}
            style={{ color: darkMode ? 'white' : '' }}
          />
          <p
            className={styles.repoName}
            style={{ color: darkMode ? 'rgb(175, 215, 255)' : '#001C55' }}
          >
            {repo.name}
          </p>
        </div>
        <p
          className={styles.repoDescription}
          style={{ color: darkMode ? 'rgb(175, 215, 255)' : '#001C55' }}
        >
          {repo.description}
        </p>

        <p className={styles.repoCreationDate} style={{ color: '#8396B2' }}>
          Created on {repo.createdAt}
        </p>
        {/* Languages Logo Section */}
        <div className={styles.lanDiv}>
          <div className={styles.repoLanguages}>
            <ul className={styles.devIconsLanguages}>
              {repo.languages.map((logo, idx) => {
                return (
                  <OverlayTrigger
                    key={idx}
                    placement={'top'}
                    overlay={
                      <Tooltip id={`tooltip-top`}>
                        <strong>{logo.name}</strong>
                      </Tooltip>
                    }
                  >
                    <Icon
                      icon={logo.iconifyClass}
                      className={styles.inlineLanguages}
                    />
                  </OverlayTrigger>
                );
              })}
            </ul>
          </div>

          <div>
            <button
              className={`btn ${styles.btn}`}
              onClick={() => openRepoinNewTab(repo.live)}
            >
              {repo.live ? 'live preview' : 'screenshots'}
            </button>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}
