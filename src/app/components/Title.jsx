import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from "./title.module.css"
import { Typography } from '@mui/material';
import Router, { useRouter } from 'next/navigation'
import { IconButton } from "@mui/material";

export function Title({ title }) {

  const router = useRouter();

  return (
    <header className={styles.container}>
      <IconButton onClick={() => router.back()}><ArrowBackIosNewIcon/></IconButton>
      <Typography>{title}</Typography>
    </header>
  );
}
