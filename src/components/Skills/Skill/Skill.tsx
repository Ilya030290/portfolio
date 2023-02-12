import React, { LegacyRef } from 'react';
import { motion } from 'framer-motion';

import { SkillInterface } from '../../../common/types/types';
import styles from './Skill.module.scss';

const Skill = React.forwardRef<HTMLElement, SkillInterface>(function Skill(
  { title, description, image },
  ref: LegacyRef<HTMLElement> | undefined
) {
  return (
    <article className={styles.skill} ref={ref}>
      <img src={image} className={styles.icon} alt="skillImage"></img>
      <h3>{title}</h3>
      <div className={styles.description}>
        {description.map((el) => (
          <span key={el}>{el}</span>
        ))}
      </div>
    </article>
  );
});

export const MotionSkill = motion(Skill);
