import { AnimationsType } from '../../common/types/types';
import {
  HorizontalFromLeft,
  HorizontalFromRight,
  VerticalFomBottom,
  VerticalFromTop,
} from '../../common/constants/constants';

const getAnimation = (name: AnimationsType, duration?: number) => {
  if (name === HorizontalFromLeft || name === HorizontalFromRight) {
    return {
      hidden: {
        // eslint-disable-next-line no-nested-ternary
        x: name === HorizontalFromLeft ? -100 : name === HorizontalFromRight ? 100 : 0,
        opacity: 0,
      },
      visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3, ease: 'easeOut', duration: 1 },
      }),
    };
  }
  if (name === VerticalFromTop || name === VerticalFomBottom) {
    return {
      hidden: {
        // eslint-disable-next-line no-nested-ternary
        y: name === VerticalFromTop ? -100 : name === VerticalFomBottom ? 100 : 0,
        opacity: 0,
      },
      visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.3,
          ease: 'easeOut',
          duration: duration ? duration : 1,
        },
      }),
    };
  }
};

export default getAnimation;
