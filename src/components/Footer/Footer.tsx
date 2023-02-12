import React from 'react';
import { motion } from 'framer-motion';

import getAnimation from '../../config/framerAnimations/framerAnimations';
import { Links, VerticalFomBottom } from '../../common/constants/constants';
import telegramIcon from '../../assets/footerImages/telegram.png';
import githubIcon from '../../assets/footerImages/github.png';
import linkedInIcon from '../../assets/footerImages/linkedin.png';
import styles from './Footer.module.scss';

const Footer = () => {
  const verticalAnimation = getAnimation(VerticalFomBottom);

  return (
    <motion.footer
      className={styles.footerBlock}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.footer}>
        <motion.a
          href={Links.telegram}
          target="_blank"
          rel="noreferrer"
          custom={1}
          variants={verticalAnimation}
        >
          <img src={telegramIcon} alt={'telegramIcon'} />
        </motion.a>
        <motion.a
          href={Links.github}
          target="_blank"
          rel="noreferrer"
          custom={2}
          variants={verticalAnimation}
        >
          <img src={githubIcon} alt={'githubIcon'} />
        </motion.a>
        <motion.a
          href={Links.linkedIn}
          target="_blank"
          rel="noreferrer"
          custom={3}
          variants={verticalAnimation}
        >
          <img src={linkedInIcon} alt={'linkedInIcon'} />
        </motion.a>
      </div>
    </motion.footer>
  );
};

export default Footer;
