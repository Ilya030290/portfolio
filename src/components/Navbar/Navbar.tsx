import React, { LegacyRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import { PATH } from '../../common/constants/constants';
import styles from './Navbar.module.scss';

const Navbar = React.forwardRef<HTMLElement>(function Navbar(
  props,
  ref: LegacyRef<HTMLElement> | undefined
) {
  return (
    <nav className={styles.navbar} ref={ref}>
      <Link
        activeClass={styles.active}
        to={PATH.MAIN}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Main
      </Link>
      <Link
        activeClass={styles.active}
        to={PATH.SKILLS}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Skills
      </Link>
      <Link
        activeClass={styles.active}
        to={PATH.PROJECTS}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Projects
      </Link>
      <Link
        activeClass={styles.active}
        to={PATH.CONTACTS}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contacts
      </Link>
    </nav>
  );
});

export const MotionNavbar = motion(Navbar);
