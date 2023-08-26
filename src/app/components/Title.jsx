import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from "./title.module.css"
import { Typography } from '@mui/material';

export function Title({ title }) {
  return (
    <header className={styles.container}>
      <ArrowBackIosNewIcon/>
      <Typography>{title}</Typography>
    </header>
  );
}
