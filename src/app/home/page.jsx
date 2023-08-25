import Image from 'next/image'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import styles from "./home.module.css";
import mobile from "../mobile.module.css";

export default function Home() {
  return (
    <>
      <Header />
    <div className={styles.circle} >
    </div>
      <Footer/>
    </>
  )
}
