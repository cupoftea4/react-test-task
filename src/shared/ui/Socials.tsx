import { FC } from 'react';
import FacebookIcon from '@/assets/socials/FacebookIcon';
import InstagramIcon from '@/assets/socials/InstagramIcon';
import { classes } from '@/styles/utils';
import styles from './Socials.module.scss';

type OwnProps = {
  light?: boolean;
}

const Socials : FC<OwnProps> = ({light = false}) => {
  return (
    <ul className={classes(styles.root, light && styles.light)}>
      <li><a href="#"><FacebookIcon /></a></li>
      <li><a href="#"><InstagramIcon/></a></li>
    </ul>
  )
}

export default Socials;