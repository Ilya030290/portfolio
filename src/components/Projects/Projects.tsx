import React from 'react';
import { motion } from 'framer-motion';

import { MotionProject } from './Project';
import getAnimation from '../../config/framerAnimations/framerAnimations';
import {
  HorizontalFromRight,
  PATH,
  projects,
  VerticalFromTop,
} from '../../common/constants/constants';
import styles from './Projects.module.scss';

const Projects = () => {
  const textAnimation = getAnimation(VerticalFromTop);
  const projectsAnimation = getAnimation(HorizontalFromRight, 0.5);

  return (
    <motion.section
      id={PATH.PROJECTS}
      className={styles.projectsBlock}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.projectsContainer}>
        <motion.div className={styles.title} custom={1} variants={textAnimation}>
          <h2>
            My <span>Projects</span>
          </h2>
        </motion.div>
        <motion.div
          className={styles.projects}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          {projects.map((project) => {
            return (
              <MotionProject
                key={project.id}
                {...project}
                custom={project.id}
                variants={projectsAnimation}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
