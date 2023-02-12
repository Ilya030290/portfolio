import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';

import getAnimation from '../../config/framerAnimations/framerAnimations';
import {
  PATH,
  VerticalFomBottom,
  VerticalFromTop,
} from '../../common/constants/constants';
import mainPhoto from '../../assets/mainPhoto/photo_5411511695081325641_y.jpg';
import styles from './Main.module.scss';

const Main = () => {
  const textAnimation = getAnimation(VerticalFomBottom);
  const photoAnimation = getAnimation(VerticalFromTop);

  return (
    <motion.main
      id={PATH.MAIN}
      className={styles.mainBlock}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.container}>
        <motion.div className={styles.text} custom={4} variants={textAnimation}>
          <ReactTypingEffect
            eraseSpeed={150}
            speed={150}
            text={['Hi There!', 'Hello World!']}
          />
          <h1>
            <span>I am</span> Ilya Anoshko
          </h1>
          <ReactTypingEffect
            className={styles.paragraph}
            eraseSpeed={150}
            speed={150}
            text={['Frontend Developer', 'I like JavaScript and React']}
          />
        </motion.div>
        <motion.div
          className={styles.photoContainer}
          custom={4}
          variants={photoAnimation}
        >
          <img className={styles.photo} src={mainPhoto} alt={'mainPhoto'} />
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Main;
