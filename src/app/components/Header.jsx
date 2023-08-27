'use client'

import styles from "./header.module.css"
import { logo } from '../lib/font';

export function Header() {
  return (
   
    <header className={styles.container}>
      <div className={[logo.className, styles.logo].join(' ')} variant="h5" align="center">
        Pastgram
      </div>
     <div className={styles.text}>＃高校の修学旅行</div>
     <div className={styles.day}>あと3日</div>
    </header>
  );
}
