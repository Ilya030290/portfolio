import React from 'react';
import { motion } from 'framer-motion';

import { MotionSkill } from './Skill';
import getAnimation from '../../config/framerAnimations/framerAnimations';
import {
  HorizontalFromLeft,
  PATH,
  skills,
  VerticalFromTop,
} from '../../common/constants/constants';
import styles from './Skills.module.scss';

const Skills = () => {
  const textAnimation = getAnimation(VerticalFromTop);
  const skillsAnimation = getAnimation(HorizontalFromLeft, 0.8);

  return (
    <motion.section
      className={styles.skillsBlock}
      id={PATH.SKILLS}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.skillsContainer}>
        <motion.div className={styles.title} custom={1} variants={textAnimation}>
          <h2>
            My <span>Skills</span>
          </h2>
        </motion.div>
        <motion.div
          className={styles.skills}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          {skills.map((skill) => {
            return (
              <MotionSkill
                key={skill.id}
                {...skill}
                custom={skill.id}
                variants={skillsAnimation}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
