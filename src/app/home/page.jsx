import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import styles from "./home.module.css";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
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

      <Footer />
    </>
  )
}
