import React from 'react';
import { motion } from 'framer-motion';

import getAnimation from '../../config/framerAnimations/framerAnimations';
import { HorizontalFromLeft } from '../../common/constants/constants';
import { MotionNavbar } from '../Navbar/Navbar';
import styles from './Header.module.scss';

const Header = () => {
  const textAnimation = getAnimation(HorizontalFromLeft);

  return (
    <motion.header
      className={styles.header}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <MotionNavbar custom={4} variants={textAnimation} />
    </motion.header>
  );
};

export default Header;
