import { Component, FC, ReactElement, ReactNode } from 'react';
import { Typography, TypographyProps } from '@mui/material';

import s from './IconTypography.module.scss';

interface IconTypographyProps {
  icon: ReactNode | ReactElement | Component;
  props: TypographyProps;
  children: Component | Node | string | number;
}

const IconTypography: FC<IconTypographyProps> = ({
  icon,
  children,
  ...props
}) => (
  <Typography className={s.typography} {...props}>
    {icon}
    {children}
  </Typography>
);

export default IconTypography;
