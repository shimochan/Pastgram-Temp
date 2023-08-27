'use client'

import Image from 'next/image';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { get_home } from '../lib/page';
import styles from "./home.module.css";

export default function Home() {
  const { isLoading, data } = useQuery('home', get_home);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main className={styles.flame}>
      <div className={styles.grid}>
        <div className={styles.square1} >
          <Image src="/pin.png" alt="pin" width="40" height="40" className={styles.pin} />
        </div>

        <div className={styles.square2} >
          <Image src="/pin.png" alt="pin" width="40" height="40" className={styles.pin} />
        </div>

        <div className={styles.square3} >
          <Image src="/pin.png" alt="pin" width="40" height="40" className={styles.pin} />
        </div>

        <div className={styles.square4} >
          <Image src="/pin.png" alt="pin" width="40" height="40" className={styles.pin} />
        </div>
      </div>
    </main>
  )
}
