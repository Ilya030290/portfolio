import {
  HorizontalFromLeft,
  HorizontalFromRight,
  VerticalFomBottom,
  VerticalFromTop,
} from '../constants/constants';

export type AnimationsType =
  | typeof HorizontalFromLeft
  | typeof HorizontalFromRight
  | typeof VerticalFromTop
  | typeof VerticalFomBottom;

export interface SkillInterface {
  title: string;
  description: string[];
  image: string;
}

export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  path: string;
}
