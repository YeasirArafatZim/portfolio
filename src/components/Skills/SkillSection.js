import styles from './Skills.module.css';
import { skills } from '@/data/data.js';
import { Icon } from '@iconify/react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import DataScienceImg from './image/DataScienceImg.js';
import FullStackImg from './image/FullStackImg.js';
import CloudInfraImg from './image/CloudInfraImg.js';
import DesignImg from './image/DesignImg.js';

function GetSkillSvg(props) {
  const theme = {
    text: '#001C55',
    highlight: '#A6E1FA',
    dark: '#00072D',
    imageHighlight: '#0E6BA8',
    compImgHighlight: '#E6E6E6',
    jacketColor: '#0A2472',
  };

  if (props.fileName === 'DataScienceImg')
    return <DataScienceImg theme={theme} />;
  else if (props.fileName === 'FullStackImg')
    return <FullStackImg theme={theme} />;
  else if (props.fileName === 'CloudInfraImg')
    return <CloudInfraImg theme={theme} />;
  return <DesignImg theme={theme} />;
}

export default function SkillSection({ darkMode }) {
  return (
    <div>
      {skills.data.map((skill, idx) => {
        let reminder = 0;
        if (idx % 2 == 1) {
          reminder = 1;
        }
        return (
          <div className={styles.mainDiv} key={idx}>
            <div
              className={styles.imageDiv}
              style={{ order: reminder ? 2 : '' }}
              data-aos={`${reminder ? 'fade-left' : 'fade-right'}`}
            >
              <GetSkillSvg fileName={skill.fileName} />
            </div>

            <div
              className={styles.textDiv}
              data-aos={`${reminder ? 'fade-right' : 'fade-left'}`}
            >
              <h1
                className={styles.heading}
                style={{ color: darkMode ? 'white' : 'black' }}
              >
                {skill.title}
              </h1>

              <div>
                <ul className={styles.devIcons}>
                  {skill.softwareSkills.map((logo) => {
                    return (
                      <li
                        className={styles.softwareSkillInline}
                        name={logo.skillName}
                        key={logo.skillName}
                      >
                        {logo.iconifyClassname && (
                          <OverlayTrigger
                            placement={'top'}
                            overlay={
                              <Tooltip id={`tooltip-top`}>
                                <strong>{logo.skillName}</strong>
                              </Tooltip>
                            }
                          >
                            <Icon
                              icon={logo.iconifyClassname}
                              style={logo.style}
                            />
                          </OverlayTrigger>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                {skill.skills.map((skillSentence, idx) => {
                  return (
                    <p
                      className={styles.skillsText}
                      style={{
                        color: darkMode ? 'rgb(207, 207, 207)' : '#222a41',
                      }}
                      key={idx}
                    >
                      {skillSentence}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
