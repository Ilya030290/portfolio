import React from 'react';
import { motion } from 'framer-motion';

import { PATH, VerticalFomBottom } from '../../common/constants/constants';
import getAnimation from '../../config/framerAnimations/framerAnimations';
import styles from './Contacts.module.scss';

const Contacts = () => {
  const verticalAnimation = getAnimation(VerticalFomBottom);

  return (
    <motion.section
      id={PATH.CONTACTS}
      className={styles.contactsBlock}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.contactsContainer}>
        <motion.div className={styles.title} custom={1} variants={verticalAnimation}>
          <h2>
            My <span>Contacts</span>
          </h2>
        </motion.div>
        <motion.div
          className={styles.mailPhoneContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <motion.h2 custom={2} variants={verticalAnimation}>
            I am available for work
          </motion.h2>
          <motion.p
            className={styles.phoneNumber}
            custom={3}
            variants={verticalAnimation}
          >
            +375(29)219-60-11
          </motion.p>
          <motion.p custom={4} variants={verticalAnimation}>
            anoshko9079@gmail.com
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contacts;
