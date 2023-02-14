import React from 'react';
import { motion } from 'framer-motion';

import getAnimation from '../../config/framerAnimations/framerAnimations';
import { HorizontalFromLeft, VerticalFromTop } from '../../common/constants/constants';
import styles from './WorkExperience.module.scss';

const WorkExperience = () => {
  const verticalAnimation = getAnimation(VerticalFromTop);
  const horizontalAnimation = getAnimation(HorizontalFromLeft);

  return (
    <motion.section
      className={styles.workExperienceBlock}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.workExperienceContainer}>
        <motion.div className={styles.title} custom={1} variants={verticalAnimation}>
          <h2>
            Work <span>Experience</span>
          </h2>
        </motion.div>
        <motion.div
          className={styles.experience}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
        >
          <motion.h3 custom={1.5} variants={verticalAnimation}>
            :iTechArt <span>Group(Minsk)</span>
          </motion.h3>
          <motion.p
            className={styles.workPeriod}
            custom={2}
            variants={horizontalAnimation}
          >
            <span>Full time</span>
            <span>January 2022 - February 2023</span>
          </motion.p>
          <motion.p custom={3} variants={horizontalAnimation}>
            Key responsibilities:
          </motion.p>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
          >
            <motion.li custom={1} variants={horizontalAnimation}>
              Development new components and pages with React,Redux
            </motion.li>
            <motion.li custom={2} variants={horizontalAnimation}>
              Project architectural solutions (layering UI, BLL, DAL, server)
            </motion.li>
            <motion.li custom={3} variants={horizontalAnimation}>
              Working with REST (Registration/loginization/pagination)
            </motion.li>
            <motion.li custom={4} variants={horizontalAnimation}>
              Proper BLL state management
            </motion.li>
            <motion.li custom={5} variants={horizontalAnimation}>
              Writing unit tests
            </motion.li>
            <motion.li custom={6} variants={horizontalAnimation}>
              Setting of webpack
            </motion.li>
            <motion.li custom={7} variants={horizontalAnimation}>
              Setting of eslint, prettier
            </motion.li>
            <motion.li custom={8} variants={horizontalAnimation}>
              Refactoring code, avoiding duplication
            </motion.li>
            <motion.li custom={9} variants={horizontalAnimation}>
              Code decomposition optimization and optimisation with using useCallback,
              useMemo
            </motion.li>
            <motion.li custom={10} variants={horizontalAnimation}>
              Working on project using react-three/fiber, react-three/drei technology
            </motion.li>
            <motion.li custom={11} variants={horizontalAnimation}>
              participation in implementation of client-side and server-side authorization
              for application using express js technology
            </motion.li>
            <motion.li custom={12} variants={horizontalAnimation}>
              Team development
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          className={styles.experience}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
        >
          <motion.h3 custom={1.5} variants={verticalAnimation}>
            Project <span>Work</span>
          </motion.h3>
          <motion.p
            className={styles.workPeriod}
            custom={2}
            variants={horizontalAnimation}
          >
            <span>Part time</span>
            <span>June 2021 - January 2022</span>
          </motion.p>
          <motion.p custom={3} variants={horizontalAnimation}>
            Key responsibilities:
          </motion.p>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
          >
            <motion.li custom={1} variants={horizontalAnimation}>
              Project architectural solutions (layering UI, BLL, DAL, Server)
            </motion.li>
            <motion.li custom={2} variants={horizontalAnimation}>
              Development and update components with React(replaceable components)
            </motion.li>
            <motion.li custom={3} variants={horizontalAnimation}>
              Working with REST (Registration/loginization/pagination)
            </motion.li>
            <motion.li custom={4} variants={horizontalAnimation}>
              Proper BLL state management with Redux, Thunk, Toolkit
            </motion.li>
            <motion.li custom={5} variants={horizontalAnimation}>
              Refactoring code, avoiding duplication
            </motion.li>
            <motion.li custom={6} variants={horizontalAnimation}>
              Performance enhancement and optimization with using useCallback, useMemo
            </motion.li>
            <motion.li custom={7} variants={horizontalAnimation}>
              Bug fixing, deployin
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
