import React, { LegacyRef } from 'react';
import { motion } from 'framer-motion';

import { ProjectInterface } from '../../../common/types/types';
import styles from './Project.module.scss';

const Project = React.forwardRef<HTMLElement, ProjectInterface>(function Project(
  { title, description, image, path },
  ref: LegacyRef<HTMLElement> | undefined
) {
  return (
    <article className={styles.project} ref={ref}>
      <div className={styles.imageContainer}>
        <img src={image} alt="projectImage" />
        <a
          href={path}
          target="_blank"
          className={`${styles.link} ${styles.super}`}
          rel="noreferrer"
        >
          Watch
        </a>
      </div>
      <div className={styles.title}>{title}</div>
      <span className={styles.description}>{description}</span>
    </article>
  );
});

export const MotionProject = motion(Project);
